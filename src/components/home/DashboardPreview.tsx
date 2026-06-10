"use client";

import React from "react";

interface DashboardPreviewProps {
  heartRate: number;
  className?: string;
}

export default function DashboardPreview({ heartRate, className = "" }: DashboardPreviewProps) {
  return (
    <div
      className={`rounded-3xl bg-white p-5 ring-1 ring-slate-200 shadow-2xl shadow-secondary/10 ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-highlight/40 text-secondary">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 12h4l2-7 4 14 2-7h8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="text-sm font-semibold text-primary">Connected Care Dashboard</span>
        <span className="ml-auto flex items-center gap-1.5 rounded-full bg-stable/10 px-2 py-0.5 text-[10px] font-semibold text-stable">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-stable" />
          Live
        </span>
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-secondary to-accent text-sm font-bold text-white">
          JD
        </span>
        <div>
          <div className="text-sm font-semibold text-primary">John Doe</div>
          <div className="text-xs text-slate-500">PT-4471 · CHF</div>
        </div>
      </div>

      <div className="mt-3 rounded-xl bg-critical/5 p-4 ring-1 ring-critical/15">
        <div className="text-[11px] font-semibold uppercase tracking-wide text-critical">Heart Rate</div>
        <div className="text-2xl font-bold text-primary">
          <span>{heartRate}</span>
          <span className="text-sm font-normal text-slate-500"> bpm</span>
        </div>
        <svg className="mt-1 h-9 w-full" viewBox="0 0 300 36" preserveAspectRatio="none">
          <path
            className="ecg-line"
            d="M0,18 H52 l7,-12 l7,24 l8,-20 l6,8 H150 l7,-12 l7,24 l8,-20 l6,8 H300"
            fill="none"
            stroke="#E53E3E"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2.5">
        <div className="rounded-xl bg-highlight/25 p-3 ring-1 ring-highlight/50">
          <div className="text-[11px] font-medium text-secondary">Blood Pressure</div>
          <div className="mt-0.5 text-lg font-bold text-primary">128/82</div>
        </div>
        <div className="rounded-xl bg-warning/15 p-3 ring-1 ring-warning/40">
          <div className="text-[11px] font-medium text-primary/70">Weight</div>
          <div className="mt-0.5 text-lg font-bold text-primary">
            165<span className="text-xs font-normal text-slate-500"> lb</span>
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">This month</span>
          <span className="rounded-full bg-stable/10 px-2 py-0.5 text-[10px] font-semibold text-stable">
            Billing-ready
          </span>
        </div>
        <div className="space-y-2.5">
          <div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600">RPM · device days</span>
              <span className="font-semibold text-primary">22 / 16</span>
            </div>
            <div className="mt-1 h-1.5 w-full rounded-full bg-slate-200">
              <div className="h-1.5 rounded-full bg-stable" style={{ width: "100%" }} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600">CCM · care time</span>
              <span className="font-semibold text-primary">18 / 20 min</span>
            </div>
            <div className="mt-1 h-1.5 w-full rounded-full bg-slate-200">
              <div className="h-1.5 rounded-full bg-warning" style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
