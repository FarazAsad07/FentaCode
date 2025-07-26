import React from "react";
import { Loader2 } from "lucide-react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:opacity-60 disabled:pointer-events-none";
const variants = {
  primary: "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-md hover:scale-[1.03]",
  secondary: "bg-white/30 text-indigo-700 border border-indigo-200 hover:bg-white/50",
  ghost: "bg-transparent text-indigo-600 hover:bg-indigo-50",
};
const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  loading,
  children,
  ...props
}) => (
  <button
    className={clsx(base, variants[variant], sizes[size], props.className)}
    disabled={loading || props.disabled}
    {...props}
  >
    {loading && <Loader2 className="animate-spin w-5 h-5" />}
    {!loading && iconLeft}
    {children}
    {!loading && iconRight}
  </button>
);
