'use client';

import { useEffect, useRef, useState } from 'react';

function heartRateY(x: number) {
  const cycle = 120;
  const t = ((x % cycle) + cycle) % cycle;
  const points = [
    [0, 0],
    [20, 0],
    [28, -5],
    [36, 0],
    [48, 0],
    [53, -18],
    [58, 52],
    [63, -24],
    [70, 0],
    [88, 0],
    [98, 10],
    [108, 0],
    [120, 0],
  ] as const;

  for (let i = 0; i < points.length - 1; i += 1) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[i + 1];

    if (t >= x1 && t <= x2) {
      const progress = (t - x1) / (x2 - x1);
      return y1 + (y2 - y1) * progress;
    }
  }

  return 0;
}

export default function ECGMonitor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const lastFrameRef = useRef<number | null>(null);
  const [bpm, setBpm] = useState(72);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const canvasEl = canvas;
    const ctx = canvasEl.getContext('2d');
    if (!ctx) return;
    const context = ctx;

    const pixelsPerSecond = 86;
    const trailLen = 420;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const width = canvasEl.offsetWidth;
      const height = canvasEl.offsetHeight;

      canvasEl.width = width * dpr;
      canvasEl.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(timestamp = 0) {
      const lastFrame = lastFrameRef.current ?? timestamp;
      const delta = Math.min(40, timestamp - lastFrame);
      lastFrameRef.current = timestamp;
      const w = canvasEl.offsetWidth;
      const h = canvasEl.offsetHeight;

      context.clearRect(0, 0, w, h);

      context.strokeStyle = 'rgba(122, 31, 61, 0.08)';
      context.lineWidth = 0.5;
      for (let x = 0; x < w; x += 30) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, h);
        context.stroke();
      }
      for (let y = 0; y < h; y += 20) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(w, y);
        context.stroke();
      }

      const mid = h / 2;
      const amp = h * 0.38;

      context.beginPath();
      context.lineWidth = 2.4;
      context.lineJoin = 'round';
      context.lineCap = 'round';

      for (let px = 0; px <= w; px += 0.5) {
        const dataX = px + offsetRef.current;
        const y = mid + heartRateY(dataX * 0.7) * (amp / 60);

        if (px === 0) context.moveTo(px, y);
        else context.lineTo(px, y);
      }

      const grad = context.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, 'rgba(122, 31, 61, 0)');
      grad.addColorStop(Math.min(1, (trailLen / w) * 0.4), 'rgba(122, 31, 61, 0.28)');
      grad.addColorStop(Math.min(1, trailLen / w), 'rgba(122, 31, 61, 0.9)');
      grad.addColorStop(1, 'rgba(122, 31, 61, 1)');
      context.strokeStyle = grad;
      context.stroke();

      const headY = mid + heartRateY((w + offsetRef.current) * 0.7) * (amp / 60);
      context.shadowColor = 'rgba(122, 31, 61, 0.42)';
      context.shadowBlur = 14;
      context.beginPath();
      context.arc(w - 3, headY, 3.5, 0, Math.PI * 2);
      context.fillStyle = '#7A1F3D';
      context.fill();
      context.shadowBlur = 0;

      if (!prefersReducedMotion) offsetRef.current += (pixelsPerSecond * delta) / 1000;
      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    animRef.current = requestAnimationFrame(draw);

    window.addEventListener('resize', resize);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    let current = 72;
    let dir = 1;

    const interval = window.setInterval(() => {
      if (Math.random() < 0.5) current += dir;
      if (current >= 75) dir = -1;
      if (current <= 70) dir = 1;
      setBpm(current);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="ecg-card" aria-label="Live heart-rate monitoring preview">
      <div className="ecg-header">
        <span className="ecg-label">Heart rate pulse</span>
        <span className="live-pill">
          <span className="live-dot" />
          Live
        </span>
      </div>

      <canvas ref={canvasRef} className="ecg-canvas" />

      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-label">Heart rate</p>
          <p className="stat-value bpm">
            {bpm} <span className="stat-unit">bpm</span>
          </p>
          <p className="stat-ok">Normal</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Blood pressure</p>
          <p className="stat-value">
            118 <span className="stat-unit">/76</span>
          </p>
          <p className="stat-ok">Optimal</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Blood glucose</p>
          <p className="stat-value">
            104 <span className="stat-unit">mg/dL</span>
          </p>
          <p className="stat-ok">In range</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Weight</p>
          <p className="stat-value">
            168 <span className="stat-unit">lb</span>
          </p>
          <p className="stat-ok">Stable</p>
        </div>
      </div>
    </div>
  );
}
