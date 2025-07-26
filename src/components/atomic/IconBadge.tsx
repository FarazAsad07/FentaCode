import React from "react";
import clsx from "clsx";

type IconBadgeProps = {
  icon: React.ReactNode;
  count?: number;
  className?: string;
  "aria-label"?: string;
};

export const IconBadge: React.FC<IconBadgeProps> = ({
  icon,
  count,
  className,
  ...props
}) => (
  <span
    className={clsx(
      "relative inline-flex items-center justify-center rounded-full bg-white/30 backdrop-blur border border-white/40 shadow p-2",
      className
    )}
    {...props}
  >
    {icon}
    {typeof count === "number" && (
      <span className="absolute -top-1 -right-1 bg-fuchsia-500 text-white text-xs rounded-full px-1">{count}</span>
    )}
  </span>
);
