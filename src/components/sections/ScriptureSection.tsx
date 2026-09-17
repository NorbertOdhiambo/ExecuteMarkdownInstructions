export default function ScriptureSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Isaiah */}
          <div className="relative overflow-hidden rounded-lg bg-[#F8F6F3] p-10 lg:p-14 flex flex-col justify-between">
            <div
              className="absolute top-0 left-0 w-1 h-full bg-[#A82626]"
              aria-hidden="true"
            />
            <div>
              <p className="text-[#A82626] text-xs font-sans uppercase tracking-[0.2em] mb-6">Our Biblical Foundation</p>
              <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#111111] leading-snug mb-6 italic">
                "My house shall be called an house of prayer for all nations."
              </blockquote>
              <cite className="not-italic font-sans text-sm font-medium text-[#6B7280] uppercase tracking-widest">
                Isaiah 56:7
              </cite>
            </div>
            <div className="mt-10 font-sans text-sm text-[#6B7280] leading-relaxed">
              This Scripture gives our church its name and shapes our identity. We are built as a house of prayer — open to all nations, all peoples, all who seek God.
            </div>
          </div>

          {/* Ezekiel */}
          <div className="relative overflow-hidden rounded-lg bg-[#A82626] p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <p className="text-white/60 text-xs font-sans uppercase tracking-[0.2em] mb-6">Our Living Promise</p>
              <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white leading-snug mb-6 italic">
                "The LORD is there."
              </blockquote>
              <cite className="not-italic font-sans text-sm font-medium text-white/60 uppercase tracking-widest">
                Ezekiel 48:35 — Jehovah Shammah
              </cite>
            </div>
            <div className="mt-10 font-sans text-sm text-white/70 leading-relaxed">
              More than a location — a promise. Where we gather, God is present. The Lord is here, among his people, in prayer, in worship, in community.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
