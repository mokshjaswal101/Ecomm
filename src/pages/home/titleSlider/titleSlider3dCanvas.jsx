import { Box } from "@mantine/core";
import { Flex } from "@mantine/core";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const TitleSlider3dCanvas = () => {
  const temp = useGLTF("./models/phone/scene.gltf");

  return (
    <Flex pos={"absolute"} w={"100%"} h={"100%"}>
      <Canvas
        camera={{ position: [0, 0, 20], fov: 50 }}
        frameloop="demand"
        shadows
        gl={{ preserveDrawingBuffer: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <hemisphereLight intensity={0.15} />
        <spotLight
          position={[-20, 15, 10]}
          angle={0.15}
          penumbra={1}
          castShadow
          shadow-mapSize={1000}
        />
        <pointLight position={[-10, -10, -10]} />

        <mesh position={[-6, 3, 0]} rotation={[0, 1, 0]} scale={1.5}>
          <primitive object={temp.scene} />
        </mesh>
      </Canvas>
    </Flex>
  );
};

export default TitleSlider3dCanvas;
