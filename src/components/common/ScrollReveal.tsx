"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    threshold?: number;
}

/**
 * ScrollReveal - Wraps content to animate on scroll into view
 * Uses Intersection Observer for performant scroll-triggered animations
 */
export default function ScrollReveal({ 
    children, 
    className = "", 
    delay = 0,
    threshold = 0.1 
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            // Skip animation for users who prefer reduced motion
            element.style.opacity = '1';
            element.style.transform = 'none';
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add delay if specified
                        if (delay > 0) {
                            setTimeout(() => {
                                entry.target.classList.add('is-visible');
                            }, delay);
                        } else {
                            entry.target.classList.add('is-visible');
                        }
                        // Unobserve after animation triggers (one-time animation)
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully visible
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [delay, threshold]);

    return (
        <div ref={ref} className={`animate-on-scroll ${className}`}>
            {children}
        </div>
    );
}
