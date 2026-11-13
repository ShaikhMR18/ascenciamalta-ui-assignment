import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useScrollVisible from "../../hooks/useScrollVisible";

function ScrollToTop() {
  const { pathname } = useLocation();
  const isVisible = useScrollVisible(320);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <button
      className="scroll-to-top"
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="M12 19V5m0 0L5.5 11.5M12 5l6.5 6.5" />
      </svg>
    </button>
  );
}

export default ScrollToTop;
