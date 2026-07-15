import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { MotionConfig } from "framer-motion";
import { atom } from "jotai";
import { config } from "../../config";

import { HomeSection } from "./HomeSection";
import { SkillsSection } from "./SkillsSection";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactSection";
import { MissionSection } from "./MissionSection";
import { VisionSection } from "./VisionSection";
import { ShowcaseSection } from "./ShowcaseSection";

export const projectAtom = atom(config.projects[0]);

export const Interface = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollData = useScroll();

  useFrame(() => {
    const scrolled = scrollData.offset > 0;
    if (scrolled !== hasScrolled) {
      setHasScrolled(scrolled);
    }
  });

  return (
    <div className="interface">
      <div className="sections">
        {/* HOME */}
        <HomeSection hasScrolled={hasScrolled} />

        {/* SKILLS */}
        <SkillsSection />

        {/* PROJECTS */}
        <ProjectsSection />

        {/* CONTACT */}
        <ContactSection />

        {/* MISSION */}
        <MissionSection mission={config.mission} />

        {/* VISION */}
        <VisionSection vision={config.vision} />

        {/* SHOWCASE */}
        <ShowcaseSection />
      </div>
    </div>
  );
};
