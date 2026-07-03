import React from "react";
import Image from "next/image";

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
  const sizeMap = {
    sm: { width: 60, height: 60 },
    md: { width: 100, height: 100 },
    lg: { width: 100, height: 100 },
  };

  const { width, height } = sizeMap[size];
  const isLight = variant === "light";
  const textColor = isLight ? "text-white" : "text-navy";
  const subColor = isLight ? "text-gold" : "text-gold";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="Nexavia Global Cargo"
        width={width}
        height={height}
        className={`object-contain ${isLight ? "brightness-0 invert" : ""}`}
        priority
      />
      {/* Wordmark: Visible next to the logo on desktop, hidden on mobile */}
      <div className="hidden md:flex flex-col justify-center leading-none">
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
