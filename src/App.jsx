import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/scene/Experience";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { config } from "./config";
import { MotionConfig } from "framer-motion";
import {Interface} from "./components/sections/Interface";
import { Leva } from "leva";
import { Menu } from "./components/ui/Menu";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { SectionBackground } from "./components/scene/SectionBackground";

function App() {
  return (
    <>
      <LoadingScreen />
      {/* <Leva hidden/> */}
      <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }}>
        <color attach="background" args={[config.theme.defaultBackground]} />
        <fog attach="fog" args={[config.theme.defaultBackground, 10, 50]} />

        <ScrollControls pages={config.sections.length} damping={0.1} maxSpeed={0.2}>
          <SectionBackground />

          <MotionConfig transition={{duration:0.6}}>

            <group position-y={-1}>
              <Experience />
            </group>
          </MotionConfig >

          <Scroll html>
            <MotionConfig transition={{
              duration:1
            }}>

            <Interface />
            </MotionConfig>
          </Scroll>
        </ScrollControls>
      {/* <OrbitControls/> */}
      </Canvas>
      <Menu/>
    </>
  );
}

export default App;
