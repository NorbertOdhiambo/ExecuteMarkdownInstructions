interface BadgeProps {
  children: React.ReactNode;
  variant?: "red" | "dark" | "light";
}

export default function Badge({ children, variant = "light" }: BadgeProps) {
  const variants = {
    red: "bg-[#A82626] text-white",
    dark: "bg-[#111111] text-white",
    light: "bg-[#F1F1F1] text-[#6B7280]",
  };
  return (
    <span className={`inline-flex items-center text-xs font-medium font-sans uppercase tracking-widest px-3 py-1 rounded ${variants[variant]}`}>
      {children}
    </span>
  );
}
