import { motion } from "framer-motion";
import { TextReveal } from "../ui/TextReveal";
import { config } from "../../config";

export const HomeSection = ({ hasScrolled }) => {
  return (
    <section className="section" style={{ position: "relative" }}>
      {/* ── Hero copy ── */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-16 pointer-events-none">
        {/* Kicker */}
        <motion.p
          className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#ccff00]/70 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Creative Studio ✦ Digital Experiences
        </motion.p>

        {/* Main heading */}
        <h1 className="font-bold leading-[0.9] tracking-tight">
          <span className="block text-3xl md:text-7xl lg:text-[5rem] text-[#F8FAFC]">
            <TextReveal trigger="mount" delay={0.3} duration={0.65} as="span">
              {config.home.title}
            </TextReveal>
          </span>
          <span className="block text-3xl md:text-7xl lg:text-[5rem] mt-2" style={{ WebkitTextStroke: "1.5px #ccff00", color: "transparent" }}>
            <TextReveal trigger="mount" delay={0.8} duration={0.65} as="span">
              {config.home.subtitle}
            </TextReveal>
          </span>
        </h1>

        {/* Sub-line */}
        <motion.p
          className="mt-6 text-slate-400 text-base md:text-lg max-w-sm leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          Bold visuals. Precise code. Built to make your brand impossible to ignore.
        </motion.p>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="section--down absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasScrolled ? 0 : 1 }}
        transition={{ delay: 2, duration: 0.4 }}
      >
        <motion.div
          className="scroll-down__wheel"
          initial={{ translateY: 0 }}
          animate={{ translateY: 4 }}
          transition={{ duration: 0.4, repeatDelay: 0.5, repeatType: "reverse", repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};
