import { motion } from "framer-motion";
import { config } from "../../config";
import { TextReveal } from "../ui/TextReveal";

export const ContactSection = () => {
  return (
    <section className="section section--left">
      <motion.div
        className="contact"
        whileInView={"visible"}
        initial={{ opacity: 0 }}
        variants={{
          visible: { opacity: 1 },
        }}
      >
        <h1 className="contact__name">
          <TextReveal trigger="scroll">
            {config.contact.name}
          </TextReveal>
        </h1>
        <p className="contact__address">
          <TextReveal trigger="scroll" delay={0.15} textColor="#94a3b8">
            {config.contact.address}
          </TextReveal>
        </p>
        <div className="contact__socials">
          <a href={config.contact.socials.linkedin} target="_blank" rel="noreferrer">
            <img
              className="contact__socials__icon"
              src="icons/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a href={config.contact.socials.twitter} target="_blank" rel="noreferrer">
            <img
              className="contact__socials__icon"
              src="icons/twitter.png"
              alt="twitter"
            />
          </a>
          <a href={`mailto:${config.contact.mail}`} target="_blank" rel="noreferrer">
            <img
              className="contact__socials__icon"
              src="icons/email.png"
              alt="email"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
