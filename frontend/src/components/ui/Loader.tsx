import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";
import { MessageCircle } from "lucide-react";


// ─────────────────────────────────────────────
// 3D Floating Core
// ─────────────────────────────────────────────

function FloatingCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x =
      state.clock.elapsedTime * 0.25;

    meshRef.current.rotation.y =
      state.clock.elapsedTime * 0.4;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1.2}
    >
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.25, 1]} />

        <meshPhysicalMaterial
          color="#10243A"
          emissive="#06B6D4"
          emissiveIntensity={0.35}
          metalness={0.75}
          roughness={0.2}
          transparent
          opacity={0.92}
          clearcoat={1}
          clearcoatRoughness={0.15}
        />
      </mesh>

      {/* inner glow */}
      <pointLight
        color="#06B6D4"
        intensity={8}
        distance={5}
      />
    </Float>
  );
}


// ─────────────────────────────────────────────
// Orbit Ring
// ─────────────────────────────────────────────

function OrbitRing({
  radius,
  color,
  speed,
  rotation,
}: {
  radius: number;
  color: string;
  speed: number;
  rotation: [number, number, number];
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.z += delta * speed;
  });

  return (
    <group
      ref={groupRef}
      rotation={rotation}
    >
      <mesh>
        <torusGeometry
          args={[radius, 0.012, 16, 128]}
        />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.75}
        />
      </mesh>
    </group>
  );
}


// ─────────────────────────────────────────────
// Orbit Particles
// ─────────────────────────────────────────────

function OrbitParticles({
  radius,
  color,
  speed,
}: {
  radius: number;
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    const t =
      state.clock.elapsedTime * speed;

    ref.current.position.x =
      Math.cos(t) * radius;

    ref.current.position.z =
      Math.sin(t) * radius;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.09, 16, 16]} />

      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={4}
      />
    </mesh>
  );
}


// ─────────────────────────────────────────────
// 3D Loader Scene
// ─────────────────────────────────────────────

function LoaderScene() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <pointLight
        position={[0, 2, 3]}
        intensity={10}
        color="#06B6D4"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={5}
        color="#A855F7"
      />

      <FloatingCore />

      <OrbitRing
        radius={2}
        color="#06B6D4"
        speed={0.6}
        rotation={[Math.PI / 2.4, 0, 0]}
      />

      <OrbitRing
        radius={2.4}
        color="#A855F7"
        speed={-0.4}
        rotation={[Math.PI / 1.8, 0.4, 0]}
      />

      <OrbitRing
        radius={2.8}
        color="#22D3EE"
        speed={0.25}
        rotation={[Math.PI / 2, 0.7, 0]}
      />

      <OrbitParticles
        radius={2}
        color="#22D3EE"
        speed={1}
      />

      <OrbitParticles
        radius={2.4}
        color="#D946EF"
        speed={-0.7}
      />

      <Sparkles
        count={80}
        scale={7}
        size={1.5}
        speed={0.4}
        color="#67E8F9"
      />
    </>
  );
}


// ─────────────────────────────────────────────
// Main Global Loader
// ─────────────────────────────────────────────

interface GlobalLoaderProps {
  message?: string;
}

export function GlobalLoader({
  message = "Please wait while we prepare everything for you...",
}: GlobalLoaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="
        fixed
        inset-0
        z-9999
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#09111F]
      "
    >

      {/* Background grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.16]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(34,211,238,0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(34,211,238,0.12) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Purple glow */}
      <div
        className="
          absolute
          -left-40
          -top-40
          h-125
          w-125
          rounded-full
          bg-purple-600/10
          blur-[140px]
        "
      />

      {/* Cyan glow */}
      <div
        className="
          absolute
          -bottom-40
          -right-40
          h-125
          w-125
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      />


      {/* Main content */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
          gap-10
          px-6
          lg:flex-row
          lg:justify-between
        "
      >

        {/* ─────────────────────── */}
        {/* Left Content */}
        {/* ─────────────────────── */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            w-full
            max-w-md
            text-center
            lg:text-left
          "
        >

          {/* Logo */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              mb-6
              inline-flex
              items-center
              justify-center
              rounded-2xl
              border
              border-cyan-400/20
              bg-[#122033]/70
              p-4
              shadow-[0_0_30px_rgba(6,182,212,0.08)]
            "
          >
            <MessageCircle
              className="
                size-10
                text-cyan-400
              "
              strokeWidth={1.7}
            />
          </motion.div>


          {/* Heading */}

          <h1
            className="
              text-4xl
              font-bold
              tracking-tight
              text-white
              sm:text-5xl
            "
          >
            Getting things{" "}
            <span className="text-cyan-400">
              ready
            </span>
          </h1>


          {/* Message */}

          <p
            className="
              mt-5
              max-w-md
              text-base
              leading-7
              text-[#8FA3BD]
            "
          >
            {message}
          </p>


          {/* Animated dots */}

          <div className="mt-6 flex justify-center gap-2 lg:justify-start">
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                animate={{
                  opacity: [0.25, 1, 0.25],
                  scale: [0.8, 1.15, 0.8],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: dot * 0.2,
                }}
                className="
                  size-2
                  rounded-full
                  bg-cyan-400
                "
              />
            ))}
          </div>


          {/* Status */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
            }}
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#263750]
              bg-[#122033]/60
              px-4
              py-2.5
              backdrop-blur-xl
            "
          >
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="
                size-2
                rounded-full
                bg-cyan-400
                shadow-[0_0_10px_#06B6D4]
              "
            />

            <span
              className="
                text-sm
                text-[#8FA3BD]
              "
            >
              Almost there...
            </span>
          </motion.div>

        </motion.div>


        {/* ─────────────────────── */}
        {/* 3D Scene */}
        {/* ─────────────────────── */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            relative
            h-90
            w-full
            max-w-130
            sm:h-112.5
          "
        >

          {/* Outer glow */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              size-56
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-500/10
              blur-[80px]
            "
          />

          <Canvas
            camera={{
              position: [0, 0, 6],
              fov: 45,
            }}
            dpr={[1, 2]}
            gl={{
              antialias: true,
              alpha: true,
            }}
          >
            <LoaderScene />
          </Canvas>

        </motion.div>

      </div>


      {/* Bottom progress */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          w-[calc(100%-48px)]
          max-w-md
          -translate-x-1/2
        "
      >

        <div
          className="
            h-1.5
            overflow-hidden
            rounded-full
            bg-[#1B2A3E]
          "
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{
              width: [
                "0%",
                "35%",
                "58%",
                "76%",
                "92%",
                "100%",
              ],
            }}
            transition={{
              duration: 3.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="
              h-full
              rounded-full
              bg-cyan-400
              shadow-[0_0_15px_rgba(6,182,212,0.8)]
            "
          />
        </div>

        <p
          className="
            mt-3
            text-center
            text-xs
            text-[#71849D]
          "
        >
          Preparing your experience
        </p>

      </div>

    </motion.div>
  );
}