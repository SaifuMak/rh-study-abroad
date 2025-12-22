import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const useGsapOpacity = (options = {}) => {
  const elementRef = useRef(null);

  useGSAP(
    () => {
      if (!elementRef.current) return;

      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: options.duration ?? 0.9,
          ease: options.ease ?? "sine.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: options.start ?? "top 90%",
            toggleActions: options.toggleActions ?? "play none none reverse",
            markers: options.markers ?? false,
          },
        }
      );
    },
    { scope: elementRef }
  );

  return elementRef;
};

export default useGsapOpacity;
