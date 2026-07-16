import { motion } from "framer-motion";
import { TextReveal } from "../ui/TextReveal";

export const VisionSection = ({ vision }) => {
  return (
    <section className="section vision-section">
      <motion.div
        className="vision-stage"
        whileInView="visible"
        initial="hidden"
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <motion.div
          className="vision-header"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 28 },
          }}
          transition={{ duration: 0.75 }}
        >
          <p className="section-kicker">
            <TextReveal trigger="scroll">
              {vision.subtitle}
            </TextReveal>
          </p>
          <h1 className="vision-title">
            <TextReveal trigger="scroll" delay={0.15}>
              {vision.title}
            </TextReveal>
          </h1>
          <p className="vision-description">
            <TextReveal trigger="scroll" delay={0.3} textColor="#94a3b8">
              {vision.description}
            </TextReveal>
          </p>
        </motion.div>

        <motion.div
          className="vision-map"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 36 },
          }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <svg
            className="vision-ribbon"
            viewBox="0 0 940 300"
            role="img"
            aria-label="Abstract roadmap ribbon"
          >
            <defs>
              <linearGradient id="visionLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#facc15" />
                <stop offset="48%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#4668ee" />
              </linearGradient>
              <mask id="visionMask">
                <rect width="940" height="300" fill="black" />
                <path
                  d="M48 178C176 58 268 250 406 147c124-93 209-111 325-35 56 37 105 52 162 27"
                  fill="none"
                  stroke="white"
                  strokeWidth="76"
                  strokeLinecap="round"
                />
              </mask>
            </defs>
            <rect width="940" height="300" fill="url(#visionLine)" mask="url(#visionMask)" />
            <path
              d="M48 178C176 58 268 250 406 147c124-93 209-111 325-35 56 37 105 52 162 27"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2"
              strokeDasharray="10 14"
              opacity="0.4"
            />
            <circle cx="146" cy="118" r="22" fill="#f8fafc" />
            <circle cx="406" cy="147" r="22" fill="#f8fafc" />
            <circle cx="700" cy="96" r="22" fill="#f8fafc" />
          </svg>

          <div className="vision-tiles">
            {vision.points.map((point, index) => (
              <motion.div
                className="vision-tile"
                key={point}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 24 },
                }}
                transition={{ duration: 0.55, delay: 0.25 + index * 0.12 }}
              >
                <span className="vision-tile__label">Future 0{index + 1}</span>
                <p>
                  <TextReveal trigger="scroll" delay={0.25 + index * 0.1}>
                    {point}
                  </TextReveal>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
