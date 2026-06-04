"use client";

import { useEffect, useRef } from "react";

export default function PulseMonitor({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const lineColor = "#7A1F3D";
    const cyclePx = 260;
    const speed = 1.65;
    const fadePx = 280;
    const headGlow = 18;
    const headX = Math.round(W * 0.54);
    const totalPts = W + 120;
    const pts = new Float32Array(totalPts);
    let head = 0;
    let offset = 0;
    let cycleOffset = 0;
    let frame = 0;

    const ecgY = (rawT: number) => {
      const cx = H / 2;
      const t = rawT % 1;
      if (t < 0.1) return cx + 1;
      if (t < 0.14) return cx - 6 * Math.sin(((t - 0.1) / 0.04) * Math.PI);
      if (t < 0.22) return cx + 1;
      if (t < 0.24) return cx + 8 * ((t - 0.22) / 0.02);
      if (t < 0.27) return cx - 58 * Math.sin(((t - 0.24) / 0.03) * Math.PI);
      if (t < 0.3) return cx + 10 * ((0.3 - t) / 0.03);
      if (t < 0.36) return cx + 1;
      if (t < 0.5) return cx - 14 * Math.sin(((t - 0.36) / 0.14) * Math.PI);
      return cx + 1;
    };

    const advance = () => {
      offset += speed;
      while (offset >= 1) {
        offset -= 1;
        cycleOffset = (cycleOffset + 1) % cyclePx;
        pts[head % totalPts] = ecgY(cycleOffset / cyclePx);
        head += 1;
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, W, H);
      const count = Math.min(head, headX);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = 1; i < count; i += 1) {
        const x = headX - count + i;
        const distFromHead = count - i;
        const alpha = Math.max(0, 1 - distFromHead / fadePx);
        const idxCurr = (head - count + i + totalPts) % totalPts;
        const idxPrev = (head - count + i - 1 + totalPts) % totalPts;

        ctx.beginPath();
        ctx.moveTo(x - 1, pts[idxPrev]);
        ctx.lineTo(x, pts[idxCurr]);
        ctx.strokeStyle = `rgba(122, 31, 61, ${alpha * 0.92})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      if (count > 0) {
        const hy = pts[(head - 1 + totalPts) % totalPts];
        const grad = ctx.createRadialGradient(headX, hy, 0, headX, hy, headGlow);
        grad.addColorStop(0, "rgba(122, 31, 61, 0.62)");
        grad.addColorStop(0.42, "rgba(185, 28, 28, 0.2)");
        grad.addColorStop(1, "rgba(122, 31, 61, 0)");

        ctx.beginPath();
        ctx.arc(headX, hy, headGlow, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(headX, hy, 3.3, 0, Math.PI * 2);
        ctx.fillStyle = lineColor;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(headX, hy, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "#F4B1BE";
        ctx.fill();
      }
    };

    const loop = () => {
      advance();
      render();
      frame = requestAnimationFrame(loop);
    };

    for (let i = 0; i < W; i += 1) {
      pts[i % totalPts] = ecgY((i % cyclePx) / cyclePx);
      cycleOffset = i % cyclePx;
    }
    head = W;
    loop();

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={640}
      height={160}
      className={className}
      aria-hidden="true"
    />
  );
}
