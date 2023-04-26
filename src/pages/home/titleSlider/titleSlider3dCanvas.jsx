import { useRef } from "react";
import { Box } from "@mantine/core";
import { Flex } from "@mantine/core";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  SoftShadows,
  useGLTF,
  Environment,
} from "@react-three/drei";

var ObjectBuilder = (props) => {
  const object = useGLTF(props.url);
  object.scene.traverse((mesh) => {
    mesh.castShadow = true;
  });

  const ref = useRef();

  if (props?.randomMovement) {
    useFrame(
      (state, delta) => (ref.current.rotation.x += (delta * Math.random()) / 2)
    );
    useFrame(
      (state, delta) => (ref.current.rotation.y += (delta * Math.random()) / 2)
    );
  }

  const primitiveProps = {
    rotation: props.rotation,
    position: props.position,
    scale: props.scale,
    color: props.color,
  };
  return (
    <mesh ref={ref} castShadow {...primitiveProps}>
      <primitive object={object.scene} />
    </mesh>
  );
};

const TitleSlider3dCanvas = () => {
  return (
    <Flex pos={"absolute"} w={"100%"} h={"100%"}>
      <Canvas
        camera={{ position: [0, 1, 22], fov: 30 }}
        shadows
        gl={{ preserveDrawingBuffer: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <fog />
        <Environment preset="city" />
        <ambientLight intensity={0.1} />
        {/* <SoftShadows /> */}
        {/* <OrbitControls /> */}
        <pointLight position={[0, 5, 25]} intensity={0.1} />
        <directionalLight
          castShadow
          position={[0, 10, -1]}
          intensity={1.5}
          shadow-mapSize={1024}
        >
          <orthographicCamera
            attach="shadow-camera"
            args={[-10, 10, -10, 10, 0.1, 50]}
          />
        </directionalLight>
        {/* Objects */}
        <ObjectBuilder
          url={"./models/phone/scene.gltf"}
          position={[-3.7, 1.2, 0]}
          rotation={[0, -Math.PI, 0]}
          scale={1.1}
          randomMovement={true}
        />
        <ObjectBuilder
          url={"./models/backpack/scene.gltf"}
          position={[5, 1, 0]}
          rotation={[0, -Math.PI, 0]}
          scale={0.06}
          randomMovement={true}
        />
        <ObjectBuilder
          url={"./models/thermos/scene.gltf"}
          position={[5, -3, 0]}
          rotation={[0, -Math.PI, 0]}
          scale={0.0015}
          randomMovement={true}
        />
        <ObjectBuilder
          url={"./models/suitcase/scene.gltf"}
          position={[-4, -3, 0]}
          rotation={[0, -Math.PI, 0]}
          scale={1.4}
          randomMovement={true}
        />
        <ObjectBuilder
          url={"./Headings/Ecomm.glb"}
          position={[-2.5, -0.5, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.5}
          randomMovement={false}
        />
        <mesh
          position={[0, -5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <planeBufferGeometry attach={"geometry"} args={[50, 50, 50]} />
          {/* <meshLambertMaterial attach={"material"} color={""} /> */}
          <shadowMaterial opacity={0.2} />
        </mesh>
        <axesHelper />
      </Canvas>
    </Flex>
  );
};

export default TitleSlider3dCanvas;
