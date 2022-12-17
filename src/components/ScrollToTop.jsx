import React, { useState, useEffect } from "react";
import { BiArrowFromBottom } from "react-icons/bi";
import { Link } from "react-scroll";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const boundaryValue = 0;

  const toogleVisibility = () => {
    if (window.pageYOffset > boundaryValue) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toogleVisibility);
    return () => {
      window.removeEventListener("scroll", toogleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2">
      {isVisible && (
        <Link to={"home"} smooth duration={500}>
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-600 focus:ring-orange-500 inline-flex items-center rounded-xl p-4 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 hover:ring-2 ring-offset-2"
          >
            <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
          </button>
        </Link>
      )}
    </div>
  );
};

export default ScrollToTop;
