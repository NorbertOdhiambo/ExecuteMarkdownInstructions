import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { Link } from "react-router";

type Variant = "primary" | "secondary" | "dark" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asLink?: string;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-[#A82626] text-white hover:bg-[#8a1f1f] active:bg-[#7F1D1D] focus-visible:ring-[#A82626]",
  secondary: "bg-white text-[#A82626] border border-[#A82626] hover:bg-[#A82626] hover:text-white focus-visible:ring-[#A82626]",
  dark: "bg-[#111111] text-white hover:bg-[#202020] focus-visible:ring-[#111111]",
  outline: "bg-transparent text-white border border-white hover:bg-white hover:text-[#111111] focus-visible:ring-white",
  ghost: "bg-transparent text-[#A82626] hover:bg-[#A82626]/10 focus-visible:ring-[#A82626]",
};

const sizes: Record<Size, string> = {
  sm: "text-xs px-4 py-2 rounded-md",
  md: "text-sm px-6 py-3 rounded-md",
  lg: "text-sm px-8 py-4 rounded-md uppercase tracking-widest",
};

export default function Button({
  variant = "primary",
  size = "md",
  asLink,
  external,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asLink) {
    if (external) {
      return (
        <a href={asLink} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link to={asLink} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
