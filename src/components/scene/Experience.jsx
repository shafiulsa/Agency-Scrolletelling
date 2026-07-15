import {
  Environment,
  Float,
  MeshDistortMaterial,
  RoundedBox,
  useScroll,
  Center,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Star } from "../models/Star";
import { MacBookPro } from "../models/MacBookPro";
import { Laptop } from "../models/Laptop";
import { PalmTree } from "../models/PalmTree";
import { config } from "../../config";
import { CouchSmall } from "../models/CouchSmall";
import { Lamp } from "../models/Lamp";
import { Monitor } from "../models/Monitor";
import { Balloon } from "../models/Balloon";
import { ParkBench } from "../models/ParkBench";
import { Mailbox } from "../models/Mailbox";
import { Pigeon } from "../models/Pigeon";
import { motion } from "framer-motion-3d";
import { MonitorScreen } from "./MonitorScreen";
import { useControls, folder } from "leva";
import { Sparkles } from "./Sparkles";
import { Mobile } from "../models/Mobile";

const SECTION_DISTANCE = 10;

// ─── Helper: build framer-motion transition from Leva values ─────────────────
function buildTransition(type, duration, ease, stiffness, damping) {
  if (type === "spring") {
    return { type: "spring", stiffness, damping };
  }
  if (type === "rotateIn") {
    return {
      default: { type: "tween", duration, ease },
      rotateY: { type: "spring", stiffness: stiffness * 0.6, damping },
    };
  }
  if (type === "rotateX") {
    return {
      default: { type: "tween", duration, ease },
      rotateX: { type: "spring", stiffness: stiffness * 0.6, damping },
    };
  }
  // tween / zoom / slideUp / slideDown / fade
  return { type: "tween", duration, ease };
}



export const Experience = () => {
  const [section, setSection] = useState(config.sections[0]);
  const sceneContainer = useRef();
  const projectsRotRef = useRef();
  const prevSectionRef = useRef(section);
  const scrollData = useScroll();

  // ─── Leva: Home → Skills Transition ────────────────────────────────────────
  const {
    hs_type, hs_duration, hs_ease, hs_stiffness, hs_damping,
  } = useControls("🎬 Home → Skills Transition", {
    hs_type: {
      label: "Type",
      value: "tween",
      options: ["tween", "spring", "rotateIn", "rotateX"],
    },
    hs_duration: { label: "Duration (s)", value: 0.8, min: 0.1, max: 3, step: 0.05 },
    hs_ease: {
      label: "Ease",
      value: "easeOut",
      options: ["easeOut", "easeIn", "easeInOut", "linear", "backOut", "bounceOut"],
    },
    hs_stiffness: { label: "Stiffness", value: 80, min: 10, max: 300, step: 1 },
    hs_damping: { label: "Damping", value: 14, min: 1, max: 60, step: 1 },
  });

  // ─── Leva: Skills → Projects Transition ────────────────────────────────────
  const {
    sp_type, sp_duration, sp_ease, sp_stiffness, sp_damping,
  } = useControls("🎬 Skills → Projects Transition", {
    sp_type: {
      label: "Type",
      value: "tween",
      options: ["tween", "spring", "rotateIn", "rotateX"],
    },
    sp_duration: { label: "Duration (s)", value: 0.8, min: 0.1, max: 3, step: 0.05 },
    sp_ease: {
      label: "Ease",
      value: "easeOut",
      options: ["easeOut", "easeIn", "easeInOut", "linear", "backOut", "bounceOut"],
    },
    sp_stiffness: { label: "Stiffness", value: 80, min: 10, max: 300, step: 1 },
    sp_damping: { label: "Damping", value: 14, min: 1, max: 60, step: 1 },
  });

  // ─── Leva: MacBook — Home ───────────────────────────────────────────────────
  const {
    mb_h_px, mb_h_py, mb_h_pz,
    mb_h_rx, mb_h_ry, mb_h_rz,
    mb_h_scale, mb_h_float,
  } = useControls("💻 MacBook — Home", {
    Position: folder({
      mb_h_px: { label: "X", value: -1, min: -10, max: 10, step: 0.01 },
      mb_h_py: { label: "Y", value: 0.5, min: -5, max: 5, step: 0.01 },
      mb_h_pz: { label: "Z", value: 0, min: -10, max: 10, step: 0.01 },
    }),
    Rotation: folder({
      mb_h_rx: { label: "X", value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
      mb_h_ry: { label: "Y", value: Math.PI / 4, min: -Math.PI, max: Math.PI, step: 0.01 },
      mb_h_rz: { label: "Z", value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    }),
    "Scale & Float": folder({
      mb_h_scale: { label: "Scale", value: 0.6, min: 0.1, max: 3, step: 0.01 },
      mb_h_float: { label: "Float Intensity", value: 1.5, min: 0, max: 5, step: 0.1 },
    }),
  });

  // ─── Leva: MacBook — Skills ─────────────────────────────────────────────────
  const {
    mb_s_px, mb_s_py, mb_s_pz,
    mb_s_rx, mb_s_ry, mb_s_rz,
    mb_s_scale, mb_s_float,
  } = useControls("💻 MacBook — Skills", {
    Position: folder({
      mb_s_px: { label: "X", value: -1, min: -10, max: 10, step: 0.01 },
      mb_s_py: { label: "Y", value: 0.5, min: -5, max: 5, step: 0.01 },
      mb_s_pz: { label: "Z", value: 2.5, min: -10, max: 10, step: 0.01 },
    }),
    Rotation: folder({
      mb_s_rx: { label: "X", value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
      mb_s_ry: { label: "Y", value: Math.PI / 4, min: -Math.PI, max: Math.PI, step: 0.01 },
      mb_s_rz: { label: "Z", value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    }),
    "Scale & Float": folder({
      mb_s_scale: { label: "Scale", value: 0.6, min: 0.1, max: 3, step: 0.01 },
      mb_s_float: { label: "Float Intensity", value: 1.2, min: 0, max: 5, step: 0.1 },
    }),
  });

  // ─── Leva: MacBook — Projects ───────────────────────────────────────────────
  const {
    mb_p_px, mb_p_py, mb_p_pz,
    mb_p_rx, mb_p_ry, mb_p_rz,
    mb_p_scale, mb_p_float,
  } = useControls("💻 MacBook — Projects", {
    Position: folder({
      mb_p_px: { label: "X", value: 1.5, min: -10, max: 10, step: 0.01 },
      mb_p_py: { label: "Y", value: 0.3, min: -5, max: 5, step: 0.01 },
      mb_p_pz: { label: "Z", value: 1.5, min: -10, max: 10, step: 0.01 },
    }),
    Rotation: folder({
      mb_p_rx: { label: "X", value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
      mb_p_ry: { label: "Y", value: -Math.PI / 5, min: -Math.PI, max: Math.PI, step: 0.01 },
      mb_p_rz: { label: "Z", value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    }),
    "Scale & Float": folder({
      mb_p_scale: { label: "Scale", value: 0.55, min: 0.1, max: 3, step: 0.01 },
      mb_p_float: { label: "Float Intensity", value: 1.0, min: 0, max: 5, step: 0.1 },
    }),
  });

  // ─── Active transition config (chosen by section pair) ──────────────────────
  const [macTransition, setMacTransition] = useState(
    buildTransition("tween", 0.8, "easeOut", 80, 14)
  );

  // ─── Compute MacBook target per section ─────────────────────────────────────
  const macbookSections = ["home", "skills", "projects"];
  const isVisible = macbookSections.includes(section);

  const targetAnim = isVisible
    ? {
      opacity: 1,
      x: section === "home" ? mb_h_px : section === "skills" ? mb_s_px : mb_p_px,
      y: section === "home" ? mb_h_py : section === "skills" ? mb_s_py : mb_p_py,
      z: section === "home" ? mb_h_pz : section === "skills" ? mb_s_pz : mb_p_pz,
      rotateX: section === "home" ? mb_h_rx : section === "skills" ? mb_s_rx : mb_p_rx,
      rotateY: section === "home" ? mb_h_ry : section === "skills" ? mb_s_ry : mb_p_ry,
      rotateZ: section === "home" ? mb_h_rz : section === "skills" ? mb_s_rz : mb_p_rz,
      scaleX: section === "home" ? mb_h_scale : section === "skills" ? mb_s_scale : mb_p_scale,
      scaleY: section === "home" ? mb_h_scale : section === "skills" ? mb_s_scale : mb_p_scale,
      scaleZ: section === "home" ? mb_h_scale : section === "skills" ? mb_s_scale : mb_p_scale,
    }
    : { opacity: 0, scaleX: 0, scaleY: 0, scaleZ: 0 };

  const floatIntensity =
    section === "home" ? mb_h_float :
      section === "skills" ? mb_s_float :
        section === "projects" ? mb_p_float : 0;

  // ─── useFrame: scroll logic + section detection ──────────────────────────────
  useFrame((_state, delta) => {
    if (sceneContainer.current) {
      sceneContainer.current.position.z =
        -scrollData.offset * SECTION_DISTANCE * (scrollData.pages - 1);
    }

    const idx = Math.min(
      Math.floor(scrollData.offset * config.sections.length),
      config.sections.length - 1
    );
    const currentSection = config.sections[idx];

    if (currentSection !== section) {
      // Pick transition config based on which pair is crossing
      const prev = prevSectionRef.current;
      const next = currentSection;

      const isHS =
        (prev === "home" && next === "skills") ||
        (prev === "skills" && next === "home");
      const isSP =
        (prev === "skills" && next === "projects") ||
        (prev === "projects" && next === "skills");

      if (isHS) {
        setMacTransition(buildTransition(hs_type, hs_duration, hs_ease, hs_stiffness, hs_damping));
      } else if (isSP) {
        setMacTransition(buildTransition(sp_type, sp_duration, sp_ease, sp_stiffness, sp_damping));
      } else {
        setMacTransition({ type: "tween", duration: 0.4, ease: "easeOut" });
      }

      prevSectionRef.current = currentSection;
      setSection(currentSection);
    }

    if (projectsRotRef.current && section === "projects") {
      projectsRotRef.current.rotation.y += delta * 0.4;
    }
  });

  useEffect(() => {
    const handleHashChange = () => {
      const sectionIndex = config.sections.indexOf(
        window.location.hash.replace("#", "")
      );
      if (sectionIndex >= 0) {
        scrollData.el.scrollTo(
          0,
          (sectionIndex / (config.sections.length - 1)) *
          (scrollData.el.scrollHeight - scrollData.el.clientHeight)
        );
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <Environment preset="sunset" />
      <Sparkles count={1000} />

      {/* ══════════════════════════════════════════════════════════════
          SINGLE MacBook — travels Home → Skills → Projects, then hides
      ══════════════════════════════════════════════════════════════ */}
      <motion.group animate={targetAnim} transition={macTransition}>
        <Float floatIntensity={floatIntensity} speed={1.8}>
          <MacBookPro />
        </Float>
      </motion.group>

      {/* ══════════════════════════════════════════════════════════════
          Scene container — scrolls on Z
      ══════════════════════════════════════════════════════════════ */}
      <motion.group ref={sceneContainer}>

        {/* HOME — only mounted when active */}
        {section === "home" && (
          <group position-z={0}>
            <Star position-z={0} position-y={1.3} scale={0.3} />

            {/* <Float floatIntensity={0.6}>
              <SectionTitle size={0.8} position-y={1.6} position-z={-3} position-x={2} bevelEnabled bevelThickness={0.3}>
                {config.home.title}
              </SectionTitle>
            </Float>

            <Center disableY disableZ>
              <SectionTitle size={1.1} position-y={1.5} position-z={-3} bevelEnabled bevelThickness={0.3}>
                {config.home.description}
              </SectionTitle>
            </Center> */}

            <Mobile
              position={[1.6, 0, -2.6]}
              rotation={[0, -.5, 0]}
              scale={0.7}
            />
          </group>
        )}

        {/* SKILLS — only mounted when active */}
        {section === "skills" && (
          <group position-z={SECTION_DISTANCE}>
            <group position-x={-2}>
              {/* <SectionTitle position-x={0.5}>Skills</SectionTitle> */}

              {/* <CouchSmall scale={0.4} position-z={0} position-x={-0.2} rotation-y={Math.PI / 3} /> */}

              {/* <Lamp position-z={0.6} position-x={-0.4} position-y={-0.8} rotation-y={-Math.PI} /> */}
            </group>

            <mesh position-y={2} position-z={-4} position-x={2}>
              <sphereGeometry args={[1, 64, 64]} />
              <MeshDistortMaterial color="yellow" transparent opacity={0.8} distort={1} speed={5} />
            </mesh>
          </group>
        )}

        {/* PROJECTS — only mounted when active */}
        {section === "projects" && (
          <group position-z={SECTION_DISTANCE * 2}>
            <group position-x={1}>
              <SectionTitle position-x={-0.3} position-z={0.9} rotation-y={-Math.PI / 6}>
                PROJECTS
              </SectionTitle>

              <group ref={projectsRotRef} position-x={0.5} position-z={0} scale={0.8}>
                <MonitorScreen position={[0, 0.11, -0.785]} rotation={[-0.18, 0, 0]} scale={1} />
                {/* <Monitor scale={0.02} position-y={1.4} rotation-y={-Math.PI / 2} position-z={-1} />
                <RoundedBox scale={2} position-y={0.5} position-z={-1}>
                  <meshStandardMaterial color="white" />
                </RoundedBox> */}
              </group>
            </group>
          </group>
        )}

        {/* CONTACT — only mounted when active */}
        {section === "contact" && (
          <group position-z={SECTION_DISTANCE * 3}>
            <SectionTitle position-x={-2} position-z={0.6}>Contact</SectionTitle>

            <ParkBench scale={0.5} position-x={-1.5} position-z={-2.5} rotation-y={-Math.PI / 4} />

            <group position-y={2.2} position-z={-0.5}>
              <Float floatIntensity={2} rotationIntensity={1.5}>
                <Balloon scale={1.5} position-x={-0.5} color="#71a2d9" />
              </Float>
              <Float floatIntensity={1.5} rotationIntensity={2} position-z={0.5}>
                <Balloon scale={1.3} color="#d97183" />
              </Float>
              <Float speed={2} rotationIntensity={2}>
                <Balloon scale={1.6} position-x={0.4} color="yellow" />
              </Float>
            </group>

            <Mailbox scale={0.25} rotation-y={1.25 * Math.PI} position-x={1} position-y={0.25} position-z={0.5} />

            <Float floatIntensity={1.5} speed={3}>
              <Pigeon position-x={2} position-y={1.5} position-z={-0.5} scale={0.3} />
            </Float>
          </group>
        )}

        {/* MISSION — index 4, no 3D content, placeholder keeps Z-scroll math correct */}
        <group position-z={SECTION_DISTANCE * 4} />

        {/* VISION — index 5, no 3D content, placeholder keeps Z-scroll math correct */}
        <group position-z={SECTION_DISTANCE * 5} />

        {/* SHOWCASE — index 6, only mounted when active */}
        {section === "showcase" && (
          <group position-z={SECTION_DISTANCE * 6}>
            <Float floatIntensity={1} speed={1.5}>
              <Lamp position={[-2.5, -0.8, 0]} rotation-y={Math.PI / 5} />
            </Float>

            <Float floatIntensity={1.5} speed={2}>
              <Laptop position={[0, 0.2, 0]} scale={0.5} rotation-y={-Math.PI / 8} />
            </Float>

            <Float floatIntensity={1} speed={1.8}>
              <Mailbox position={[2.5, 0.25, 0]} scale={0.28} rotation-y={-Math.PI * 0.75} />
            </Float>

            <SectionTitle position-y={2} position-z={-2} size={0.6} bevelEnabled bevelThickness={0.2}>
              Showcase
            </SectionTitle>
          </group>
        )}

      </motion.group>
    </>
  );
};
