import React from "react";
export default function CircleProgress({
  value = 65,            // 0-100, drives how much of the ring is filled
  size = 180,             // total width/height in px
  strokeWidth = 14,
  trackColor = "#FBEAE3", // the light peach/cream background ring
  progressColor = "#0E7C8C", // the teal ring
  displayValue = "#142",
  label = "Punjab",
  className = "",
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(Math.max(value, 0), 100) / 100) * circumference;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
      >
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-700 ease-out"
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-neutral-800 tracking-tight">
          {displayValue}
        </span>
        <span className="text-sm font-medium text-teal-700/80 mt-0.5">
          {label}
        </span>
      </div>
    </div>
  );
}
