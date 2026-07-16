import { useEffect, useRef } from "react";
import gsap from "gsap";
import { config } from "../../config";

/**
 * TextReveal Component
 *
 * Animates text with a neon block that slides over the text (left→right),
 * then slides away (right→left) to reveal it.
 *
 * Uses IntersectionObserver instead of GSAP ScrollTrigger so it works inside
 * @react-three/drei ScrollControls (a custom div, not window scroll).
 * Replays the animation every time the element enters the viewport.
 *
 * @param {React.ReactNode} children   - Text or elements to reveal.
 * @param {string}  text               - Optional text string (alternative to children).
 * @param {'mount'|'scroll'} trigger   - Auto-play on mount, or on scroll into view.
 * @param {number}  delay              - Start delay in seconds (default 0).
 * @param {number}  duration           - Duration of each phase in seconds (default 0.55).
 * @param {string}  blockColor         - Reveal block colour (default '#ccff00').
 * @param {string}  textColor          - Text colour after reveal (default '#f8fafc').
 * @param {string}  as                 - Wrapper HTML tag (default 'span').
 * @param {string}  className          - Extra classes on the wrapper.
 * @param {string}  textClassName      - Extra classes on the inner text span.
 * @param {boolean} inline             - Use inline-block layout (default true).
 */
export const TextReveal = ({
  children,
  text,
  trigger = "mount",
  delay = 0,
  duration = 0.55,
  blockColor = config.theme.revealBlock,
  textColor = "#f8fafc",
  as: Component = "span",
  className = "",
  textClassName = "",
  inline = true,
}) => {
  const containerRef = useRef(null);
  const blockRef    = useRef(null);
  const textRef     = useRef(null);
  const tlRef       = useRef(null);

  useEffect(() => {
    const el     = containerRef.current;
    const block  = blockRef.current;
    const textEl = textRef.current;
    if (!el || !block || !textEl) return;

    /**
     * Build and run a fresh reveal timeline.
     * Kills any running timeline first so replay is clean.
     */
    const playReveal = () => {
      if (tlRef.current) tlRef.current.kill();

      // Snap to starting state before every run (no flash, no leftover state)
      gsap.set(textEl, { opacity: 0 });
      gsap.set(block,  { scaleX: 0, transformOrigin: "left center" });

      const tl = gsap.timeline({ delay });

      tl
        // 1. Block slides IN from the left, covering the text
        .to(block, {
          scaleX: 1,
          transformOrigin: "left center",
          duration,
          ease: "power2.inOut",
        })
        // 2. Text becomes visible while block is fully covering it
        .set(textEl, { opacity: 1 })
        // 3. Block slides OUT to the right, revealing the text
        .to(block, {
          scaleX: 0,
          transformOrigin: "right center",
          duration,
          ease: "power2.inOut",
        });

      tlRef.current = tl;
    };

    // Hide text immediately so there is no unstyled flash before the animation
    gsap.set(textEl, { opacity: 0 });
    gsap.set(block,  { scaleX: 0, transformOrigin: "left center" });

    // ── mount trigger ────────────────────────────────────────────────────────
    if (trigger === "mount") {
      playReveal();
      return () => { if (tlRef.current) tlRef.current.kill(); };
    }

    // ── scroll trigger via IntersectionObserver ──────────────────────────────
    // IMPORTANT: GSAP ScrollTrigger only watches `window` scroll.
    // @react-three/drei ScrollControls uses its own internal div,
    // so ScrollTrigger never fires inside it. IntersectionObserver
    // correctly observes visibility regardless of which container scrolls.
    // Setting { threshold: 0.15 } fires when 15% of the element is visible.
    // Because we do NOT use `{ once: true }`, it replays every time
    // the element re-enters the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) playReveal();
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (tlRef.current) tlRef.current.kill();
    };
  }, [trigger, delay, duration, blockColor]);

  const content = text || children;

  return (
    <Component
      ref={containerRef}
      className={[
        "relative overflow-hidden align-bottom",
        inline ? "inline-block" : "block",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Inner text — hidden until block fully covers it */}
      <span
        ref={textRef}
        className={`inline-block ${textClassName}`}
        style={{ color: textColor }}
      >
        {content}
      </span>

      {/* The neon reveal block — absolutely positioned over the text */}
      <span
        ref={blockRef}
        aria-hidden="true"
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ backgroundColor: blockColor }}
      />
    </Component>
  );
};
