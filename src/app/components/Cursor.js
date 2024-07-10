import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const lastMouseEvent = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;
      gsap.set(cursor, { x: clientX + scrollX, y: clientY + scrollY });
      lastMouseEvent.current = event;
    };

    const handleMouseEnter = () => {
      //   console.log("Mouse Entered");
      gsap.to(".hover-scale", { scale: 1.5 });
    };

    const handleMouseLeave = () => {
      gsap.to(".hover-scale", { scale: 1 });
    };

    const handleScroll = () => {
      const { clientX, clientY } = lastMouseEvent.current;
      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;
      gsap.set(cursor, { x: clientX + scrollX, y: clientY + scrollY });
    };

    document.addEventListener("mousemove", onMouseMove);

    document.querySelectorAll(".hover-scale").forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);

      document.querySelectorAll(".hover-scale").forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="absolute top-0 left-0 bg-transparent mix-blend-difference shadow-2xl h-6 w-6 border-2 rounded-full border-blue-600 shadow-blue-600 pointer-events-none"
      id="custom-cursor"
    >
      <span className="cursor-text hover-scale">View</span>
    </div>
  );
};

export default Cursor;
