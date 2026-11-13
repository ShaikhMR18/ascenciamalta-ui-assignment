
import  { useRef } from "react";

import "../styles/campusLife.css";
import { Button, Section } from "./UI";

const CampusLife = ({ about }) => {
  const sliderRef = useRef(null);

  const handleSlide = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector(".campus-slide");
    if (!card) return;

    const gap = 20;
    const scrollAmount = card.offsetWidth + gap;

    slider.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Section title="Our campus life">
      <div className="campus-gallery">

        <div className="campus-gallery__header">
          <p className="campus-gallery__description">
            Discover our vibrant campus, student activities,
            modern facilities and unforgettable experiences.
          </p>

          <div className="campus-gallery__controls">
            <button
              type="button"
              onClick={() => handleSlide(-1)}
              aria-label="Previous campus images"
              className="campus-gallery__arrow"
            >
              &#8592;
            </button>

            <button
              type="button"
              onClick={() => handleSlide(1)}
              aria-label="Next campus images"
              className="campus-gallery__arrow campus-gallery__arrow--next"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="campus-gallery__viewport" ref={sliderRef}>
          <div className="campus-gallery__track">
            {about.campus.map((src, index) => (
              <div className="campus-slide" key={src}>
                <img
                  src={src}
                  alt={`Ascencia Malta campus life ${index + 1}`}
                  loading="lazy"
                />

                <div className="campus-slide__overlay">
                  <span>Campus Life</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="campus-gallery__footer">
          <div className="campus-gallery__progress">
            <span />
          </div>

          <Button to="/contact">Visit the campus</Button>
        </div>

      </div>
    </Section>
  );
};

export default CampusLife;
