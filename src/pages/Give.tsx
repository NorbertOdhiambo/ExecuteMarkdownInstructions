import { useState } from "react";

export default function Give() {
  const [copied, setCopied] = useState(false);

  const copyAccount = () => {
    navigator.clipboard.writeText("1190282585415").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <main>
      <div className="relative bg-[#111111] pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&h=600&fit=crop&auto=format)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#A82626] text-xs font-sans uppercase tracking-[0.25em] mb-4">Generosity</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white">Give With Purpose</h1>
          <p className="text-white/60 font-sans text-lg mt-4 max-w-2xl">
            Your generosity helps support worship, ministry, outreach, discipleship, community care, and the ongoing work of the church.
          </p>
        </div>
      </div>

      <section className="py-20 bg-[#F8F6F3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Why give */}
          <div className="text-center mb-16">
            <p className="text-[#A82626] text-xs font-sans uppercase tracking-widest mb-4">Why Give</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#111111] mb-6">Your Giving Makes a Difference</h2>
            <p className="text-[#6B7280] font-sans text-base leading-relaxed max-w-2xl mx-auto">
              Every gift supports Sunday feeding programs, children's Sunday School, youth ministry, women's fellowship, community care for orphans and vulnerable children, and "Jesus in the Village" evangelistic crusades.
            </p>
          </div>

          {/* Account details */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 sm:p-12 mb-10">
            <h3 className="font-serif text-2xl font-semibold text-[#111111] mb-8">Bank Transfer</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#F8F6F3] rounded-lg p-5">
                <p className="text-[#6B7280] text-xs font-sans uppercase tracking-widest mb-2">Account Name</p>
                <p className="font-sans text-sm font-medium text-[#111111] leading-relaxed">
                  Spring Of Miracles Ministry /<br />House Of Prayer For All Nations
                </p>
              </div>

              <div className="bg-[#F8F6F3] rounded-lg p-5">
                <p className="text-[#6B7280] text-xs font-sans uppercase tracking-widest mb-2">Account Number</p>
                <div className="flex items-center gap-3">
                  <p className="font-mono text-lg font-semibold text-[#111111] tracking-wider">1190282585415</p>
                  <button
                    onClick={copyAccount}
                    className="flex-shrink-0 px-3 py-1.5 text-xs font-sans bg-[#A82626] text-white rounded hover:bg-[#8a1f1f] transition-colors"
                    aria-label="Copy account number"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <p className="text-[#6B7280] text-xs font-sans uppercase tracking-widest mb-3">Other Giving Methods</p>
              <p className="text-[#6B7280] font-sans text-sm">
                [Mobile money and additional payment methods to be confirmed by church leadership]
              </p>
            </div>

            <div className="mt-8 bg-[#F8F6F3] rounded-lg p-5">
              <p className="text-[#6B7280] text-xs font-sans leading-relaxed">
                ⚠️ <strong className="text-[#111111]">Please verify:</strong> Account details displayed are subject to confirmation by church leadership before the public launch of this website. If in doubt, please contact the church directly before making a transfer.
              </p>
            </div>
          </div>

          {/* Future integration note */}
          <div className="bg-[#A82626] rounded-xl p-8 text-center">
            <h3 className="font-serif text-2xl font-bold text-white mb-4">Online Giving</h3>
            <p className="text-white/80 font-sans text-base mb-6">
              Secure online giving will be available once a payment provider is connected. For now, please use bank transfer details above.
            </p>
            <p className="text-white/60 text-xs font-sans">
              [ONLINE GIVING URL TO BE CONFIRMED]
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
