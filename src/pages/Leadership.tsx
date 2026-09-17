import { leadership } from "../data/church";
import SectionHeading from "../components/ui/SectionHeading";

export default function Leadership() {
  return (
    <main>
      <div className="relative bg-[#111111] pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&h=600&fit=crop&auto=format)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#A82626] text-xs font-sans uppercase tracking-[0.25em] mb-4">Meet the Team</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white">Leadership</h1>
          <p className="text-white/60 font-sans text-lg mt-4">Led by faith, shaped by prayer, committed to all nations.</p>
        </div>
      </div>

      <section className="py-20 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {leadership.map((leader) => (
            <div key={leader.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5">
                {/* Portrait */}
                <div className="md:col-span-2 relative">
                  <div className="aspect-[3/4] md:h-full bg-[#E8D5D5] overflow-hidden">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#A82626]/30 to-transparent md:bg-gradient-to-r" />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-[#A82626] text-xs font-sans uppercase tracking-widest mb-3">{leader.title}</p>
                  <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#111111] mb-6">{leader.name}</h2>
                  <div className="w-12 h-0.5 bg-[#A82626] mb-8" />
                  <p className="text-[#6B7280] font-sans text-base leading-relaxed mb-6">{leader.bio}</p>
                  <p className="text-[#6B7280] font-sans text-sm">
                    <span className="text-[#111111] font-medium">Ministry focus: </span>
                    {leader.ministryFocus}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={`mailto:${leader.contact.email}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#A82626] text-white text-xs font-sans uppercase tracking-widest rounded hover:bg-[#8a1f1f] transition-colors"
                    >
                      Email
                    </a>
                    <a
                      href={`tel:${leader.contact.phone}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#111111] text-xs font-sans uppercase tracking-widest rounded border border-gray-200 hover:border-[#111111] transition-colors"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <p className="text-center text-[#6B7280] text-sm font-sans mt-12">
            Additional leadership profiles will be added as information is confirmed by church officials.
          </p>
        </div>
      </section>
    </main>
  );
}
