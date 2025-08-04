import React, { type CSSProperties, type ReactNode } from "react";
import type { JSX } from "react";

type ValidElement = keyof JSX.IntrinsicElements;

type StarBorderProps<T extends ValidElement = "button"> = {
  as?: T;
  className?: string;
  children?: ReactNode;
  color?: string;
  speed?: CSSProperties["animationDuration"];
  thickness?: number;
  style?: CSSProperties;
} & Omit<JSX.IntrinsicElements[T], "as" | "className" | "style">;

const StarBorder = <T extends ValidElement = "button">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  style,
  ...rest
}: StarBorderProps<T>): JSX.Element => {
  const Component = (as || "button") as ValidElement;

  const mergedStyle: CSSProperties = {
    padding: `${thickness}px`,
    ...style,
  };

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] border border-dotted border-white ${className}`}
      style={mergedStyle}
      {...rest}
    >
      {/* Glowing star-like effects */}
      <div
        className="absolute w-[300%] h-[50%] opacity-50 bottom-[-12px] right-[-250%] rounded-full animate-star-movement-bottom z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="absolute w-[300%] h-[50%] opacity-50 top-[-12px] left-[-250%] rounded-full animate-star-movement-top z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 bg-transparent text-white text-center py-[12px] px-[22px] rounded-[20px]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
