import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Prayer() {
  const [form, setForm] = useState({ name: "", email: "", request: "", confidential: false });
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.request.trim()) e.request = "Please enter your prayer request.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setState("loading");
    setTimeout(() => setState("success"), 1500);
  };

  const Field = ({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-sans font-medium text-[#111111] mb-2">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-[#A82626] text-xs font-sans">{error}</p>}
    </div>
  );

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 bg-white border rounded font-sans text-sm text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#A82626] focus:border-transparent transition-colors ${
      errors[field] ? "border-[#A82626]" : "border-gray-200"
    }`;

  return (
    <main>
      {/* Hero */}
      <div className="relative bg-[#A82626] pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1920&h=600&fit=crop&auto=format)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/60 text-xs font-sans uppercase tracking-[0.25em] mb-4">Prayer</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white leading-tight">
            We Believe in<br />the Power of Prayer
          </h1>
          <p className="text-white/80 font-sans text-lg mt-4 max-w-2xl">
            As a House of Prayer for All Nations, prayer is not just what we do — it is who we are. Share your request and we will stand with you.
          </p>
        </div>
      </div>

      <section className="py-20 bg-[#F8F6F3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {state === "success" ? (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-12 text-center">
              <div className="w-16 h-16 bg-[#A82626]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#A82626" strokeWidth="2">
                  <path d="M6 14l6 6 10-10" />
                </svg>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#111111] mb-4">Your Prayer Request Has Been Received</h2>
              <p className="text-[#6B7280] font-sans text-base leading-relaxed mb-2">
                We are standing with you in prayer.
              </p>
              <p className="text-[#6B7280] font-sans text-sm">
                If you included contact details, we may reach out to you. May God meet you right where you are.
              </p>
              <button
                onClick={() => { setForm({ name: "", email: "", request: "", confidential: false }); setState("idle"); setErrors({}); }}
                className="mt-8 text-[#A82626] text-sm font-sans font-medium hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 sm:p-12">
              <h2 className="font-serif text-2xl font-bold text-[#111111] mb-2">Request Prayer</h2>
              <p className="text-[#6B7280] font-sans text-sm mb-8">
                Share your prayer need. What you share is treated with care and respect.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <Field id="prayer-name" label="Your Name *" error={errors.name}>
                  <input
                    id="prayer-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={inputClass("name")}
                  />
                </Field>

                <Field id="prayer-email" label="Email or Phone (optional)">
                  <input
                    id="prayer-email"
                    type="text"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="email@example.com or phone number"
                    className={inputClass("email")}
                  />
                </Field>

                <Field id="prayer-request" label="Your Prayer Request *" error={errors.request}>
                  <textarea
                    id="prayer-request"
                    rows={6}
                    value={form.request}
                    onChange={(e) => setForm({ ...form, request: e.target.value })}
                    placeholder="Share your prayer request here..."
                    className={`${inputClass("request")} resize-none`}
                  />
                </Field>

                <div className="flex items-start gap-3">
                  <input
                    id="confidential"
                    type="checkbox"
                    checked={form.confidential}
                    onChange={(e) => setForm({ ...form, confidential: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-[#A82626] rounded"
                  />
                  <label htmlFor="confidential" className="text-sm font-sans text-[#6B7280] leading-relaxed">
                    Keep my request confidential — shared only with our prayer team
                  </label>
                </div>

                <p className="text-[#6B7280] text-xs font-sans leading-relaxed">
                  Your request is treated with respect and confidentiality. We will not share your personal information.
                </p>

                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full py-4 bg-[#A82626] text-white text-sm font-sans font-medium uppercase tracking-widest rounded hover:bg-[#8a1f1f] transition-colors disabled:opacity-70"
                >
                  {state === "loading" ? "Submitting..." : "Submit Prayer Request"}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
