'use client';

import { useEffect, useState } from 'react';

type Milestone = {
  metric: string;
  val: string;
  label: string;
  change: string;
  warn: boolean;
};

type Activity = {
  color: string;
  text: string;
  time: string;
  badge: string;
  badgeType: 'main' | 'warn';
};

const milestones: Milestone[] = [
  { metric: 'A1c', val: '6.8%', label: 'HbA1c', change: 'Down 0.4 pts', warn: false },
  { metric: 'BP', val: '128/82', label: 'Blood pressure', change: 'Improving', warn: false },
  { metric: 'O2', val: '94%', label: 'SpO2 saturation', change: 'Stable', warn: true },
  { metric: 'Rx', val: '91%', label: 'Adherence', change: 'On track', warn: false },
];

const activities: Activity[] = [
  { color: '#7A1F3D', text: 'Care call completed - 24 min', time: 'Today', badge: 'Billed', badgeType: 'main' },
  { color: '#A96A18', text: 'Glucose reading flagged - 198 mg/dL', time: 'Yesterday', badge: 'Review', badgeType: 'warn' },
  { color: '#7A1F3D', text: 'Medication refill coordinated', time: '3 days ago', badge: 'Done', badgeType: 'main' },
];

export default function CCMMonitor() {
  const [score, setScore] = useState(84);
  const [tlPct, setTlPct] = useState(0);
  const [minPct, setMinPct] = useState(0);
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);
  const [visibleActivity, setVisibleActivity] = useState<number[]>([]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      let tl = 0;
      let min = 0;

      const interval = window.setInterval(() => {
        let running = false;

        if (tl < 33) {
          tl = Math.min(33, tl + 0.5);
          setTlPct(tl);
          running = true;
        }

        if (min < 87) {
          min = Math.min(87, min + 0.8);
          setMinPct(min);
          running = true;
        }

        if (!running) window.clearInterval(interval);
      }, 16);

      [0, 1, 2, 3].forEach((i) => {
        window.setTimeout(() => setVisibleMilestones((prev) => [...prev, i]), i * 120);
      });

      [0, 1, 2].forEach((i) => {
        window.setTimeout(() => setVisibleActivity((prev) => [...prev, i]), 200 + i * 150);
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

  const minsDisplay = ((minPct / 100) * 20).toFixed(1);

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

      <div className="ccm-monitor-conditions">
        <span className="ccm-monitor-tag">Type 2 Diabetes</span>
        <span className="ccm-monitor-tag">Hypertension</span>
        <span className="ccm-monitor-tag">COPD</span>
      </div>

      <div className="ccm-monitor-timeline-wrap">
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

      <div className="ccm-monitor-activity-row">
        {activities.map((a, i) => (
          <div key={a.text} className={`ccm-monitor-activity-item ${visibleActivity.includes(i) ? 'is-visible' : ''}`}>
            <div className="ccm-monitor-act-dot" style={{ background: a.color }} />
            <span className="ccm-monitor-act-text">{a.text}</span>
            <span className="ccm-monitor-act-time">{a.time}</span>
            <span className={`ccm-monitor-act-badge ccm-monitor-badge-${a.badgeType}`}>{a.badge}</span>
          </div>
        ))}
      </div>

      <div className="ccm-monitor-minutes-bar">
        <div className="ccm-monitor-mb-row">
          <span className="ccm-monitor-mb-label">Monthly care minutes</span>
          <span className="ccm-monitor-mb-val">{minsDisplay} / 20 min</span>
        </div>
        <div className="ccm-monitor-mb-track">
          <div className="ccm-monitor-mb-fill" style={{ width: `${minPct}%` }} />
        </div>
      </div>
    </div>
  );
}
