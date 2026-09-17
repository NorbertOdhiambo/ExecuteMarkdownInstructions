import { Link } from "react-router";

export default function GivingSection() {
  return (
    <section className="bg-[#111111] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#A82626] text-xs font-sans uppercase tracking-[0.25em] mb-4">Generosity</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Give With Purpose
            </h2>
            <div className="w-12 h-0.5 bg-[#A82626] mb-8" />
            <p className="text-white/70 font-sans text-base leading-relaxed mb-8">
              Your generosity helps support worship, ministry, outreach, discipleship, community care, and the ongoing work of the church. Every gift is an act of faith.
            </p>
            <p className="text-white/50 font-sans text-sm leading-relaxed mb-10 italic">
              "Jesus in the Village," Sunday feeding programs, orphan support, and the kindergarten that serves the community — your giving makes it possible.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/give"
                className="inline-flex items-center px-8 py-4 bg-[#A82626] text-white text-sm font-sans font-medium uppercase tracking-widest rounded hover:bg-[#8a1f1f] transition-colors"
              >
                Give Now
              </Link>
              <Link
                to="/give"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white text-sm font-sans font-medium uppercase tracking-widest rounded border border-white/20 hover:border-white/60 transition-colors"
              >
                Learn About Giving
              </Link>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8 lg:p-10">
            <h3 className="font-serif text-2xl font-semibold text-white mb-8">Ways to Give</h3>
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-6">
                <p className="text-white text-sm font-sans font-medium mb-2">Bank Transfer</p>
                <p className="text-white/50 text-xs font-sans uppercase tracking-widest mb-1">Account Name</p>
                <p className="text-white/80 text-sm font-sans">Spring Of Miracles Ministry /<br />House Of Prayer For All Nations</p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <p className="text-white/50 text-xs font-sans uppercase tracking-widest mb-1">Account Number</p>
                <div className="flex items-center gap-3">
                  <p className="text-white/80 text-sm font-sans font-mono tracking-wider">1190282585415</p>
                </div>
              </div>
              <div>
                <p className="text-white/50 text-xs font-sans uppercase tracking-widest mb-2">Other Methods</p>
                <p className="text-white/40 text-sm font-sans">[Mobile money and additional giving methods to be confirmed]</p>
              </div>
            </div>
            <p className="text-white/30 text-xs font-sans mt-6 leading-relaxed">
              Please verify account details on our Give page before making a transfer. Church leadership will confirm all giving information before public launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
