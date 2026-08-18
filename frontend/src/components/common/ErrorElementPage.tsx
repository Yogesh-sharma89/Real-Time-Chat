import {
  AlertTriangle,
  ArrowLeft,
  Home,
  RefreshCw,
  WifiOff,
} from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles } from "@react-three/drei";
import { motion } from "framer-motion";
import { useNavigate, useRouteError, isRouteErrorResponse } from "react-router";
import { useRef } from "react";
import * as THREE from "three";

/* -------------------------------------------------------------------------- */
/*                              3D ERROR OBJECT                               */
/* -------------------------------------------------------------------------- */

function ErrorCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * 0.35;
    meshRef.current.rotation.y += delta * 0.55;

    meshRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
  });

  return (
    <group>
      {/* Main broken core */}
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.7}
      >
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.15, 1]} />

          <meshStandardMaterial
            color="#142238"
            emissive="#06b6d4"
            emissiveIntensity={1.2}
            metalness={0.8}
            roughness={0.2}
            wireframe
          />
        </mesh>

        {/* Inner core */}
        <mesh scale={0.55}>
          <icosahedronGeometry args={[1, 1]} />

          <meshStandardMaterial
            color="#0f172a"
            emissive="#22d3ee"
            emissiveIntensity={2}
            metalness={0.5}
            roughness={0.15}
          />
        </mesh>
      </Float>

      {/* Orbiting rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.55, 0.025, 16, 100]} />

        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh rotation={[0.7, 0.4, 0]}>
        <torusGeometry args={[1.85, 0.015, 16, 100]} />

        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
}

/* -------------------------------------------------------------------------- */
/*                              3D BACKGROUND                                 */
/* -------------------------------------------------------------------------- */

function ErrorScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.35} />

        <pointLight
          position={[3, 3, 3]}
          intensity={15}
          color="#06b6d4"
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={8}
          color="#8b5cf6"
        />

        <ErrorCore />

        <Sparkles
          count={90}
          scale={[6, 6, 6]}
          size={1.5}
          speed={0.4}
          opacity={0.5}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}



export default function ErrorElement() {

  const navigate = useNavigate();

  const error = useRouteError();

  let status = "500";
  let title = "Something went wrong";
  let description =
    "We hit an unexpected problem while loading this page.";

  if (isRouteErrorResponse(error)) {

    status = String(error.status);

    if (error.status === 404) {
      title = "Page not found";
      description =
        "The page you're looking for doesn't exist or may have been moved.";
    }

    if (error.status === 401) {
      title = "You're not authorized";
      description =
        "You don't have permission to access this resource.";
    }

    if (error.status === 403) {
      title = "Access denied";
      description =
        "You don't have permission to access this page.";
    }

    if (error.status === 500) {
      title = "Server error";
      description =
        "Something went wrong on our side. Please try again.";
    }
  }

  const handleRetry = () => {
    navigate(0);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080d18] text-white">
      {/* ------------------------------------------------------------------ */}
      {/* Background                                                          */}
      {/* ------------------------------------------------------------------ */}

      <div className="absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Purple glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-32
            -top-32
            size-125
            rounded-full
            bg-purple-600
            blur-[150px]
          "
        />

        {/* Cyan glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-40
            -right-32
            h-137.5
            w-137.5
            rounded-full
            bg-cyan-500
            blur-[170px]
          "
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Main Card                                                           */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <motion.section
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            w-full
            max-w-5xl
            overflow-hidden
            rounded-3xl
            border
            border-slate-700/60
            bg-[#111a2b]/85
            shadow-[0_30px_100px_rgba(0,0,0,0.45)]
            backdrop-blur-2xl
          "
        >
          {/* Top cyan line */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-linear-to-r
              from-transparent
              via-cyan-400
              to-transparent
              opacity-70
            "
          />

          <div className="grid min-h-155 md:grid-cols-2">
            {/* ------------------------------------------------------------ */}
            {/* LEFT                                                            */}
            {/* ------------------------------------------------------------ */}

            <div className="relative flex flex-col justify-center px-8 py-12 sm:px-12 md:px-14">
              {/* Brand */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="mb-10 flex items-center gap-3"
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-cyan-400/20
                    bg-cyan-400/10
                    text-cyan-400
                  "
                >
                  <WifiOff size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Chit-Chat
                  </p>

                  <p className="text-xs text-slate-500">
                    Something unexpected happened
                  </p>
                </div>
              </motion.div>

              {/* Error code */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 150,
                }}
                className="
                  mb-5
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-red-400/20
                  bg-red-400/10
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-red-300
                "
              >
                <AlertTriangle size={14} />

                ERROR {status}
              </motion.div>

              {/* Heading */}

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="
                  max-w-lg
                  text-4xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-5xl
                "
              >
                {title}
              </motion.h1>

              {/* Description */}

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="
                  mt-5
                  max-w-md
                  text-base
                  leading-7
                  text-slate-400
                "
              >
                {description}
              </motion.p>

              {/* Actions */}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <button
                  onClick={handleRetry}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-cyan-500
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-slate-950
                    shadow-lg
                    shadow-cyan-500/20
                    transition
                    hover:bg-cyan-400
                    hover:shadow-cyan-400/30
                    active:scale-[0.98]
                  "
                >
                  <RefreshCw
                    size={17}
                    className="
                      transition-transform
                      duration-500
                      group-hover:rotate-180
                    "
                  />

                  Try Again
                </button>

                <button
                  onClick={handleHome}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900/60
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-slate-300
                    transition
                    hover:border-cyan-400/30
                    hover:bg-slate-800
                    hover:text-white
                  "
                >
                  <Home size={17} />

                  Back Home
                </button>
              </motion.div>

              {/* Dev error */}

              {import.meta.env.DEV && (
                <motion.details
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="
                    mt-8
                    max-w-lg
                    rounded-xl
                    border
                    border-slate-800
                    bg-black/20
                    p-4
                  "
                >
                  <summary
                    className="
                      cursor-pointer
                      text-xs
                      font-medium
                      text-slate-500
                      hover:text-slate-300
                    "
                  >
                    Developer error details
                  </summary>

                  <pre
                    className="
                      mt-3
                      max-h-40
                      overflow-auto
                      whitespace-pre-wrap
                      text-xs
                      leading-5
                      text-red-300/80
                    "
                  >
                    {error instanceof Error
                      ? error.stack || error.message
                      : JSON.stringify(error, null, 2)}
                  </pre>
                </motion.details>
              )}
            </div>

            {/* ------------------------------------------------------------ */}
            {/* RIGHT                                                           */}
            {/* ------------------------------------------------------------ */}

            <div
              className="
                relative
                min-h-100
                overflow-hidden
                border-t
                border-slate-700/50
                bg-[#0d1626]/60
                md:border-l
                md:border-t-0
              "
            >
              {/* 3D scene */}

              <ErrorScene />

              {/* Overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-[#0d1626]
                  via-transparent
                  to-transparent
                  opacity-60
                "
              />

              {/* Floating status */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.5,
                }}
                className="
                  absolute
                  bottom-8
                  left-1/2
                  w-[calc(100%-48px)]
                  max-w-sm
                  -translate-x-1/2
                  rounded-2xl
                  border
                  border-slate-700/60
                  bg-[#111a2b]/80
                  p-4
                  shadow-2xl
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-red-400
                      shadow-[0_0_12px_rgba(248,113,113,0.8)]
                    "
                  />

                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      Connection interrupted
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Your conversation is safe. Try loading the page again.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}