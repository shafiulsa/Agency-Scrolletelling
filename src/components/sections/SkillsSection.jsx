import { motion } from "framer-motion";
import { config } from "../../config";

export const SkillsSection = () => {
  return (
    <section className="section section--right">
      <motion.div
        className="skills"
        whileInView={"visible"}
        initial={{ opacity: 0 }}
        variants={{
          visible: { opacity: 1 },
        }}
      >
        {config.skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            className="skill"
            initial={{ opacity: 0 }}
            variants={{
              visible: { opacity: 1 },
            }}
            transition={{
              duration: 1,
              delay: idx * 0.2,
            }}
          >
            <div className="skill__label">
              <img
                className="skill__label__image"
                src={skill.icon}
                alt={skill.name}
              />
              <h2 className="skill__label__name">{skill.name}</h2>
            </div>
            <div className="skill__level">
              <motion.div
                className="skill__level__bar"
                initial={{ width: 0 }}
                variants={{
                  visible: {
                    width: `${skill.level}%`,
                  },
                }}
                transition={{
                  duration: 1,
                  delay: 1 + idx * 0.2,
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
