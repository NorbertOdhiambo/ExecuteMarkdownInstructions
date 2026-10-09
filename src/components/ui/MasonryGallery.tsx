import { useCallback, useEffect, useId, useRef, useState } from "react"
import Button from "./Button"

export interface MasonryGalleryImage {
  src: string
  alt: string
  caption?: string
  orientation?: "rotate-left"
}

interface MasonryGalleryProps {
  images: readonly MasonryGalleryImage[]
  label: string
  eagerFirstImage?: boolean
}

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
  )
}

function GalleryPhoto({
  image,
  lightbox = false,
}: {
  image: MasonryGalleryImage
  lightbox?: boolean
}) {
  if (image.orientation === "rotate-left") {
    return (
      <div
        className={
          lightbox
            ? "gallery-rotated-frame gallery-rotated-frame--lightbox"
            : "gallery-rotated-frame"
        }
      >
        <img
          src={image.src}
          alt={image.alt}
          className="gallery-rotated-image"
          loading={lightbox ? "eager" : "lazy"}
        />
      </div>
    )
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      className={
        lightbox
          ? "max-h-[calc(100vh-9rem)] max-w-full object-contain"
          : "h-auto w-full"
      }
      loading={lightbox ? "eager" : "lazy"}
    />
  )
}

export default function MasonryGallery({
  images,
  label,
  eagerFirstImage = false,
}: MasonryGalleryProps) {
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const generatedId = useId().replace(/:/g, "")
  const dialogId = `gallery-${generatedId}`
  const closeId = `gallery-close-${generatedId}`

  const openImage = useCallback((index: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger
    setActiveImage(index)
  }, [])

  const closeLightbox = useCallback(() => {
    setActiveImage(null)
    window.requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  const showPrevious = useCallback(() => {
    setActiveImage((current) =>
      current === null ? null : (current - 1 + images.length) % images.length,
    )
  }, [images.length])

  const showNext = useCallback(() => {
    setActiveImage((current) =>
      current === null ? null : (current + 1) % images.length,
    )
  }, [images.length])

  useEffect(() => {
    if (activeImage === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    document.getElementById(closeId)?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox()
      if (event.key === "ArrowLeft") showPrevious()
      if (event.key === "ArrowRight") showNext()

      if (event.key === "Tab") {
        const controls = document
          .getElementById(dialogId)
          ?.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
          )
        if (!controls?.length) return
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeImage, closeId, closeLightbox, dialogId, showNext, showPrevious])

  return (
    <>
      <div
        aria-label={label}
        className="columns-1 gap-3 min-[480px]:columns-2 md:columns-3 md:gap-4 xl:columns-4 2xl:columns-5"
      >
        {images.map((image, index) => (
          <figure
            key={`${image.src}-${index}`}
            className="mb-3 break-inside-avoid md:mb-4"
          >
            <Button
              type="button"
              variant="ghost"
              size="sm"
              aria-label={`Open photograph ${index + 1} of ${images.length}: ${image.alt}`}
              onClick={(event) => openImage(index, event.currentTarget)}
              className="group relative !block h-auto min-h-11 w-full overflow-hidden rounded-lg bg-[#E8D5D5] !p-0 shadow-sm focus-visible:ring-offset-4"
            >
              <div className="transition-transform duration-500 group-hover:scale-[1.015]">
                {image.orientation === "rotate-left" ? (
                  <GalleryPhoto image={image} />
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-auto w-full"
                    loading={eagerFirstImage && index === 0 ? "eager" : "lazy"}
                  />
                )}
              </div>
              <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#111111]/75 text-white backdrop-blur-sm sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
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
            {image.caption && (
              <figcaption className="mt-2 font-sans text-xs leading-relaxed text-[#6B7280]">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {activeImage !== null && (
        <div
          id={dialogId}
          role="dialog"
          aria-modal="true"
          aria-label={`${label}, photograph ${activeImage + 1} of ${images.length}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox()
          }}
        >
          <Button
            id={closeId}
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
            className="absolute bottom-5 left-4 z-10 h-12 w-12 rounded-full bg-black/40 !p-0 sm:bottom-auto sm:left-8"
          >
            <ArrowIcon direction="left" />
          </Button>

          <figure className="flex h-full w-full flex-col items-center justify-center">
            <GalleryPhoto image={images[activeImage]} lightbox />
            <figcaption className="mt-4 px-14 text-center font-sans text-xs text-white/65">
              <span className="uppercase tracking-widest">
                {activeImage + 1} / {images.length}
              </span>
              {images[activeImage].caption && (
                <span className="mt-1 block">
                  {images[activeImage].caption}
                </span>
              )}
            </figcaption>
          </figure>

          <Button
            type="button"
            variant="outline"
            size="sm"
            aria-label="Next photograph"
            onClick={showNext}
            className="absolute bottom-5 right-4 z-10 h-12 w-12 rounded-full bg-black/40 !p-0 sm:bottom-auto sm:right-8"
          >
            <ArrowIcon direction="right" />
          </Button>
        </div>
      )}
    </>
  )
}
