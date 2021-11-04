import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

//credit for ScrollArrow code: https://betterprogramming.pub/create-a-scroll-to-top-arrow-using-react-hooks-18586890fedc

export const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [fadeIcon, setFadeIcon] = useState(false);

  const checkScrollTop = () => {
    console.log("working");
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      <div
        className="scrollUpBtn"
        onClick={scrollTop}
        style={{
          display: showScroll ? "flex" : "none",
        }}
      >
        <FontAwesomeIcon
          className={fadeIcon ? "fade" : ""}
          icon={faAngleUp}
          onMouseEnter={() => {
            setFadeIcon(true);
          }}
          onMouseLeave={() => {
            setFadeIcon(false);
          }}
        />
      </div>
    </>
  );
};
