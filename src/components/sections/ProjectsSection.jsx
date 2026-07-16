import { motion } from "framer-motion";
import { config } from "../../config";
import { useAtom } from "jotai";
import { projectAtom } from "./Interface";
import { TextReveal } from "../ui/TextReveal";

export const ProjectsSection = () => {
  const [_project, setProject] = useAtom(projectAtom);

  return (
    <section className="section section--left">
      <motion.div
        className="projects"
        whileInView={"visible"}
        initial={{ opacity: 0 }}
        variants={{
          visible: { opacity: 1 },
        }}
      >
        {config.projects.map((project, idx) => (
          <motion.div
            key={project.name}
            className="project"
            initial={{ opacity: 0 }}
            onMouseEnter={() => setProject(project)}
            variants={{
              visible: { opacity: 1 },
            }}
            transition={{
              duration: 1,
              delay: idx * 0.5,
            }}
          >
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                className="project__image"
                src={project.image}
                alt={project.name}
              />
              <div className="project__details">
                <h2 className="project__details__name">
                  <TextReveal trigger="scroll" delay={idx * 0.05}>
                    {project.name}
                  </TextReveal>
                </h2>
                <p className="project__details__description">
                  <TextReveal trigger="scroll" delay={idx * 0.05 + 0.15} textColor="#94a3b8">
                    {project.description}
                  </TextReveal>
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

