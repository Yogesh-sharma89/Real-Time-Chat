import { motion, useReducedMotion, type Transition } from "framer-motion";
import {
  ArrowLeft,
  Compass,
  Home,
  MessageCircle,
  MoveUpRight,
  Search,
} from "lucide-react";
import { useNavigate } from "react-router";

const floatAnimation = {
  y: [-8, 8, -8],
  rotate: [-2, 2, -2],
};

const floatTransition: Transition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
};

const NotFoundPage = () => {
  const navigate = useNavigate();

  const shouldReduceMotion = useReducedMotion();

  const handleGoBack = () => {
    // Go to previous page if browser history exists.
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/dashboard");
    }
  };

  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09111f] text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Purple glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-105
          w-105
          rounded-full
          bg-purple-600/20
          blur-[130px]
        "
      />

      {/* Cyan glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-125
          w-125
          rounded-full
          bg-cyan-500/20
          blur-[140px]
        "
      />

      {/* Background grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.09]
          bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)]
          bg-size-[32px_32px]
        "
      />

      {/* Animated radial glow */}
      {!shouldReduceMotion && (
        <motion.div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-125
            w-125
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-400/10
          "
          animate={{
            scale: [0.85, 1.15, 0.85],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          {/* Main glass card */}
          <motion.section
            {...motionProps}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/8
              bg-[#111c2e]/90
              shadow-[0_30px_100px_rgba(0,0,0,0.45)]
              backdrop-blur-2xl
            "
          >
            {/* Top subtle glow */}
            <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/70 to-transparent" />

            <div className="grid min-h-155 lg:grid-cols-2">
              {/* =================================================
                  LEFT CONTENT
              ================================================== */}

              <div className="flex items-center px-6 py-12 sm:px-10 lg:px-14">
                <div className="w-full max-w-xl">
                  {/* Small icon */}
                  <motion.div
                    initial={
                      shouldReduceMotion ? {} : { opacity: 0, scale: 0.7 }
                    }
                    animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="
                      mb-7
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-cyan-400/20
                      bg-cyan-400/10
                      text-cyan-300
                      shadow-[0_0_30px_rgba(34,211,238,0.12)]
                    "
                  >
                    <Compass size={27} />
                  </motion.div>

                  {/* Heading */}
                  <motion.p
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
                    animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="
                      mb-3
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-cyan-400
                    "
                  >
                    Page not found
                  </motion.p>

                  <motion.h1
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                    animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.55 }}
                    className="
                      text-6xl
                      font-black
                      leading-none
                      tracking-tight
                      sm:text-7xl
                      lg:text-8xl
                    "
                  >
                    4
                    <span
                      className="
                        bg-linear-to-r
                        from-cyan-300
                        via-cyan-400
                        to-blue-400
                        bg-clip-text
                        text-transparent
                      "
                    >
                      0
                    </span>
                    4
                  </motion.h1>

                  <motion.h2
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                    animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.55 }}
                    className="
                      mt-5
                      text-2xl
                      font-bold
                      text-slate-100
                      sm:text-3xl
                    "
                  >
                    Looks like you got lost.
                  </motion.h2>

                  <motion.p
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                    animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.55 }}
                    className="
                      mt-4
                      max-w-md
                      text-base
                      leading-7
                      text-slate-400
                      sm:text-lg
                    "
                  >
                    The page you're looking for doesn't exist, was moved, or may
                    have taken a little vacation.
                  </motion.p>

                  {/* =================================================
                      BUTTONS
                  ================================================== */}

                  <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                    animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.55 }}
                    className="
                      mt-8
                      flex
                      flex-col
                      gap-3
                      sm:flex-row
                    "
                  >
                    {/* Go Back */}
                    <motion.button
                      type="button"
                      onClick={handleGoBack}
                      whileHover={
                        shouldReduceMotion ? {} : { y: -3, scale: 1.02 }
                      }
                      whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                      className="
                        group
                        cursor-pointer
                        relative
                        inline-flex
                        h-12
                        items-center
                        justify-center
                        gap-2
                        overflow-hidden
                        rounded-xl
                        border
                        border-white/10
                        bg-white/4
                        px-5
                        text-sm
                        font-semibold
                        text-slate-200
                        transition
                        duration-300
                        hover:border-cyan-400/30
                        hover:bg-cyan-400/8
                        hover:text-cyan-300
                        focus:outline-none
                        focus:ring-2
                        focus:ring-cyan-400/40
                      "
                    >
                      <ArrowLeft
                        size={18}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                      />

                      <span>Go back</span>

                      {/* hover shine */}
                      <span
                        className="
                          absolute
                          inset-y-0
                          -left-full
                          w-1/2
                          skew-x-12
                          bg-linear-to-r
                          from-transparent
                          via-white/10
                          to-transparent
                          transition-all
                          duration-700
                          group-hover:left-[140%]
                        "
                      />
                    </motion.button>

                    {/* Dashboard */}
                    <motion.button
                      type="button"
                      onClick={() => navigate("/dashboard")}
                      whileHover={
                        shouldReduceMotion
                          ? {}
                          : {
                              y: -3,
                              scale: 1.02,
                              boxShadow: "0 12px 35px rgba(34,211,238,0.20)",
                            }
                      }
                      whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                      className="
                        group
                        cursor-pointer
                        relative
                        inline-flex
                        h-12
                        items-center
                        justify-center
                        gap-2
                        overflow-hidden
                        rounded-xl
                        bg-linear-to-r
                        from-cyan-500
                        to-blue-500
                        px-5
                        text-sm
                        font-bold
                        text-slate-950
                        shadow-[0_8px_30px_rgba(34,211,238,0.12)]
                        transition-all
                        duration-300
                        hover:from-cyan-400
                        hover:to-blue-400
                        focus:outline-none
                        focus:ring-2
                        focus:ring-cyan-400/50
                      "
                    >
                      <Home size={18} />

                      <span>Go to dashboard</span>

                      <MoveUpRight
                        size={16}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />

                      {/* shine */}
                      <span
                        className="
                          absolute
                          inset-y-0
                          -left-full
                          w-1/2
                          skew-x-12
                          bg-white/25
                          transition-all
                          duration-700
                          group-hover:left-[140%]
                        "
                      />
                    </motion.button>
                  </motion.div>

                  {/* Bottom helper */}
                  <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0 }}
                    animate={shouldReduceMotion ? {} : { opacity: 1 }}
                    transition={{ delay: 0.75, duration: 0.6 }}
                    className="
                      mt-8
                      flex
                      items-center
                      gap-2
                      text-xs
                      text-slate-500
                    "
                  >
                    <Search size={14} />
                    <span>Try checking the URL or head back to safety.</span>
                  </motion.div>
                </div>
              </div>

              {/* =================================================
                  RIGHT ILLUSTRATION
              ================================================== */}

              <div
                className="
                  relative
                  flex
                  min-h-90
                  items-center
                  justify-center
                  overflow-hidden
                  border-t
                  border-white/6
                  bg-[#0d1728]/50
                  px-6
                  py-12
                  lg:min-h-0
                  lg:border-l
                  lg:border-t-0
                "
              >
                {/* Orb */}
                {!shouldReduceMotion && (
                  <>
                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                        opacity: [0.25, 0.4, 0.25],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        absolute
                        h-72
                        w-72
                        rounded-full
                        bg-cyan-500/10
                        blur-3xl
                      "
                    />

                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                        absolute
                        h-80
                        w-80
                        rounded-full
                        border
                        border-dashed
                        border-cyan-400/10
                      "
                    />
                  </>
                )}

                <div className="relative z-10 w-full max-w-md">
                  {/* Floating chat bubble */}
                  {!shouldReduceMotion && (
                    <motion.div
                      animate={floatAnimation}
                      transition={floatTransition}
                      className="
                        absolute
                        -left-2
                        top-4
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-cyan-300/20
                        bg-cyan-400/10
                        text-cyan-300
                        shadow-[0_10px_35px_rgba(34,211,238,0.12)]
                      "
                    >
                      <MessageCircle size={22} />
                    </motion.div>
                  )}

                  {/* Main illustration */}
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: [0, -10, 0],
                          }
                    }
                    transition={
                      shouldReduceMotion
                        ? {}
                        : {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                    }
                    className="relative mx-auto flex max-w-sm flex-col items-center"
                  >
                    {/* Browser/window */}
                    <div
                      className="
                        w-full
                        rounded-3xl
                        border
                        border-white/10
                        bg-[#101d30]
                        p-3
                        shadow-2xl
                        shadow-cyan-950/40
                      "
                    >
                      {/* Browser top */}
                      <div className="flex items-center gap-1.5 px-2 pb-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />

                        <div className="ml-3 h-6 flex-1 rounded-lg bg-white/4" />
                      </div>

                      {/* Browser body */}
                      <div
                        className="
                          flex
                          min-h-67.5
                          flex-col
                          items-center
                          justify-center
                          rounded-2xl
                          bg-[#0a1423]
                          px-6
                          text-center
                        "
                      >
                        <div
                          className="
                            text-7xl
                            font-black
                            tracking-tighter
                            text-transparent
                            bg-linear-to-b
                            from-cyan-300
                            to-blue-500
                            bg-clip-text
                            sm:text-8xl
                          "
                        >
                          404
                        </div>

                        <div className="mt-3 h-2 w-32 rounded-full bg-white/6" />
                        <div className="mt-2 h-2 w-24 rounded-full bg-white/4" />

                        <div className="mt-6 flex gap-2">
                          <span className="h-2 w-2 rounded-full bg-cyan-400" />
                          <span className="h-2 w-2 rounded-full bg-cyan-400/50" />
                          <span className="h-2 w-2 rounded-full bg-cyan-400/20" />
                        </div>
                      </div>
                    </div>

                    {/* Floating badge */}
                    {!shouldReduceMotion && (
                      <motion.div
                        animate={{
                          rotate: [-4, 4, -4],
                          y: [0, -6, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="
                          absolute
                          -bottom-6
                          -right-5
                          rounded-2xl
                          border
                          border-cyan-400/20
                          bg-[#122238]
                          px-4
                          py-3
                          shadow-2xl
                        "
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                            <Compass size={18} />
                          </div>

                          <div>
                            <p className="text-xs text-slate-500">Status</p>
                            <p className="text-sm font-semibold text-slate-200">
                              Lost in space
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Right-side text */}
                  <motion.div
                    {...motionProps}
                    transition={{
                      delay: 0.65,
                      duration: 0.6,
                    }}
                    className="mt-12 text-center"
                  >
                    <h3 className="text-xl font-bold text-slate-100">
                      Nothing to see here.
                    </h3>

                    <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                      Don't worry — your account and data are safe. Let's get
                      you back on track.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={shouldReduceMotion ? {} : { opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="
              mt-6
              text-center
              text-xs
              text-slate-600
            "
          >
            © {new Date().getFullYear()} Your Application
          </motion.p>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
