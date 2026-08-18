import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:opacity-50";

const sizes = {
  md: "px-6 py-3",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent-soft to-accent text-[#171208] shadow-[0_8px_30px_rgba(205,168,106,0.25)] hover:shadow-[0_8px_40px_rgba(205,168,106,0.4)] hover:-translate-y-0.5",
  secondary:
    "glass text-foreground hover:border-border-strong hover:-translate-y-0.5",
  ghost: "text-foreground hover:text-accent",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  onClick,
  type,
  disabled,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${classes}`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type ?? "button"}
      className={`group ${classes} disabled:pointer-events-none`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
