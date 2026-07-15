import { motion } from "framer-motion";

export const ShowcaseSection = () => {
  return (
    <section className="section showcase-section">
      <motion.div
        className="showcase-stage"
        whileInView="visible"
        initial="hidden"
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        {/* Header */}
        <motion.div
          className="showcase-header"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 32 },
          }}
          transition={{ duration: 0.75 }}
        >
          <p className="showcase-kicker">Interactive Models</p>
          <h1 className="showcase-title">3D Showcase</h1>
          <p className="showcase-description">
            A curated collection of 3D assets built and integrated with
            React Three Fiber — lighting, geometry, and animation all in one.
          </p>
        </motion.div>

        {/* Model labels */}
        <motion.div
          className="showcase-labels"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {[
            { icon: "💡", name: "Lamp", desc: "Ambient lighting prop" },
            { icon: "💻", name: "Laptop", desc: "Developer workstation" },
            { icon: "📬", name: "Mailbox", desc: "Contact & connection" },
          ].map((item, idx) => (
            <motion.div
              key={item.name}
              className="showcase-label"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 24 },
              }}
              transition={{ duration: 0.55, delay: 0.3 + idx * 0.12 }}
            >
              <span className="showcase-label__icon">{item.icon}</span>
              <span className="showcase-label__name">{item.name}</span>
              <span className="showcase-label__desc">{item.desc}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
