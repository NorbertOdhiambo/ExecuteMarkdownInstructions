interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, center = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`${center ? "text-center" : ""} mb-12`}>
      {eyebrow && (
        <p className={`text-xs uppercase tracking-[0.2em] font-medium mb-3 ${light ? "text-[#A82626]/80" : "text-[#A82626]"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${light ? "text-white" : "text-[#111111]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-white/80" : "text-[#6B7280]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
