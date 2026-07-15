import { motion } from "framer-motion";

export const HomeSection = ({ hasScrolled }) => {
  return (
    <section className="section section--bottom">
      <motion.div
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasScrolled ? 0 : 1 }}
      >
        <motion.div
          className="scroll-down__wheel"
          initial={{ translateY: 0 }}
          animate={{ translateY: 4 }}
          transition={{
            duration: 0.4,
            repeatDelay: 0.5,
            repeatType: "reverse",
            repeat: Infinity,
          }}
        />
      </motion.div>
    </section>
  );
};
