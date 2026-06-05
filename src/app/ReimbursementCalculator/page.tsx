"use client";

import React, { useState } from "react";
import Link from "next/link";

const RPMReimbursementCalculator: React.FC = () => {
  // Input mode: 'pct' (% of patients) or 'cnt' (# of patients)
  const [mode, setMode] = useState<"pct" | "cnt">("pct");

  // Enrolled totals
  const [rpmPts, setRpmPts] = useState<number>(200);
  const [rpmNew, setRpmNew] = useState<number>(20);

  // RPM adoption inputs
  const [rpmD16, setRpmD16] = useState<number>(80); // data-group="gdev"
  const [rpmD2, setRpmD2] = useState<number>(10);   // data-group="gdev"
  const [rpmM20, setRpmM20] = useState<number>(75); // data-group="gmgmt"
  const [rpmM10, setRpmM10] = useState<number>(10); // data-group="gmgmt"
  const [rpmAdd, setRpmAdd] = useState<number>(30); // data-group="g458"
  const [rpmAdd2, setRpmAdd2] = useState<number>(0);
  const [rpm91, setRpm91] = useState<number>(0);

  // CCM totals
  const [ccmPts, setCcmPts] = useState<number>(120);

  // CCM adoption inputs
  const [ccmStd, setCcmStd] = useState<number>(85); // data-group="gccm"
  const [ccmAdd, setCcmAdd] = useState<number>(40);
  const [ccmAdd2, setCcmAdd2] = useState<number>(0);
  const [ccmPhys, setCcmPhys] = useState<number>(0);  // data-group="gccm"
  const [ccmCx, setCcmCx] = useState<number>(0);    // data-group="gccm"
  const [ccmCxAdd, setCcmCxAdd] = useState<number>(0);
  const [ccmCxAdd2, setCcmCxAdd2] = useState<number>(0);

  // Rates (Customizable)
  const [r453, setR453] = useState<number>(20);
  const [r454, setR454] = useState<number>(48);
  const [r445, setR445] = useState<number>(15);
  const [r457, setR457] = useState<number>(51);
  const [r470, setR470] = useState<number>(18);
  const [r458, setR458] = useState<number>(41);
  const [r91, setR91] = useState<number>(53);

  const [r490, setR490] = useState<number>(61);
  const [r439, setR439] = useState<number>(46);
  const [r491, setR491] = useState<number>(84);
  const [r487, setR487] = useState<number>(132);
  const [r489, setR489] = useState<number>(71);

  // Handle switching modes (converts values so they represent roughly the same quantity)
  const handleModeChange = (targetMode: "pct" | "cnt") => {
    if (targetMode === mode) return;

    if (targetMode === "cnt") {
      // % -> counts
      setRpmD16(Math.round((rpmPts * rpmD16) / 100));
      setRpmD2(Math.round((rpmPts * rpmD2) / 100));
      setRpmM20(Math.round((rpmPts * rpmM20) / 100));
      setRpmM10(Math.round((rpmPts * rpmM10) / 100));
      setRpmAdd(Math.round((rpmPts * rpmAdd) / 100));
      setRpmAdd2(Math.round((rpmPts * rpmAdd2) / 100));
      setRpm91(Math.round((rpmPts * rpm91) / 100));

      setCcmStd(Math.round((ccmPts * ccmStd) / 100));
      setCcmAdd(Math.round((ccmPts * ccmAdd) / 100));
      setCcmAdd2(Math.round((ccmPts * ccmAdd2) / 100));
      setCcmPhys(Math.round((ccmPts * ccmPhys) / 100));
      setCcmCx(Math.round((ccmPts * ccmCx) / 100));
      setCcmCxAdd(Math.round((ccmPts * ccmCxAdd) / 100));
      setCcmCxAdd2(Math.round((ccmPts * ccmCxAdd2) / 100));
    } else {
      // counts -> %
      setRpmD16(rpmPts > 0 ? Math.round((rpmD16 / rpmPts) * 100) : 0);
      setRpmD2(rpmPts > 0 ? Math.round((rpmD2 / rpmPts) * 100) : 0);
      setRpmM20(rpmPts > 0 ? Math.round((rpmM20 / rpmPts) * 100) : 0);
      setRpmM10(rpmPts > 0 ? Math.round((rpmM10 / rpmPts) * 100) : 0);
      setRpmAdd(rpmPts > 0 ? Math.round((rpmAdd / rpmPts) * 100) : 0);
      setRpmAdd2(rpmPts > 0 ? Math.round((rpmAdd2 / rpmPts) * 100) : 0);
      setRpm91(rpmPts > 0 ? Math.round((rpm91 / rpmPts) * 100) : 0);

      setCcmStd(ccmPts > 0 ? Math.round((ccmStd / ccmPts) * 100) : 0);
      setCcmAdd(ccmPts > 0 ? Math.round((ccmAdd / ccmPts) * 100) : 0);
      setCcmAdd2(ccmPts > 0 ? Math.round((ccmAdd2 / ccmPts) * 100) : 0);
      setCcmPhys(ccmPts > 0 ? Math.round((ccmPhys / ccmPts) * 100) : 0);
      setCcmCx(ccmPts > 0 ? Math.round((ccmCx / ccmPts) * 100) : 0);
      setCcmCxAdd(ccmPts > 0 ? Math.round((ccmCxAdd / ccmPts) * 100) : 0);
      setCcmCxAdd2(ccmPts > 0 ? Math.round((ccmCxAdd2 / ccmPts) * 100) : 0);
    }
    setMode(targetMode);
  };

  // Helper helper to get patients count from the input (depending on mode)
  const getCount = (inputVal: number, total: number) => {
    return mode === "pct" ? (total * inputVal) / 100 : inputVal;
  };

  // Enforce sum constraints when inputs change
  // 1. Device days (rpmD16 + rpmD2 <= max)
  const handleRpmD16Change = (val: number) => {
    const limit = mode === "pct" ? 100 : rpmPts;
    const allowed = Math.max(0, limit - rpmD2);
    setRpmD16(Math.min(val, allowed));
  };
  const handleRpmD2Change = (val: number) => {
    const limit = mode === "pct" ? 100 : rpmPts;
    const allowed = Math.max(0, limit - rpmD16);
    setRpmD2(Math.min(val, allowed));
  };

  // 2. Management time (rpmM20 + rpmM10 <= max)
  const handleRpmM20Change = (val: number) => {
    const limit = mode === "pct" ? 100 : rpmPts;
    const allowed = Math.max(0, limit - rpmM10);
    setRpmM20(Math.min(val, allowed));
  };
  const handleRpmM10Change = (val: number) => {
    const limit = mode === "pct" ? 100 : rpmPts;
    const allowed = Math.max(0, limit - rpmM20);
    setRpmM10(Math.min(val, allowed));
  };

  // 3. CCM Standard/Physician/Complex (ccmStd + ccmPhys + ccmCx <= max)
  const handleCcmStdChange = (val: number) => {
    const limit = mode === "pct" ? 100 : ccmPts;
    const allowed = Math.max(0, limit - (ccmPhys + ccmCx));
    setCcmStd(Math.min(val, allowed));
  };
  const handleCcmPhysChange = (val: number) => {
    const limit = mode === "pct" ? 100 : ccmPts;
    const allowed = Math.max(0, limit - (ccmStd + ccmCx));
    setCcmPhys(Math.min(val, allowed));
  };
  const handleCcmCxChange = (val: number) => {
    const limit = mode === "pct" ? 100 : ccmPts;
    const allowed = Math.max(0, limit - (ccmStd + ccmPhys));
    setCcmCx(Math.min(val, allowed));
  };

  // Derived patient counts for calculation
  const d16Pts = getCount(rpmD16, rpmPts);
  const d2Pts = getCount(rpmD2, rpmPts);
  const m20Pts = getCount(rpmM20, rpmPts);
  const m10Pts = getCount(rpmM10, rpmPts);
  const add1Pts = getCount(rpmAdd, rpmPts);
  const add2Pts = getCount(rpmAdd2, rpmPts);
  const rpm91Pts = getCount(rpm91, rpmPts);

  const ccmStdPts = getCount(ccmStd, ccmPts);
  const ccmPhysPts = getCount(ccmPhys, ccmPts);
  const ccmCxPts = getCount(ccmCx, ccmPts);
  const ccmAddPts = getCount(ccmAdd, ccmPts);
  const ccmAdd2Pts = getCount(ccmAdd2, ccmPts);
  const ccmCxAddPts = getCount(ccmCxAdd, ccmPts);
  const ccmCxAdd2Pts = getCount(ccmCxAdd2, ccmPts);

  // Revenue breakdowns
  const c453 = rpmNew * r453;
  const c454 = d16Pts * r454;
  const c445 = d2Pts * r445;
  const c457 = m20Pts * r457;
  const c458 = (add1Pts + add2Pts) * r458;
  const c470 = m10Pts * r470;
  const c91 = rpm91Pts * r91;
  const rpmTotal = c453 + c454 + c445 + c457 + c458 + c470 + c91;

  const c490 = ccmStdPts * r490;
  const c439 = (ccmAddPts + ccmAdd2Pts) * r439;
  const c491 = ccmPhysPts * r491;
  const c487 = ccmCxPts * r487;
  const c489 = (ccmCxAddPts + ccmCxAdd2Pts) * r489;
  const ccmTotal = c490 + c439 + c491 + c487 + c489;

  const grandTotal = rpmTotal + ccmTotal;

  // Format currency helpers
  const money = (val: number) => {
    return "$" + Math.round(val).toLocaleString();
  };

  const getPercentageOfTotal = (val: number) => {
    if (grandTotal <= 0) return "0%";
    return Math.round((val / grandTotal) * 100) + "%";
  };

  // Export CSV function
  const handleExportCsv = () => {
    const pof = (x: number) => (grandTotal > 0 ? Math.round((x / grandTotal) * 100) + "%" : "0%");
    const _rows = [
      ["Program", "CPT", "Description", "Monthly USD", "% of total"],
      ["RPM", "99453", "Setup", Math.round(c453), pof(c453)],
      ["RPM", "99454", "Device 16+ days", Math.round(c454), pof(c454)],
      ["RPM", "99445", "Device 2-15 days", Math.round(c445), pof(c445)],
      ["RPM", "99457", "First 20 min", Math.round(c457), pof(c457)],
      ["RPM", "99458", "Additional 20 min", Math.round(c458), pof(c458)],
      ["RPM", "99470", "First 10 min", Math.round(c470), pof(c470)],
      ["RPM", "99091", "Interpretation", Math.round(c91), pof(c91)],
      ["RPM", "", "Subtotal", Math.round(rpmTotal), pof(rpmTotal)],
      ["CCM", "99490", "First 20 min", Math.round(c490), pof(c490)],
      ["CCM", "99439", "Additional 20 min", Math.round(c439), pof(c439)],
      ["CCM", "99491", "Physician 30 min", Math.round(c491), pof(c491)],
      ["CCM", "99487", "Complex 60 min", Math.round(c487), pof(c487)],
      ["CCM", "99489", "Additional 30 min", Math.round(c489), pof(c489)],
      ["CCM", "", "Subtotal", Math.round(ccmTotal), pof(ccmTotal)],
      ["", "", "Combined monthly", Math.round(grandTotal), "100%"],
      ["", "", "Combined annual", Math.round(grandTotal * 12), ""]
    ];

    const csvData = _rows.map((r) => r.join(",")).join("\n");
    const b = new Blob([csvData], { type: "text/csv" });
    const u = URL.createObjectURL(b);
    const a = document.createElement("a");
    a.href = u;
    a.download = "evitals-revenue-estimate.csv";
    a.click();
    URL.revokeObjectURL(u);
  };

  return (
    <div className="w-full">
      {/* Header Info Section */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-10">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand">Home</Link> / <span className="text-plum">Reimbursement</span>
        </nav>
        <div className="max-w-3xl animate-rise">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
            <span className="h-px w-6 bg-brand"></span>Reimbursement
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl text-plum">
            RPM &amp; CCM reimbursement guide (2026).
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            The correct, current code sets with approximate national-average rates — plus a calculator to estimate your practice&apos;s revenue.
          </p>
        </div>
      </section>

      {/* RPM Codes Table */}
      <section className="bg-slate-50/70 border-y border-slate-100 w-full">
        <div className="mx-auto max-w-7xl px-6 py-14 animate-rise">
          <h2 className="mb-5 text-2xl font-bold text-plum">Remote Patient Monitoring codes</h2>
          <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-200 shadow-sm">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-deep text-xs uppercase tracking-wide text-white/85">
                  <th className="px-5 py-3.5 font-semibold">CPT</th>
                  <th className="px-5 py-3.5 font-semibold">What it covers</th>
                  <th className="px-5 py-3.5 font-semibold">Frequency</th>
                  <th className="px-5 py-3.5 text-right font-semibold">Approx. avg*</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr className="align-top transition-colors hover:bg-slate-50">
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="mono text-sm font-semibold text-brand">99453</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="font-semibold text-plum">Setup &amp; patient education</div>
                    <div className="mt-0.5 text-sm text-slate-500">Initial setup and education on the monitoring device(s).</div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">Once per episode</td>
                  <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-plum">$20</td>
                </tr>
                <tr className="align-top transition-colors hover:bg-slate-50">
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="mono text-sm font-semibold text-brand">99454</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="font-semibold text-plum">Device supply + data (16+ days)</div>
                    <div className="mt-0.5 text-sm text-slate-500">Device supply with daily recordings; requires &ge;16 days of readings.</div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">Each 30 days</td>
                  <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-plum">$45&ndash;50</td>
                </tr>
                <tr className="align-top transition-colors hover:bg-slate-50">
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="mono text-sm font-semibold text-brand">99445</span>
                    <span className="ml-2 rounded-md bg-brand-tint px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand ring-1 ring-inset ring-brand/20">New 2026</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="font-semibold text-plum">Device supply + data (2&ndash;15 days)</div>
                    <div className="mt-0.5 text-sm text-slate-500">Device supply when only 2&ndash;15 days of readings are collected.</div>
                    <div className="mt-1.5 text-xs font-medium text-brand">New in 2026. Use instead of 99454 when fewer than 16 days of data are collected.</div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">Each 30 days</td>
                  <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-plum"><span className="font-normal text-slate-400">varies</span></td>
                </tr>
                <tr className="align-top transition-colors hover:bg-slate-50">
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="mono text-sm font-semibold text-brand">99470</span>
                    <span className="ml-2 rounded-md bg-brand-tint px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand ring-1 ring-inset ring-brand/20">New 2026</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="font-semibold text-plum">First 10 minutes of management</div>
                    <div className="mt-0.5 text-sm text-slate-500">Management with interactive communication; 10&ndash;19 total minutes.</div>
                    <div className="mt-1.5 text-xs font-medium text-brand">New in 2026. Mutually exclusive with 99457 in the same month.</div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">Monthly</td>
                  <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-plum">$10&ndash;26</td>
                </tr>
                <tr className="align-top transition-colors hover:bg-slate-50">
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="mono text-sm font-semibold text-brand">99457</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="font-semibold text-plum">First 20 minutes of management</div>
                    <div className="mt-0.5 text-sm text-slate-500">Treatment management requiring interactive communication.</div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">Monthly</td>
                  <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-plum">$48&ndash;52</td>
                </tr>
                <tr className="align-top transition-colors hover:bg-slate-50">
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="mono text-sm font-semibold text-brand">99458</span>
                    <span className="ml-2 rounded-md bg-plum-tint px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-plum-2">Add-on</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="font-semibold text-plum">Each additional 20 minutes</div>
                    <div className="mt-0.5 text-sm text-slate-500">Add-on to 99457 for each additional 20 minutes.</div>
                    <div className="mt-1.5 text-xs font-medium text-brand">Only after the initial 20 minutes (99457) is met.</div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">Monthly (add-on)</td>
                  <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-plum">$41</td>
                </tr>
                <tr className="align-top transition-colors hover:bg-slate-50">
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="mono text-sm font-semibold text-brand">99091</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="font-semibold text-plum">Physician data interpretation</div>
                    <div className="mt-0.5 text-sm text-slate-500">Collection &amp; interpretation of physiologic data by a physician/QHP.</div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">Each 30 days</td>
                  <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-plum">$50&ndash;56</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CCM Codes Table */}
      <section className="mx-auto max-w-7xl px-6 py-14 animate-rise">
        <h2 className="mb-5 text-2xl font-bold text-plum">Chronic Care Management codes</h2>
        <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-200 shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-deep text-xs uppercase tracking-wide text-white/85">
                <th className="px-5 py-3.5 font-semibold">CPT</th>
                <th className="px-5 py-3.5 font-semibold">What it covers</th>
                <th className="px-5 py-3.5 font-semibold">Frequency</th>
                <th className="px-5 py-3.5 text-right font-semibold">Approx. avg*</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="align-top transition-colors hover:bg-slate-50">
                <td className="whitespace-nowrap px-5 py-4">
                  <span className="mono text-sm font-semibold text-brand">99490</span>
                </td>
                <td className="px-5 py-4">
                  <div className="font-semibold text-plum">CCM &mdash; first 20 minutes</div>
                  <div className="mt-0.5 text-sm text-slate-500">Clinical staff time directed by a physician/QHP; first 20 minutes.</div>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">Monthly</td>
                <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-plum">$60&ndash;62</td>
              </tr>
              <tr className="align-top transition-colors hover:bg-slate-50">
                <td className="whitespace-nowrap px-5 py-4">
                  <span className="mono text-sm font-semibold text-brand">99439</span>
                  <span className="ml-2 rounded-md bg-plum-tint px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-plum-2">Add-on</span>
                </td>
                <td className="px-5 py-4">
                  <div className="font-semibold text-plum">CCM &mdash; each additional 20 minutes</div>
                  <div className="mt-0.5 text-sm text-slate-500">Add-on to 99490 for each additional 20 minutes (up to 2 units).</div>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">Monthly (add-on)</td>
                <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-plum">$45&ndash;48</td>
              </tr>
              <tr className="align-top transition-colors hover:bg-slate-50">
                <td className="whitespace-nowrap px-5 py-4">
                  <span className="mono text-sm font-semibold text-brand">99491</span>
                </td>
                <td className="px-5 py-4">
                  <div className="font-semibold text-plum">CCM by physician/QHP</div>
                  <div className="mt-0.5 text-sm text-slate-500">30 minutes provided personally by the physician or QHP.</div>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">Monthly</td>
                <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-plum">$82&ndash;86</td>
              </tr>
              <tr className="align-top transition-colors hover:bg-slate-50">
                <td className="whitespace-nowrap px-5 py-4">
                  <span className="mono text-sm font-semibold text-brand">99437</span>
                  <span className="ml-2 rounded-md bg-plum-tint px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-plum-2">Add-on</span>
                </td>
                <td className="px-5 py-4">
                  <div className="font-semibold text-plum">CCM by physician/QHP &mdash; each additional 30 minutes</div>
                  <div className="mt-0.5 text-sm text-slate-500">Add-on to 99491 for each additional 30 minutes of physician/QHP time.</div>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">Monthly (add-on)</td>
                <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-plum">$58&ndash;60</td>
              </tr>
              <tr className="align-top transition-colors hover:bg-slate-50">
                <td className="whitespace-nowrap px-5 py-4">
                  <span className="mono text-sm font-semibold text-brand">99487</span>
                </td>
                <td className="px-5 py-4">
                  <div className="font-semibold text-plum">Complex CCM &mdash; 60 minutes</div>
                  <div className="mt-0.5 text-sm text-slate-500">Complex CCM requiring moderate/high-complexity decision making.</div>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">Monthly</td>
                <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-plum">$130&ndash;134</td>
              </tr>
              <tr className="align-top transition-colors hover:bg-slate-50">
                <td className="whitespace-nowrap px-5 py-4">
                  <span className="mono text-sm font-semibold text-brand">99489</span>
                  <span className="ml-2 rounded-md bg-plum-tint px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-plum-2">Add-on</span>
                </td>
                <td className="px-5 py-4">
                  <div className="font-semibold text-plum">Complex CCM &mdash; each additional 30 minutes</div>
                  <div className="mt-0.5 text-sm text-slate-500">Add-on to 99487 for each additional 30 minutes.</div>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">Monthly (add-on)</td>
                <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-plum">$70&ndash;72</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Estimator Calculator Card Block */}
      <section className="bg-slate-50/70 border-y border-slate-100 w-full">
        <div className="mx-auto max-w-7xl px-6 py-16 animate-rise">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
              <span className="h-px w-6 bg-brand"></span>Calculator
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-plum">Estimate your revenue</h2>
            <p className="mt-3 text-slate-600">
              Enter how many patients you have in each program and adjust the assumptions. For an eligible patient, RPM and CCM can be billed in the same month when the time counted toward each is distinct.
            </p>
          </div>

          <div id="calc" className="mt-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-slate-600">Enter code adoption as:</span>
              <div className="inline-flex rounded-lg bg-white p-1 ring-1 ring-slate-200 shadow-sm">
                <button 
                  onClick={() => handleModeChange("pct")}
                  type="button" 
                  className={`rounded-md px-3 py-1.5 text-sm font-semibold cursor-pointer transition ${mode === 'pct' ? 'bg-brand text-white' : 'text-slate-600 hover:text-plum'}`}
                >
                  % of patients
                </button>
                <button 
                  onClick={() => handleModeChange("cnt")}
                  type="button" 
                  className={`rounded-md px-3 py-1.5 text-sm font-semibold cursor-pointer transition ${mode === 'cnt' ? 'bg-brand text-white' : 'text-slate-600 hover:text-plum'}`}
                >
                  # of patients
                </button>
              </div>
              <span id="modehint" className="text-xs text-slate-400">
                {mode === 'pct' ? "Adoption fields are % of enrolled patients" : "Adoption fields are number of patients"}
              </span>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* RPM card */}
              <div className="rounded-2xl bg-white p-7 ring-1 ring-slate-200 shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-bold text-plum">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand animate-pulse"></span> 
                  Remote Patient Monitoring
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">Enrolled RPM patients</span>
                    <input 
                      type="number" 
                      value={rpmPts} 
                      onChange={(e) => setRpmPts(Math.max(0, parseInt(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">New enrollments / mo · 99453</span>
                    <input 
                      type="number" 
                      value={rpmNew} 
                      onChange={(e) => setRpmNew(Math.max(0, parseInt(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">16+ days of data · 99454 ({mode === 'pct' ? '%' : '#'})</span>
                    <input 
                      type="number" 
                      value={rpmD16} 
                      onChange={(e) => handleRpmD16Change(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">2–15 days of data · 99445 ({mode === 'pct' ? '%' : '#'})</span>
                    <input 
                      type="number" 
                      value={rpmD2} 
                      onChange={(e) => handleRpmD2Change(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">20+ min management · 99457 ({mode === 'pct' ? '%' : '#'})</span>
                    <input 
                      type="number" 
                      value={rpmM20} 
                      onChange={(e) => handleRpmM20Change(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">10–19 min management · 99470 ({mode === 'pct' ? '%' : '#'})</span>
                    <input 
                      type="number" 
                      value={rpmM10} 
                      onChange={(e) => handleRpmM10Change(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">Patients with +20 min · 99458 ({mode === 'pct' ? '%' : '#'})</span>
                    <input 
                      type="number" 
                      value={rpmAdd} 
                      onChange={(e) => setRpmAdd(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">Patients with a 2nd +20 min · 99458 ({mode === 'pct' ? '%' : '#'})</span>
                    <input 
                      type="number" 
                      value={rpmAdd2} 
                      onChange={(e) => setRpmAdd2(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-medium text-slate-600">Physician interpretation · 99091 ({mode === 'pct' ? '%' : '#'})</span>
                    <input 
                      type="number" 
                      value={rpm91} 
                      onChange={(e) => setRpm91(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                </div>
                <div className="mt-4 space-y-1 border-t border-slate-100 pt-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Device supply (99454 + 99445)</span>
                    <span className="font-semibold text-plum">
                      {Math.round(d16Pts + d2Pts)} of {rpmPts} patients
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Management (99457 + 99470)</span>
                    <span className="font-semibold text-plum">
                      {Math.round(m20Pts + m10Pts)} of {rpmPts} patients
                    </span>
                  </div>
                </div>
              </div>

              {/* CCM card */}
              <div className="rounded-2xl bg-white p-7 ring-1 ring-slate-200 shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-bold text-plum">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse"></span> 
                  Chronic Care Management
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">Enrolled CCM patients</span>
                    <input 
                      type="number" 
                      value={ccmPts} 
                      onChange={(e) => setCcmPts(Math.max(0, parseInt(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">20-min CCM · 99490 ({mode === 'pct' ? '%' : '#'})</span>
                    <input 
                      type="number" 
                      value={ccmStd} 
                      onChange={(e) => handleCcmStdChange(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">Patients with +20 min · 99439 ({mode === 'pct' ? '%' : '#'})</span>
                    <input 
                      type="number" 
                      value={ccmAdd} 
                      onChange={(e) => setCcmAdd(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">Patients with a 2nd +20 min · 99439 ({mode === 'pct' ? '%' : '#'})</span>
                    <input 
                      type="number" 
                      value={ccmAdd2} 
                      onChange={(e) => setCcmAdd2(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">Physician 30-min · 99491 ({mode === 'pct' ? '%' : '#'})</span>
                    <input 
                      type="number" 
                      value={ccmPhys} 
                      onChange={(e) => handleCcmPhysChange(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">Complex 60-min · 99487 ({mode === 'pct' ? '%' : '#'})</span>
                    <input 
                      type="number" 
                      value={ccmCx} 
                      onChange={(e) => handleCcmCxChange(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">Patients with +30 min · 99489 ({mode === 'pct' ? '%' : '#'})</span>
                    <input 
                      type="number" 
                      value={ccmCxAdd} 
                      onChange={(e) => setCcmCxAdd(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">Patients with a 2nd +30 min · 99489 ({mode === 'pct' ? '%' : '#'})</span>
                    <input 
                      type="number" 
                      value={ccmCxAdd2} 
                      onChange={(e) => setCcmCxAdd2(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
                    />
                  </label>
                </div>
                <div className="mt-4 space-y-1 border-t border-slate-100 pt-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">CCM billing (99490 + 99491 + 99487)</span>
                    <span className="font-semibold text-plum">
                      {Math.round(ccmStdPts + ccmPhysPts + ccmCxPts)} of {ccmPts} patients
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live totals display */}
            <div className="grid gap-6 rounded-2xl bg-gradient-to-br from-[#1B1630] via-[#2A1830] to-[#7A1F3D] p-7 text-white shadow-xl shadow-[#1B1630]/20 ring-1 ring-white/10 md:grid-cols-2 animate-rise">
              <div>
                <div className="text-sm font-medium text-[#FAF8F4]/78">Combined estimated monthly reimbursement</div>
                <div className="mt-1 text-5xl font-extrabold text-[#FAF8F4]">{money(grandTotal)}</div>
                <div className="mt-2 text-sm text-[#FAF8F4]/68">
                  ≈ <span className="font-semibold text-[#FAF8F4]/90">{money(grandTotal * 12)}</span> per year
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/15">
                  <div className="text-xs text-[#FAF8F4]/68">RPM / mo</div>
                  <div className="mt-0.5 text-lg font-bold">{money(rpmTotal)}</div>
                </div>
                <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/15">
                  <div className="text-xs text-[#FAF8F4]/68">CCM / mo</div>
                  <div className="mt-0.5 text-lg font-bold">{money(ccmTotal)}</div>
                </div>
                <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/15">
                  <div className="text-xs text-[#FAF8F4]/68">RPM avg / patient</div>
                  <div className="mt-0.5 text-lg font-bold">
                    {rpmPts > 0 ? money(rpmTotal / rpmPts) : "$0"}
                  </div>
                </div>
                <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/15">
                  <div className="text-xs text-[#FAF8F4]/68">CCM avg / patient</div>
                  <div className="mt-0.5 text-lg font-bold">
                    {ccmPts > 0 ? money(ccmTotal / ccmPts) : "$0"}
                  </div>
                </div>
              </div>
            </div>

            {/* Code contribution list */}
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm animate-rise">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Monthly contribution by CPT code</h3>
                <div className="flex gap-2 no-print">
                  <button 
                    onClick={handleExportCsv}
                    type="button" 
                    className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-plum ring-1 ring-slate-300 transition hover:ring-slate-400 cursor-pointer"
                  >
                    Export CSV
                  </button>
                  <button 
                    onClick={() => window.print()}
                    type="button" 
                    className="rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-dark cursor-pointer"
                  >
                    Print / Save PDF
                  </button>
                </div>
              </div>

              <div className="mt-3 grid gap-x-10 gap-y-1 md:grid-cols-2">
                <div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand">RPM CPT Codes</div>
                  <div className="flex items-center justify-between border-b border-slate-100 py-1.5 text-sm">
                    <span className="text-slate-600"><span className="mono font-semibold text-brand">99453</span> Setup</span>
                    <span className="whitespace-nowrap text-right">
                      <span className="font-semibold text-plum">{money(c453)}</span> 
                      <span className="text-xs text-slate-400 ml-1.5">{getPercentageOfTotal(c453)}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 py-1.5 text-sm">
                    <span className="text-slate-600"><span className="mono font-semibold text-brand">99454</span> Device · 16+ days</span>
                    <span className="whitespace-nowrap text-right">
                      <span className="font-semibold text-plum">{money(c454)}</span> 
                      <span className="text-xs text-slate-400 ml-1.5">{getPercentageOfTotal(c454)}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 py-1.5 text-sm">
                    <span className="text-slate-600"><span className="mono font-semibold text-brand">99445</span> Device · 2–15 days</span>
                    <span className="whitespace-nowrap text-right">
                      <span className="font-semibold text-plum">{money(c445)}</span> 
                      <span className="text-xs text-slate-400 ml-1.5">{getPercentageOfTotal(c445)}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 py-1.5 text-sm">
                    <span className="text-slate-600"><span className="mono font-semibold text-brand">99457</span> First 20 min</span>
                    <span className="whitespace-nowrap text-right">
                      <span className="font-semibold text-plum">{money(c457)}</span> 
                      <span className="text-xs text-slate-400 ml-1.5">{getPercentageOfTotal(c457)}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 py-1.5 text-sm">
                    <span className="text-slate-600"><span className="mono font-semibold text-brand">99458</span> Add&apos;l 20 min</span>
                    <span className="whitespace-nowrap text-right">
                      <span className="font-semibold text-plum">{money(c458)}</span> 
                      <span className="text-xs text-slate-400 ml-1.5">{getPercentageOfTotal(c458)}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 py-1.5 text-sm">
                    <span className="text-slate-600"><span className="mono font-semibold text-brand">99470</span> First 10 min</span>
                    <span className="whitespace-nowrap text-right">
                      <span className="font-semibold text-plum">{money(c470)}</span> 
                      <span className="text-xs text-slate-400 ml-1.5">{getPercentageOfTotal(c470)}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 text-sm">
                    <span className="text-slate-600"><span className="mono font-semibold text-brand">99091</span> Interpretation</span>
                    <span className="whitespace-nowrap text-right">
                      <span className="font-semibold text-plum">{money(c91)}</span> 
                      <span className="text-xs text-slate-400 ml-1.5">{getPercentageOfTotal(c91)}</span>
                    </span>
                  </div>
                </div>
                <div>
                  <div className="mb-1 mt-4 text-xs font-semibold uppercase tracking-wide text-accent md:mt-0">CCM CPT Codes</div>
                  <div className="flex items-center justify-between border-b border-slate-100 py-1.5 text-sm">
                    <span className="text-slate-600"><span className="mono font-semibold text-brand">99490</span> First 20 min</span>
                    <span className="whitespace-nowrap text-right">
                      <span className="font-semibold text-plum">{money(c490)}</span> 
                      <span className="text-xs text-slate-400 ml-1.5">{getPercentageOfTotal(c490)}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 py-1.5 text-sm">
                    <span className="text-slate-600"><span className="mono font-semibold text-brand">99439</span> Add&apos;l 20 min</span>
                    <span className="whitespace-nowrap text-right">
                      <span className="font-semibold text-plum">{money(c439)}</span> 
                      <span className="text-xs text-slate-400 ml-1.5">{getPercentageOfTotal(c439)}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 py-1.5 text-sm">
                    <span className="text-slate-600"><span className="mono font-semibold text-brand">99491</span> Physician 30 min</span>
                    <span className="whitespace-nowrap text-right">
                      <span className="font-semibold text-plum">{money(c491)}</span> 
                      <span className="text-xs text-slate-400 ml-1.5">{getPercentageOfTotal(c491)}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 py-1.5 text-sm">
                    <span className="text-slate-600"><span className="mono font-semibold text-brand">99487</span> Complex 60 min</span>
                    <span className="whitespace-nowrap text-right">
                      <span className="font-semibold text-plum">{money(c487)}</span> 
                      <span className="text-xs text-slate-400 ml-1.5">{getPercentageOfTotal(c487)}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 text-sm">
                    <span className="text-slate-600"><span className="mono font-semibold text-brand">99489</span> Add&apos;l 30 min</span>
                    <span className="whitespace-nowrap text-right">
                      <span className="font-semibold text-plum">{money(c489)}</span> 
                      <span className="text-xs text-slate-400 ml-1.5">{getPercentageOfTotal(c489)}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Adjustable Rates details collapse */}
            <details className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-sm animate-rise group">
              <summary className="cursor-pointer text-sm font-semibold text-plum hover:text-brand transition flex items-center justify-between">
                <span>Adjust 2026 CPT rates ($) &amp; view billing rules</span>
                <svg className="w-5 h-5 text-slate-400 transition group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </summary>
              <div className="mt-4 grid gap-6 md:grid-cols-2 border-t border-slate-100 pt-4">
                <div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand">RPM Rates ($)</div>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    <label className="block">
                      <span className="text-[11px] font-medium text-slate-500">99453</span>
                      <input 
                        type="number" 
                        value={r453} 
                        onChange={(e) => setR453(Math.max(0, parseFloat(e.target.value) || 0))}
                        className="mt-0.5 w-full rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-brand" 
                      />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-medium text-slate-500">99454</span>
                      <input 
                        type="number" 
                        value={r454} 
                        onChange={(e) => setR454(Math.max(0, parseFloat(e.target.value) || 0))}
                        className="mt-0.5 w-full rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-brand" 
                      />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-medium text-slate-500">99445</span>
                      <input 
                        type="number" 
                        value={r445} 
                        onChange={(e) => setR445(Math.max(0, parseFloat(e.target.value) || 0))}
                        className="mt-0.5 w-full rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-brand" 
                      />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-medium text-slate-500">99457</span>
                      <input 
                        type="number" 
                        value={r457} 
                        onChange={(e) => setR457(Math.max(0, parseFloat(e.target.value) || 0))}
                        className="mt-0.5 w-full rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-brand" 
                      />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-medium text-slate-500">99470</span>
                      <input 
                        type="number" 
                        value={r470} 
                        onChange={(e) => setR470(Math.max(0, parseFloat(e.target.value) || 0))}
                        className="mt-0.5 w-full rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-brand" 
                      />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-medium text-slate-500">99458</span>
                      <input 
                        type="number" 
                        value={r458} 
                        onChange={(e) => setR458(Math.max(0, parseFloat(e.target.value) || 0))}
                        className="mt-0.5 w-full rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-brand" 
                      />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-medium text-slate-500">99091</span>
                      <input 
                        type="number" 
                        value={r91} 
                        onChange={(e) => setR91(Math.max(0, parseFloat(e.target.value) || 0))}
                        className="mt-0.5 w-full rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-brand" 
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">CCM Rates ($)</div>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    <label className="block">
                      <span className="text-[11px] font-medium text-slate-500">99490</span>
                      <input 
                        type="number" 
                        value={r490} 
                        onChange={(e) => setR490(Math.max(0, parseFloat(e.target.value) || 0))}
                        className="mt-0.5 w-full rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-accent" 
                      />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-medium text-slate-500">99439</span>
                      <input 
                        type="number" 
                        value={r439} 
                        onChange={(e) => setR439(Math.max(0, parseFloat(e.target.value) || 0))}
                        className="mt-0.5 w-full rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-accent" 
                      />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-medium text-slate-500">99491</span>
                      <input 
                        type="number" 
                        value={r491} 
                        onChange={(e) => setR491(Math.max(0, parseFloat(e.target.value) || 0))}
                        className="mt-0.5 w-full rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-accent" 
                      />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-medium text-slate-500">99487</span>
                      <input 
                        type="number" 
                        value={r487} 
                        onChange={(e) => setR487(Math.max(0, parseFloat(e.target.value) || 0))}
                        className="mt-0.5 w-full rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-accent" 
                      />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-medium text-slate-500">99489</span>
                      <input 
                        type="number" 
                        value={r489} 
                        onChange={(e) => setR489(Math.max(0, parseFloat(e.target.value) || 0))}
                        className="mt-0.5 w-full rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-accent" 
                      />
                    </label>
                  </div>
                </div>
              </div>
              <ul className="mt-5 space-y-1.5 text-xs text-slate-500 border-t border-slate-100 pt-3 leading-relaxed">
                <li>• 99453 is billed once per newly enrolled patient (setup &amp; education).</li>
                <li>• Device supply each month: 99454 (16+ days of data) or 99445 (2–15 days) — one or the other.</li>
                <li>• Management each month: 99457 (20+ min) or 99470 (10–19 min) — not both; 99458 repeats per extra 20 min.</li>
                <li>• 99091 is a separate physician interpretation of physiologic data.</li>
                <li>• CCM: 99490 + 99439 (clinical-staff time) or 99491 (physician 30 min); 99487 + 99489 for complex CCM.</li>
                <li>• RPM and CCM may be billed together for an eligible patient when the time is distinct.</li>
              </ul>
            </details>
            
            <p className="text-xs leading-relaxed text-slate-400">
              Estimates use editable, approximate national-average 2026 rates and your adoption assumptions. Actual reimbursement varies by payer, locality, documentation, and medical necessity. Educational only — not billing advice; verify against the current Medicare Physician Fee Schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Workflow Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 animate-rise">
        <h2 className="text-2xl font-bold text-plum">Sample monthly workflow</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200 shadow-sm flex flex-col items-start">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint text-brand">
              <svg className="h-5 w-5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="mt-3 font-semibold text-plum">Flag abnormal measurement</p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">System immediately identifies values that cross custom specialty-defined thresholds.</p>
          </div>
          
          <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200 shadow-sm flex flex-col items-start">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint text-brand">
              <svg className="h-5 w-5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="mt-3 font-semibold text-plum">Clinical review of data</p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">US-based clinical monitors analyze flags and escalate severe deviations to clinicians.</p>
          </div>

          <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200 shadow-sm flex flex-col items-start">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint text-brand">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="mt-3 font-semibold text-plum">Document interventions</p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Keep clear audit trails directly inside the platform for every outbound checking/call action.</p>
          </div>

          <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200 shadow-sm flex flex-col items-start">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint text-brand">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="mt-3 font-semibold text-plum">Document time &amp; generate codes</p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Auto-calculate exact clinical monitoring minutes and prep correct monthly claims bills.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RPMReimbursementCalculator;
