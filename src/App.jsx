import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/scene/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { config } from "./config";
import { MotionConfig } from "framer-motion";
import { Interface } from "./components/sections/Interface";
import { Menu } from "./components/ui/Menu";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { SectionBackground } from "./components/scene/SectionBackground";
import { TextRevealDemo } from "./components/sections/TextRevealDemo";

function App() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <LoadingScreen />
      
      {showDemo ? (
        <TextRevealDemo onClose={() => setShowDemo(false)} />
      ) : (
        <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }}>
          <fog attach="fog" args={["#080d1a", 15, 100]} />

          <ScrollControls pages={config.sections.length} damping={0.1} maxSpeed={0.2}>
            <SectionBackground />

            <MotionConfig transition={{ duration: 0.6 }}>
              <group position-y={-1}>
                <Experience />
              </group>
            </MotionConfig>

            <Scroll html>
              <MotionConfig transition={{ duration: 1 }}>
                <Interface />
              </MotionConfig>
            </Scroll>
          </ScrollControls>
        </Canvas>
      )}

      <Menu showDemo={showDemo} onToggleDemo={() => setShowDemo(!showDemo)} />
    </>
  );
}

export default App;

