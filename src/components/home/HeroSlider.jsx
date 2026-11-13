import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { slides } from "../../data";

const AUTOPLAY_DELAY = 6000;
const SWIPE_THRESHOLD = 48;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const pointerStart = useRef(null);
  const suppressClick = useRef(false);
  const slideCount = slides.length;

  const goToSlide = (nextIndex) => {
    setActiveIndex((nextIndex + slideCount) % slideCount);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isPaused || prefersReducedMotion || slideCount < 2) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [isPaused, slideCount]);

  const handlePointerDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    if (event.target.closest("a, button")) return;

    pointerStart.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
    };
    suppressClick.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const finishPointer = (event) => {
    const start = pointerStart.current;
    if (!start || start.id !== event.pointerId) return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaX) >= SWIPE_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY)) {
      suppressClick.current = true;
      goToSlide(activeIndex + (deltaX < 0 ? 1 : -1));
    }

    pointerStart.current = null;
    setIsDragging(false);
  };

  const handleClickCapture = (event) => {
    if (!suppressClick.current) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClick.current = false;
  };

  return (
    <section
      className={`hero slider${isDragging ? " is-dragging" : ""}`}
      aria-roledescription="carousel"
      aria-label="Featured"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={finishPointer}
      onPointerCancel={finishPointer}
      onClickCapture={handleClickCapture}
      onDragStart={(event) => event.preventDefault()}
    >
      {slides.map((slide, slideIndex) => {
        const Heading = slideIndex === 0 ? "h1" : "h2";
        const Cta = slide.primary.href ? "a" : Link;
        const ctaProps = slide.primary.href
          ? { href: slide.primary.href }
          : { to: slide.primary.to };
        const isActive = slideIndex === activeIndex;

        return (
          <div
            key={slide.title}
            className={`slide${isActive ? " is-active" : ""}${slide.bare ? " slide--bare" : ""}`}
            style={{ backgroundImage: `url("${slide.img}")` }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${slideIndex + 1} of ${slideCount}`}
            aria-hidden={!isActive}
          >
            <div className="hero__content">
              {!slide.bare && <p className="hero__kicker">{slide.kicker}</p>}
              <Heading className={slide.bare ? "sr" : undefined}>{slide.title}</Heading>
              <div className="hero__cta">
                <Cta {...ctaProps} className="btn btn--pill" draggable="false" tabIndex={isActive ? 0 : -1}>
                  {slide.primary.label}
                  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3zm-6 9.2v3.6c0 1.7 2.7 3.2 6 3.2s6-1.5 6-3.2v-3.6l-6 3.3-6-3.3z" />
                  </svg>
                </Cta>
              </div>
            </div>
          </div>
        );
      })}

      <div className="slider__nav">
        <div className="container slider__bar">
          <div className="slider__dots" role="group" aria-label="Choose featured slide">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.title}
                type="button"
                className={slideIndex === activeIndex ? "is-active" : ""}
                onClick={() => goToSlide(slideIndex)}
                aria-label={`Go to slide ${slideIndex + 1}`}
                aria-current={slideIndex === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

