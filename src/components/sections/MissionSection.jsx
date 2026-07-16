import { motion } from "framer-motion";
import { TextReveal } from "../ui/TextReveal";

export const MissionSection = ({ mission }) => {
  return (
    <section className="section mission-section">
      <motion.div
        className="mission-stage"
        whileInView="visible"
        initial="hidden"
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <motion.div
          className="mission-copy"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -36 },
          }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-kicker">
            <TextReveal trigger="scroll">
              {mission.subtitle}
            </TextReveal>
          </p>
          <h1 className="mission-title">
            <TextReveal trigger="scroll" delay={0.15}>
              {mission.title}
            </TextReveal>
          </h1>
          <p className="mission-description">
            <TextReveal trigger="scroll" delay={0.3} textColor="#94a3b8">
              {mission.description}
            </TextReveal>
          </p>
        </motion.div>

        <motion.div
          className="mission-art"
          variants={{
            visible: { opacity: 1, scale: 1, rotate: 0 },
            hidden: { opacity: 0, scale: 0.92, rotate: -4 },
          }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <svg
            className="mission-mask"
            viewBox="0 0 520 520"
            role="img"
            aria-label="Abstract layered mission visual"
          >
            <defs>
              <linearGradient id="missionGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#172554" />
                <stop offset="52%" stopColor="#4668ee" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
              <mask id="missionCutout">
                <rect width="520" height="520" fill="black" />
                <path
                  d="M98 248C98 139 168 66 268 66c98 0 171 70 171 166 0 118-86 222-214 222-74 0-127-43-127-206Z"
                  fill="white"
                />
                <circle cx="364" cy="147" r="58" fill="black" />
                <rect x="143" y="292" width="214" height="46" rx="23" fill="black" />
              </mask>
            </defs>
            <rect width="520" height="520" fill="url(#missionGradient)" mask="url(#missionCutout)" />
            <path
              d="M113 333c58-76 113-114 164-114 52 0 93 31 124 94"
              fill="none"
              stroke="#f8fafc"
              strokeWidth="20"
              strokeLinecap="round"
              opacity="0.9"
            />
            <path
              d="M128 201c39-44 81-66 126-66 43 0 82 19 119 57"
              fill="none"
              stroke="#facc15"
              strokeWidth="13"
              strokeLinecap="round"
            />
            <circle cx="201" cy="382" r="20" fill="#f8fafc" />
            <circle cx="410" cy="258" r="12" fill="#facc15" />
          </svg>
        </motion.div>

        <div className="mission-pillars">
          {mission.points.map((point, index) => (
            <motion.div
              className="mission-pillar"
              key={point}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 22 },
              }}
              transition={{ duration: 0.55, delay: 0.2 + index * 0.12 }}
            >
              <span className="mission-pillar__number">0{index + 1}</span>
              <p>
                <TextReveal trigger="scroll" delay={0.25 + index * 0.1}>
                  {point}
                </TextReveal>
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
