import { ministries } from "../data/church";
import SectionHeading from "../components/ui/SectionHeading";

export default function Ministries() {
  return (
    <main>
      <div className="relative bg-[#111111] pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=600&fit=crop&auto=format)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#A82626] text-xs font-sans uppercase tracking-[0.25em] mb-4">Community Impact</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white">Our Ministries</h1>
          <p className="text-white/60 font-sans text-lg mt-4 max-w-2xl">
            Serving every generation through prayer, care, education, outreach and fellowship.
          </p>
        </div>
      </div>

      <section className="py-20 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry) => (
              <div key={ministry.id} className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative aspect-video overflow-hidden bg-[#E8D5D5]">
                  <img
                    src={ministry.image}
                    alt={ministry.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 text-3xl">{ministry.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-[#111111] mb-3">{ministry.name}</h3>
                  <p className="text-[#6B7280] font-sans text-sm leading-relaxed mb-4">{ministry.description}</p>
                  <div className="pt-4 border-t border-gray-100 space-y-1.5">
                    {ministry.audience !== "All" && (
                      <p className="text-xs font-sans text-[#6B7280]">
                        <span className="text-[#111111] font-medium">For:</span> {ministry.audience}
                      </p>
                    )}
                    <p className="text-xs font-sans text-[#6B7280]">
                      <span className="text-[#111111] font-medium">Meets:</span> {ministry.meetingInfo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-[#A82626] rounded-lg p-10">
            <p className="text-white/70 text-xs font-sans uppercase tracking-widest mb-3">Get Involved</p>
            <h2 className="font-serif text-3xl font-bold text-white mb-4">There Is a Place for You Here</h2>
            <p className="text-white/80 font-sans max-w-xl mx-auto mb-8">
              Whether you want to serve, learn, or simply belong — our ministries are open to you.
              Reach out and take the next step.
            </p>
            <a
              href="mailto:kkarisa810@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-white text-[#A82626] text-sm font-sans font-medium uppercase tracking-widest rounded hover:bg-[#F8F6F3] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
