'use client';

import { useEffect, useState } from 'react';

type Milestone = {
  metric: string;
  val: string;
  label: string;
  change: string;
  warn: boolean;
};

const milestones: Milestone[] = [
  { metric: 'A1c', val: '6.8%', label: 'HbA1c', change: 'Down 0.4 pts', warn: false },
  { metric: 'BP', val: '128/82', label: 'Blood pressure', change: 'Improving', warn: false },
  { metric: 'Wt', val: '+1 lb', label: 'Weight trend', change: 'Stable', warn: true },
  { metric: 'Rx', val: '91%', label: 'Adherence', change: 'On track', warn: false },
];

export default function CCMMonitor() {
  const [score, setScore] = useState(84);
  const [tlPct, setTlPct] = useState(0);
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      let tl = 0;

      const interval = window.setInterval(() => {
        let running = false;

        if (tl < 33) {
          tl = Math.min(33, tl + 0.5);
          setTlPct(tl);
          running = true;
        }

        if (!running) window.clearInterval(interval);
      }, 16);

      [0, 1, 2, 3].forEach((i) => {
        window.setTimeout(() => setVisibleMilestones((prev) => [...prev, i]), i * 120);
      });
    }, 300);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let current = 84;
    let dir = 1;

    const interval = window.setInterval(() => {
      if (Math.random() < 0.4) current += dir;
      if (current >= 86) dir = -1;
      if (current <= 82) dir = 1;
      setScore(current);
    }, 2500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="ccm-monitor-card" aria-label="Chronic care management dashboard preview">
      <div className="ccm-monitor-top">
        <div className="ccm-monitor-top-left">
          <span className="ccm-monitor-label">
            <span className="ccm-monitor-live-dot" />
            Chronic Care Management
          </span>
          <span className="ccm-monitor-patient">Margaret S. - Age 67</span>
        </div>
        <div className="ccm-monitor-score-pill">
          <div className="ccm-monitor-score-num">{score}</div>
          <div className="ccm-monitor-score-lbl">Care score</div>
        </div>
      </div>

      <div className="ccm-care-canvas">
        <div className="ccm-monitor-conditions">
          <span className="ccm-monitor-tag">Type 2 Diabetes</span>
          <span className="ccm-monitor-tag">Hypertension</span>
          <span className="ccm-monitor-tag">COPD</span>
        </div>
        <div className="ccm-monitor-tl-header">
          <span className="ccm-monitor-tl-label">Care plan - Month 4 of 12</span>
          <span className="ccm-monitor-tl-month">{Math.round(tlPct)}% complete</span>
        </div>
        <div className="ccm-monitor-timeline">
          <div className="ccm-monitor-timeline-fill" style={{ width: `${tlPct}%` }} />
          <div className="ccm-monitor-tl-dot" style={{ left: '33%' }} />
          <div className="ccm-monitor-tl-dot" style={{ left: '58%' }} />
          <div className="ccm-monitor-tl-dot ccm-monitor-tl-dot--future" style={{ left: '75%' }} />
          <div className="ccm-monitor-tl-dot ccm-monitor-tl-dot--future" style={{ left: '100%' }} />
        </div>
      </div>

      <div className="ccm-monitor-milestones">
        {milestones.map((m, i) => (
          <div key={m.label} className={`ccm-monitor-milestone ${visibleMilestones.includes(i) ? 'is-visible' : ''}`}>
            <span className="ccm-monitor-ms-metric">{m.metric}</span>
            <div className="ccm-monitor-ms-val">{m.val}</div>
            <div className="ccm-monitor-ms-lbl">{m.label}</div>
            <div className={`ccm-monitor-ms-change ${m.warn ? 'is-warn' : ''}`}>{m.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
