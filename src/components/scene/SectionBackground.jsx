import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";
import { config } from "../../config";

const getSectionBackground = (section) =>
  config.theme.sections[section]?.background || config.theme.defaultBackground;

export const SectionBackground = () => {
  const scrollData = useScroll();
  const { scene } = useThree();
  const targetColor = useMemo(() => new THREE.Color(), []);

  useFrame(() => {
    const sectionIndex = Math.min(
      Math.floor(scrollData.offset * config.sections.length),
      config.sections.length - 1
    );
    const currentSection = config.sections[sectionIndex];

    targetColor.set(getSectionBackground(currentSection));
    if (scene.background) {
      scene.background.lerp(targetColor, 0.08);
    }

    if (scene.fog) {
      scene.fog.color.lerp(targetColor, 0.08);
    }
  });

  return null;
};
