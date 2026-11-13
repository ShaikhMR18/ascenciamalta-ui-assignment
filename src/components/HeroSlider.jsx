import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { slides } from "../data/";
import { DELAY, THRESHOLD } from "../utility";



export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const start = useRef(null);
  const moved = useRef(false);
  const count = slides.length;
  const go = (i) => setIndex((i + count) % count);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), DELAY);
    return () => clearInterval(id);
  }, [paused, count, index]);

  const onPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return; 
    if (e.target.closest("a, button")) return;            
    start.current = { x: e.clientX, y: e.clientY };
    moved.current = false;
    setDragging(true);
  };

  const endDrag = () => {
    start.current = null;
    setDragging(false);
  };

  const onPointerUp = (e) => {
    if (!start.current) return;
    const dx = e.clientX - start.current.x;
    const dy = e.clientY - start.current.y;
    if (Math.abs(dx) > THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      moved.current = true;
      go(dx < 0 ? index + 1 : index - 1);
    }
    endDrag();
  };

  // Stop a drag from also triggering a link underneath
  const onClickCapture = (e) => {
    if (moved.current) {
      e.preventDefault();
      e.stopPropagation();
      moved.current = false;
    }
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
      onDragStart={(e) => e.preventDefault()}
    >
      {slides.map((s, i) => {
        const Heading = i === 0 ? "h1" : "h2";
        const Cta = s.primary.href ? "a" : Link;
        const ctaProps = s.primary.href ? { href: s.primary.href } : { to: s.primary.to };
        return (
          <div
            key={s.title}
            className={`slide ${i === index ? "is-active" : ""} ${s.bare ? "slide--bare" : ""}`}
            style={{ backgroundImage: `url("${s.img}")` }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
          >
            <div className="hero__content">
              {!s.bare && <p className="hero__kicker">{s.kicker}</p>}
              <Heading className={s.bare ? "sr" : undefined}>{s.title}</Heading>
              <div className="hero__cta">
                <Cta {...ctaProps} className="btn btn--pill" draggable="false">
                  {s.primary.label}
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
            {slides.map((s, i) => (
              <button
                key={s.title}
                className={i === index ? "is-active" : ""}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}