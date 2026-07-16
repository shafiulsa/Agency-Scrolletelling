import { motion } from "framer-motion";
import { TextReveal } from "./TextReveal";

/**
 * AnnotationBranch
 * One branch of the annotation diagram — a label + 3 staggered sub-items.
 * Sub-items appear one after another via staggerChildren.
 *
 * @param {string}           label   - Branch heading
 * @param {string[]}         items   - Three sub-annotation strings
 * @param {'left'|'right'}   side    - Which side the spine lives on
 * @param {boolean}          isLast  - Removes the connector dot if last
 */
const AnnotationBranch = ({ label, items, side, isLast }) => {
  const isLeft = side === "left";

  return (
    <motion.div
      className={`relative mb-10 ${isLeft ? "pl-8" : "pr-8"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.18, delayChildren: 0.05 } },
      }}
    >
      {/* Horizontal connector from spine → label */}
      <span
        className="absolute top-[18px] h-px bg-[#ccff00]/60 w-7"
        style={isLeft ? { left: 0 } : { right: 0 }}
      />

      {/* Branch label */}
      <p className={`text-[10px] font-bold tracking-[0.2em] uppercase text-[#ccff00]/60 mb-1 ${isLeft ? "" : "text-right"}`}>
        {label}
      </p>

      {/* Staggered sub-annotations */}
      <div className={`space-y-[6px] ${isLeft ? "" : "items-end flex flex-col"}`}>
        {items.map((item) => (
          <motion.div
            key={item}
            variants={{
              hidden: { opacity: 0, x: isLeft ? -18 : 18 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.38, ease: "easeOut" } },
            }}
            className={`flex items-center gap-2 ${isLeft ? "" : "flex-row-reverse"}`}
          >
            <span className="text-[#ccff00] text-xs font-mono shrink-0">
              {isLeft ? "↳" : "↲"}
            </span>
            <TextReveal
              trigger="scroll"
              textColor="#94a3b8"
              as="span"
              className="text-sm leading-snug"
            >
              {item}
            </TextReveal>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

/**
 * AnnotationPanel
 * A vertical-spine diagram with 3 labeled branches, each with 3 staggered sub-items.
 *
 * @param {Array}           categories  - Array of { label, items[] }
 * @param {'left'|'right'}  side        - Spine side & text direction
 * @param {string}          kicker      - Small label above the first branch
 */
export const AnnotationPanel = ({ categories, side = "left", kicker }) => {
  const isLeft = side === "left";

  return (
    <div className={`relative w-full ${isLeft ? "pr-4" : "pl-4"}`}>
      {/* Kicker label */}
      {kicker && (
        <p
          className={`text-[10px] font-semibold tracking-[0.25em] uppercase text-[#ccff00]/40 mb-6 ${
            isLeft ? "" : "text-right"
          }`}
        >
          {kicker}
        </p>
      )}

      {/* Vertical spine */}
      <div
        className="absolute top-0 bottom-0 w-px"
        style={{
          [isLeft ? "left" : "right"]: 0,
          background:
            "linear-gradient(to bottom, transparent, #ccff0066 20%, #ccff0066 80%, transparent)",
        }}
      />

      {/* Branches */}
      {categories.map((cat, i) => (
        <AnnotationBranch
          key={cat.label}
          label={cat.label}
          items={cat.items}
          side={side}
          isLast={i === categories.length - 1}
        />
      ))}
    </div>
  );
};
