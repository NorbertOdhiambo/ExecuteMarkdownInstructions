import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import { communityContent, communityImages } from "../../data/community";

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d={direction === "left" ? "M14 4l-7 7 7 7" : "M8 4l7 7-7 7"} />
    </svg>
  );
}

interface GalleryImageProps {
  index: number;
  className?: string;
  imageClassName?: string;
  onOpen: (index: number, trigger: HTMLButtonElement) => void;
}

function GalleryImage({
  index,
  className = "",
  imageClassName = "",
  onOpen,
}: GalleryImageProps) {
  const image = communityImages[index];

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label={`Enlarge image ${index + 1}: ${image.alt}`}
      onClick={(event) => onOpen(index, event.currentTarget)}
      className={`group relative !block h-auto min-h-11 w-full overflow-hidden rounded-lg bg-[#E8D5D5] !p-0 focus-visible:ring-offset-4 ${className}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className={`h-auto w-full transition-transform duration-500 group-hover:scale-[1.02] ${imageClassName}`}
        loading="lazy"
      />
      <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#111111]/75 text-white opacity-100 backdrop-blur-sm transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
        <svg
          aria-hidden="true"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="7.5" cy="7.5" r="4.5" />
          <path d="M11 11l4 4M7.5 5.5v4M5.5 7.5h4" />
        </svg>
      </span>
    </Button>
  );
}

export default function CommunityImpactSection() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openImage = useCallback((index: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActiveImage(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const showPrevious = useCallback(() => {
    setActiveImage((current) =>
      current === null
        ? null
        : (current - 1 + communityImages.length) % communityImages.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveImage((current) =>
      current === null ? null : (current + 1) % communityImages.length,
    );
  }, []);

  useEffect(() => {
    if (activeImage === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.getElementById("close-community-lightbox")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "Tab") {
        const dialog = document.getElementById("community-lightbox");
        const controls = dialog?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, closeLightbox, showNext, showPrevious]);

  const schoolImages = [1, 4, 5];
  const careImages = [0, 2, 3, 6, 7];

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

        <div className="mt-16 lg:mt-20">
          <GalleryImage
            index={schoolImages[0]}
            onOpen={openImage}
            className="shadow-sm"
          />
          <p className="mt-3 text-right font-sans text-xs uppercase tracking-widest text-[#6B7280]">
            Our school community
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="lg:pr-6">
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
          <div className="grid gap-4 sm:grid-cols-2">
            {schoolImages.slice(1).map((index) => (
              <GalleryImage key={index} index={index} onOpen={openImage} />
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-2xl bg-[#111111] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-[#E8A0A0]">
                Care & Compassion
              </p>
              <h3 className="font-serif text-3xl font-semibold leading-tight text-white">
                {communityContent.care.heading}
              </h3>
            </div>
            <p className="font-sans text-sm leading-relaxed text-white/65">
              {communityContent.care.body}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 items-start gap-3 sm:gap-4 lg:grid-cols-5">
            {careImages.map((index, position) => (
              <GalleryImage
                key={index}
                index={index}
                onOpen={openImage}
                className={position === careImages.length - 1 ? "col-span-2 mx-auto max-w-[50%] lg:col-span-1 lg:max-w-none" : ""}
              />
            ))}
          </div>
          <p className="mt-7 max-w-3xl font-sans text-xs leading-relaxed text-white/40">
            These photographs are shared to reflect the church&apos;s community work with dignity.
            Publication remains subject to confirmation of appropriate consent and permissions.
          </p>
        </div>
      </div>

      {activeImage !== null && (
        <div
          id="community-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Community photograph ${activeImage + 1} of ${communityImages.length}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <Button
            id="close-community-lightbox"
            type="button"
            variant="outline"
            size="sm"
            aria-label="Close gallery"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 h-11 w-11 rounded-full !p-0 sm:right-8 sm:top-8"
          >
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          </Button>

          <Button
            type="button"
            variant="outline"
            size="sm"
            aria-label="Previous photograph"
            onClick={showPrevious}
            className="absolute bottom-5 left-4 z-10 h-12 w-12 rounded-full !p-0 sm:bottom-auto sm:left-8"
          >
            <ArrowIcon direction="left" />
          </Button>

          <figure className="flex h-full w-full flex-col items-center justify-center">
            <img
              src={communityImages[activeImage].src}
              alt={communityImages[activeImage].alt}
              className="max-h-[calc(100vh-8rem)] max-w-full object-contain"
            />
            <figcaption className="mt-4 font-sans text-xs uppercase tracking-widest text-white/65">
              {activeImage + 1} / {communityImages.length}
            </figcaption>
          </figure>

          <Button
            type="button"
            variant="outline"
            size="sm"
            aria-label="Next photograph"
            onClick={showNext}
            className="absolute bottom-5 right-4 z-10 h-12 w-12 rounded-full !p-0 sm:bottom-auto sm:right-8"
          >
            <ArrowIcon direction="right" />
          </Button>
        </div>
      )}
    </section>
  );
}
