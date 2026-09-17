import { Link } from "react-router";
import { ministries } from "../../data/church";
import SectionHeading from "../ui/SectionHeading";

export default function MinistriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Community Impact"
            title="Our Ministries"
            subtitle="Serving every generation — children, youth, women, and the community at large."
          />
          <Link
            to="/ministries"
            className="flex-shrink-0 inline-flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-widest text-[#A82626] hover:text-[#7F1D1D] transition-colors"
          >
            All Ministries
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((ministry) => (
            <Link
              key={ministry.id}
              to="/ministries"
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-[#E8D5D5]"
            >
              <img
                src={ministry.image}
                alt={ministry.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-2xl mb-2 block">{ministry.icon}</span>
                <h3 className="font-serif text-xl font-semibold text-white mb-1 group-hover:text-[#E8A0A0] transition-colors">
                  {ministry.name}
                </h3>
                <p className="text-white/70 text-sm font-sans leading-snug line-clamp-2">
                  {ministry.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
