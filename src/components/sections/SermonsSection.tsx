import { Link } from "react-router";
import { sermons } from "../../data/church";
import SectionHeading from "../ui/SectionHeading";

export default function SermonsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Feed Your Faith"
            title="Latest Sermons"
            subtitle="Powerful messages rooted in the Word of God."
          />
          <Link
            to="/sermons"
            className="flex-shrink-0 inline-flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-widest text-[#A82626] hover:text-[#7F1D1D] transition-colors"
          >
            All Sermons
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
            <Link
              key={sermon.id}
              to={`/sermons/${sermon.id}`}
              className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video bg-[#E8D5D5]">
                <img
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white" className="ml-1">
                      <path d="M5 4l11 6-11 6V4z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-[#A82626] text-white text-xs font-sans uppercase tracking-wider px-2.5 py-1 rounded">
                    {sermon.series}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#6B7280] text-xs font-sans uppercase tracking-widest mb-2">
                  {new Date(sermon.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </p>
                <h3 className="font-serif text-xl font-semibold text-[#111111] leading-snug mb-2 group-hover:text-[#A82626] transition-colors">
                  {sermon.title}
                </h3>
                <p className="text-[#6B7280] text-sm font-sans mb-4">{sermon.speaker}</p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <span className="text-[#A82626] text-xs font-sans uppercase tracking-widest font-medium">
                    {sermon.scripture}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
