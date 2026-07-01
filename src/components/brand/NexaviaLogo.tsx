import React from "react";

interface Props {
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function NexaviaLogo({
  variant = "dark",
  className = "",
  size = "md",
}: Props) {
  const dims = size === "sm" ? "h-10" : size === "lg" ? "h-16" : "h-12";

  const isLight = variant === "light";
  const textColor = isLight ? "text-white" : "text-navy";
  const subColor = isLight ? "text-gold" : "text-gold";

  return (
    <div className={`flex items-center gap-3 ${dims} ${className}`}>
      {/* Premium SVG Icon: NX with a plane silhouette */}
      <svg
        className="h-full w-auto aspect-square shrink-0"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left 'N' stem */}
        <path
          d="M20 20V80L45 50L20 20Z"
          fill={isLight ? "#ffffff" : "#0a1f44"}
        />
        {/* Right 'X' stem */}
        <path
          d="M80 20V80L55 50L80 20Z"
          fill={isLight ? "#ffffff" : "#0a1f44"}
        />
        {/* Center plane block in gold */}
        <path d="M38 50L50 32L62 50L50 68L38 50Z" fill="#d4a24a" />
        {/* Wings & body connecting lines */}
        <path
          d="M32 50H68M50 25V75"
          stroke="#d4a24a"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-sans font-extrabold tracking-tight text-xl ${textColor}`}
        >
          NEXAVIA
        </span>
        <span
          className={`font-sans font-bold tracking-[0.2em] text-[9px] mt-0.5 ${subColor}`}
        >
          GLOBAL CARGO
        </span>
      </div>
    </div>
  );
}
