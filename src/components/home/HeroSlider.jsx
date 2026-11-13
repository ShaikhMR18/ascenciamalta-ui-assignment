import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { slides } from "../../data";

const AUTOPLAY_DELAY = 6000;
const SWIPE_THRESHOLD = 50;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const start = useRef(null);
  const moved = useRef(false);
  const count = slides.length;
  const go = (next) => setIndex((next + count) % count);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;

    const id = setInterval(() => setIndex((current) => (current + 1) % count), AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [paused, count, index]);

  const onPointerDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    if (event.target.closest("a, button")) return;

    start.current = { x: event.clientX, y: event.clientY };
    moved.current = false;
    setDragging(true);
  };

  const endDrag = () => {
    start.current = null;
    setDragging(false);
  };

  const onPointerUp = (event) => {
    if (!start.current) return;

    const dx = event.clientX - start.current.x;
    const dy = event.clientY - start.current.y;

    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      moved.current = true;
      go(dx < 0 ? index + 1 : index - 1);
    }

    endDrag();
  };

  const onClickCapture = (event) => {
    if (!moved.current) return;
    event.preventDefault();
    event.stopPropagation();
    moved.current = false;
  };

  return (
    <section
      className={`hero slider ${dragging ? "is-dragging" : ""}`}
      aria-roledescription="carousel"
      aria-label="Featured"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
      onClickCapture={onClickCapture}
      onDragStart={(event) => event.preventDefault()}
    >
      {slides.map((slide, slideIndex) => {
        const Heading = slideIndex === 0 ? "h1" : "h2";
        const Cta = slide.primary.href ? "a" : Link;
        const ctaProps = slide.primary.href
          ? { href: slide.primary.href }
          : { to: slide.primary.to };

        return (
          <div
            key={slide.title}
            className={`slide ${slideIndex === index ? "is-active" : ""} ${slide.bare ? "slide--bare" : ""}`}
            style={{ backgroundImage: `url("${slide.img}")` }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${slideIndex + 1} of ${count}`}
          >
            <div className="hero__content">
              {!slide.bare && <p className="hero__kicker">{slide.kicker}</p>}
              <Heading className={slide.bare ? "sr" : undefined}>{slide.title}</Heading>
              <div className="hero__cta">
                <Cta {...ctaProps} className="btn btn--pill" draggable="false">
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
          <div className="slider__dots">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.title}
                className={slideIndex === index ? "is-active" : ""}
                onClick={() => go(slideIndex)}
                aria-label={`Go to slide ${slideIndex + 1}`}
                aria-current={slideIndex === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
