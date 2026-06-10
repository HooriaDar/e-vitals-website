export default function MedicalIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 480"
      className={className}
      role="img"
      aria-label="Remote patient monitoring illustration"
    >
      <defs>
        <linearGradient id="med-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#90E0EF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#E8F6FB" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="med-heart" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00B4D8" />
          <stop offset="100%" stopColor="#0077B6" />
        </linearGradient>
      </defs>
      <rect width="480" height="480" rx="32" fill="url(#med-bg)" />
      <circle cx="240" cy="220" r="118" fill="#ffffff" fillOpacity="0.65" />
      <path
        d="M240 300c-52-34-88-62-88-98 0-28 22-50 50-50 18 0 34 10 42 24 8-14 24-24 42-24 28 0 50 22 50 50 0 36-36 64-88 98z"
        fill="url(#med-heart)"
      />
      <path
        d="M150 320 H330"
        stroke="#0077B6"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="6 8"
        opacity="0.45"
      />
      {[
        { cx: 120, cy: 150, label: "BP" },
        { cx: 360, cy: 150, label: "HR" },
        { cx: 120, cy: 340, label: "WT" },
        { cx: 360, cy: 340, label: "O2" },
      ].map((node) => (
        <g key={node.label}>
          <circle cx={node.cx} cy={node.cy} r="34" fill="#ffffff" stroke="#90E0EF" strokeWidth="3" />
          <text
            x={node.cx}
            y={node.cy + 5}
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#003F6B"
            fontFamily="system-ui, sans-serif"
          >
            {node.label}
          </text>
          <line
            x1={node.cx}
            y1={node.cy}
            x2={240}
            y2={220}
            stroke="#00B4D8"
            strokeWidth="2"
            opacity="0.35"
          />
        </g>
      ))}
      <polyline
        points="170,380 210,360 240,372 270,330 310,340"
        fill="none"
        stroke="#E53E3E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
