'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const useGsapFadeIn = (options = {}) => {
  const elementRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 644px)' });

  useGSAP(
    () => {
      if (!elementRef.current) return;

      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          y: options.initialPosition ?? 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.8,
          delay: options.delay ?? null,
          ease: options.ease ?? 'sine.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 90%',
            toggleActions: options.toggleActions ?? 'play none none reverse',
            markers: options.markers ?? false,
          },
        }
      );
    },
    { scope: elementRef }
  );

  return elementRef;
};

export default useGsapFadeIn;
