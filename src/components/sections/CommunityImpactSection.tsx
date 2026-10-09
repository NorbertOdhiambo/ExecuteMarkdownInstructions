import Button from "../ui/Button"
import MasonryGallery from "../ui/MasonryGallery"
import { communityContent, communityImages } from "../../data/community"

export default function CommunityImpactSection() {
  return (
    <section
      id="community-impact"
      aria-labelledby="community-impact-heading"
      className="overflow-hidden bg-[#F8F6F3] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.25em] text-[#A82626]">
              {communityContent.eyebrow}
            </p>
            <h2
              id="community-impact-heading"
              className="font-serif text-4xl font-semibold leading-tight text-[#111111] sm:text-5xl"
            >
              {communityContent.heading}
            </h2>
          </div>
          <div>
            <p className="font-sans text-base leading-relaxed text-[#6B7280]">
              {communityContent.introduction}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asLink="/ministries" variant="primary">
                Discover Our Community Work
              </Button>
              <Button asLink="/give" variant="secondary">
                Support Our Mission
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-7 shadow-sm sm:p-9">
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-[#A82626]">
              Our School
            </p>
            <h3 className="font-serif text-3xl font-semibold leading-tight text-[#111111]">
              {communityContent.school.heading}
            </h3>
            <p className="mt-5 font-sans text-sm leading-relaxed text-[#6B7280]">
              {communityContent.school.body}
            </p>
          </div>
          <div className="rounded-2xl bg-[#111111] p-7 sm:p-9">
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-[#E8A0A0]">
              Care & Compassion
            </p>
            <h3 className="font-serif text-3xl font-semibold leading-tight text-white">
              {communityContent.care.heading}
            </h3>
            <p className="mt-5 font-sans text-sm leading-relaxed text-white/65">
              {communityContent.care.body}
            </p>
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <MasonryGallery
            images={communityImages}
            label="School and community impact gallery"
          />
          <p className="mt-6 max-w-3xl font-sans text-xs leading-relaxed text-[#6B7280]">
            These photographs are shared to reflect the church&apos;s community
            work with dignity. Publication remains subject to confirmation of
            appropriate consent and permissions.
          </p>
        </div>
      </div>
    </section>
  )
}
