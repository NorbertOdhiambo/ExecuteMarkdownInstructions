import { Link } from "react-router";
import { leadership } from "../../data/church";
import SectionHeading from "../ui/SectionHeading";

export default function LeadershipSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Leadership"
            title="Our Pastors"
            subtitle="Led by faith, shaped by prayer, committed to all nations."
          />
          <Link
            to="/leadership"
            className="flex-shrink-0 inline-flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-widest text-[#A82626] hover:text-[#7F1D1D] transition-colors"
          >
            Meet the Team
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          {leadership.map((leader) => (
            <Link
              key={leader.id}
              to="/leadership"
              className="group flex gap-6 bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#E8D5D5]">
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#111111] mb-1 group-hover:text-[#A82626] transition-colors">
                  {leader.name}
                </h3>
                <p className="text-[#A82626] text-xs font-sans uppercase tracking-widest mb-3">{leader.title}</p>
                <p className="text-[#6B7280] text-sm font-sans leading-relaxed line-clamp-3">{leader.bio}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
