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
    sm: { width: 50, height: 50 },
    md: { width: 58, height: 58 },
    lg: { width: 64, height: 64 },
  };

  const { width, height } = sizeMap[size];
  const isLight = variant === "light";

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Nexavia Global Cargo"
        width={width}
        height={height}
        className={`object-contain ${isLight ? "brightness-0 invert" : ""}`}
        priority
      />
    </div>
  );
}
