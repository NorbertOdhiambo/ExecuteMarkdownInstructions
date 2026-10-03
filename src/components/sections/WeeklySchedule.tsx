import { weeklyServices } from "../../data/church";
import Button from "../ui/Button";

interface WeeklyScheduleProps {
  compact?: boolean;
  showHeading?: boolean;
}

export default function WeeklySchedule({
  compact = false,
  showHeading = true,
}: WeeklyScheduleProps) {
  return (
    <section
      aria-labelledby="weekly-schedule-heading"
      className={compact ? "" : "bg-white py-20 lg:py-28"}
    >
      <div className={compact ? "" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        {showHeading && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.25em] text-[#A82626]">
              Worship With Us
            </p>
            <h2
              id="weekly-schedule-heading"
              className="font-serif text-4xl font-semibold leading-tight text-[#111111] lg:text-5xl"
            >
              A Place for Every Week
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-[#6B7280]">
              Join us in prayer, worship, fellowship, and the Word throughout the week.
            </p>
          </div>
        )}

        <div className="overflow-hidden rounded-xl border border-gray-100 bg-[#F8F6F3] shadow-sm">
          <div className="grid lg:grid-cols-[0.9fr_1.35fr]">
            <div className="divide-y divide-gray-200/70">
              {weeklyServices
                .filter((group) => !group.featured)
                .map((group) => (
                  <div
                    key={group.day}
                    className="grid gap-2 px-5 py-5 sm:grid-cols-[7rem_1fr] sm:px-7"
                  >
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#A82626]">
                      {group.day}
                    </p>
                    <div>
                      {group.services.map((service) => (
                        <div key={service.name}>
                          <p className="font-sans text-sm font-semibold text-[#111111]">
                            {service.name}
                          </p>
                          <p className="mt-1 font-sans text-sm text-[#6B7280]">
                            {service.time ?? "Time to be announced"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>

            {weeklyServices
              .filter((group) => group.featured)
              .map((group) => (
                <div key={group.day} className="bg-[#111111] p-6 text-white sm:p-8 lg:p-10">
                  <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                    <div>
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#E8A0A0]">
                        Sunday
                      </p>
                      <h3 className="mt-2 font-serif text-2xl font-semibold">Three Services</h3>
                    </div>
                    <svg
                      aria-hidden="true"
                      className="text-[#A82626]"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="16" cy="16" r="12" />
                      <path d="M16 9v7l4 3" />
                    </svg>
                  </div>
                  <ol className="space-y-5">
                    {group.services.map((service, index) => (
                      <li key={service.name} className="flex gap-4">
                        <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#A82626] font-sans text-xs font-semibold">
                          {index + 1}
                        </span>
                        <div>
                          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <p className="font-sans text-sm font-semibold text-white">
                              {service.name}
                            </p>
                            {"language" in service && service.language && (
                              <span className="rounded-full border border-white/20 px-2 py-0.5 font-sans text-[0.65rem] uppercase tracking-widest text-white/60">
                                {service.language}
                              </span>
                            )}
                          </div>
                          <p className="mt-1 font-sans text-sm text-white/65">{service.time}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
          </div>
        </div>

        {!compact && (
          <div className="mt-10 text-center">
            <Button asLink="/plan-visit" size="lg">
              Plan Your Visit
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
