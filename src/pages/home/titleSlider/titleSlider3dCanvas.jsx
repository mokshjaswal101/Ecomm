import { useRef } from "react";
import { Box } from "@mantine/core";
import { Flex } from "@mantine/core";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
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
  const isHovered = useRef();
  let scale;

  if (props?.randomMovement) {
    const frequency = Math.random() * 2 + 0.5;
    const phaseOffset = Math.random() * 2 * Math.PI;

    useFrame(({ clock }) => {
      // Calculate the rotation angle based on time and the frequency and phase offset

      // if (isHovered.current) {
      //   // const angle = clock.getElapsedTime() * Math.PI * 2 * 2;
      //   // ref.current.rotation.y += angle;
      //   scale = props.scale + 0.5;
      // } else scale = props.scale;

      const angle =
        Math.sin(clock.getElapsedTime() * frequency + phaseOffset) *
        props.amplitude;

      // Apply the rotation to the mesh
      ref.current.rotation.x = angle;
      ref.current.rotation.y = angle;
    });
  }

  const primitiveProps = {
    rotation: props.rotation,
    position: props.position,
    scale: props.scale,
    color: props.color,
  };
  return (
    <mesh
      ref={ref}
      castShadow
      {...primitiveProps}
      onPointerOver={() => (isHovered.current = true)}
      onPointerOut={() => (isHovered.current = false)}
    >
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
          position={[-6, 1.2, -3]}
          rotation={[0, -Math.PI, 0]}
          scale={1.4}
          randomMovement={true}
          amplitude={0.3}
        />
        <ObjectBuilder
          url={"./models/backpack/scene.gltf"}
          position={[6, 1, -3]}
          rotation={[0, -Math.PI, 0]}
          scale={0.09}
          randomMovement={true}
          amplitude={0.1}
        />
        <ObjectBuilder
          url={"./models/thermos/scene.gltf"}
          position={[5, -3, -1.5]}
          rotation={[0, -Math.PI, 0]}
          scale={0.0025}
          randomMovement={true}
          amplitude={0.2}
        />
        <ObjectBuilder
          url={"./models/suitcase/scene.gltf"}
          position={[-4, -3, -1.5]}
          rotation={[0, -Math.PI, 0]}
          scale={1.8}
          randomMovement={true}
          amplitude={0.15}
        />
        <ObjectBuilder
          url={"./Headings/Ecomm.glb"}
          position={[-3.25, -0.5, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2}
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
