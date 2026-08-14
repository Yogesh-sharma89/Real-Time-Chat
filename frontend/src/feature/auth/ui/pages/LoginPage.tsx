import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  Zap,
  CircleCheck,
} from "lucide-react";
import { useNavigate } from "react-router";

const LoginPage = () => {

  const navigate = useNavigate();
  
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Purple glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            -top-40
            h-125
            w-125
            rounded-full
            bg-purple-600/20
            blur-[140px]
          "
        />

        {/* Cyan glow */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-40
            -right-40
            h-125
            w-125
            rounded-full
            bg-cyan-500/15
            blur-[140px]
          "
        />

        {/* Floating particles */}
        {Array.from({ length: 18 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -25, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 3 + (index % 4),
              repeat: Infinity,
              delay: index * 0.15,
            }}
            className="
              absolute
              size-1
              rounded-full
              bg-cyan-300
            "
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${(index * 29) % 100}%`,
            }}
          />
        ))}
      </div>


      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            w-full
            max-w-255
            overflow-hidden
            rounded-2xl
            border
            border-cyan-400/20
            bg-[#172235]/90
            shadow-[0_25px_80px_rgba(0,0,0,0.45)]
            backdrop-blur-2xl
          "
        >

          <div className="grid min-h-162.5 lg:grid-cols-2">

            {/* ================================================= */}
            {/* LEFT — LOGIN FORM */}
            {/* ================================================= */}

            <section
              className="
                flex
                items-center
                justify-center
                px-6
                py-12
                sm:px-12
                lg:px-14
              "
            >

              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                }}
                className="w-full max-w-100"
              >

                {/* Logo */}

                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 12,
                    delay: 0.3,
                  }}
                  className="mb-5 flex justify-center"
                >
                  <div
                    className="
                      flex
                      size-14
                      items-center
                      justify-center
                      rounded-full
                      text-cyan-400
                    "
                  >
                    <MessageCircle
                      size={48}
                      strokeWidth={1.7}
                    />
                  </div>
                </motion.div>


                {/* Heading */}

                <div className="mb-8 text-center">

                  <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="
                      text-2xl
                      font-bold
                      tracking-tight
                      text-[#F4F8FF]
                      sm:text-3xl
                    "
                  >
                    Welcome Back
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="
                      mt-2
                      text-sm
                      text-[#8FA3BD]
                    "
                  >
                    Login to access your account
                  </motion.p>

                </div>


                {/* ================= FORM ================= */}

                <form className="space-y-5">

                  {/* Email */}

                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 }}
                  >
                    <label
                      htmlFor="email"
                      className="
                        mb-2
                        block
                        text-sm
                        font-medium
                        text-[#D6E0ED]
                      "
                    >
                      Email
                    </label>

                    <label
                      className="
                        flex
                        h-11
                        items-center
                        gap-3
                        rounded-lg
                        border
                        border-[#2A3A52]
                        bg-[#142033]/70
                        px-3
                        transition-all
                        duration-200
                        focus-within:border-cyan-400/50
                        focus-within:shadow-[0_0_20px_rgba(6,182,212,0.08)]
                      "
                    >
                      <Mail
                        size={18}
                        className="text-[#71849D]"
                      />

                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="
                          w-full
                          bg-transparent
                          text-sm
                          text-[#F4F8FF]
                          outline-none
                          placeholder:text-[#64758D]
                        "
                      />
                    </label>
                  </motion.div>


                  {/* Password */}

                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.65 }}
                  >
                    <label
                      htmlFor="password"
                      className="
                        mb-2
                        block
                        text-sm
                        font-medium
                        text-[#D6E0ED]
                      "
                    >
                      Password
                    </label>

                    <label
                      className="
                        flex
                        h-11
                        items-center
                        gap-3
                        rounded-lg
                        border
                        border-[#2A3A52]
                        bg-[#142033]/70
                        px-3
                        transition-all
                        duration-200
                        focus-within:border-cyan-400/50
                        focus-within:shadow-[0_0_20px_rgba(6,182,212,0.08)]
                      "
                    >
                      <Lock
                        size={18}
                        className="text-[#71849D]"
                      />

                      <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="
                          w-full
                          bg-transparent
                          text-sm
                          text-[#F4F8FF]
                          outline-none
                          placeholder:text-[#64758D]
                        "
                      />
                    </label>
                  </motion.div>


                  {/* Forgot password */}

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.75 }}
                    className="flex justify-end"
                  >
                    <button
                      type="button"
                      className="
                        text-xs
                        font-medium
                        text-cyan-400
                        transition-colors
                        hover:text-cyan-300
                      "
                    >
                      Forgot password?
                    </button>
                  </motion.div>


                  {/* Submit */}

                  <motion.button
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{
                      scale: 1.015,
                      boxShadow:
                        "0 0 28px rgba(6,182,212,0.25)",
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    type="submit"
                    className="
                      btn
                      h-11
                      min-h-11
                      w-full
                      border-0
                      bg-cyan-500
                      text-sm
                      font-semibold
                      text-white
                      shadow-none
                      hover:bg-cyan-400
                    "
                  >
                    Sign in
                  </motion.button>

                </form>


                {/* Signup */}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="mt-6 text-center"
                >
                  <button
                    type="button"
                    className="
                      rounded-md
                      bg-[#13283B]
                      px-4
                      py-2
                      text-xs
                      font-medium
                      text-cyan-400
                      transition-all
                      duration-200
                      hover:bg-[#18344B]
                      hover:text-cyan-300
                    "
                  >
                    Don't have an account?{" "}
                    <span className="font-semibold"
                    onClick={()=>navigate("/signup")}
                    >
                      Sign up
                    </span>
                  </button>
                </motion.div>

              </motion.div>

            </section>



            <div
              className="
                hidden
                border-l
                border-[#263750]
                lg:block
              "
            />

            {/* RIGHT — ILLUSTRATION */}
            

            <section
              className="
                relative
                hidden
                items-center
                justify-center
                overflow-hidden
                lg:flex
              "
            >

              {/* Decorative glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  size-72
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-cyan-400/10
                  blur-[90px]
                "
              />


              <div className="relative z-10 flex flex-col items-center">

                {/* Illustration */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    y: [0, -8, 0],
                    scale: 1,
                  }}
                  transition={{
                    opacity: {
                      duration: 0.7,
                      delay: 0.5,
                    },
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="
                    relative
                    h-82.5
                    w-107.5
                  "
                >

                  <img
                    src="/login-illustration.png"
                    alt="People communicating"
                    className="
                      h-full
                      w-full
                      object-contain
                      drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)]
                    "
                  />

                </motion.div>


                {/* Heading */}

                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="
                    mt-2
                    text-xl
                    font-semibold
                    text-cyan-400
                  "
                >
                  Connect Anytime, Anywhere
                </motion.h2>


                {/* Feature badges */}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.95 }}
                  className="
                    mt-5
                    flex
                    flex-wrap
                    justify-center
                    gap-3
                  "
                >

                  {[
                    {
                      icon: ShieldCheck,
                      label: "Secure",
                    },
                    {
                      icon: Zap,
                      label: "Fast",
                    },
                    {
                      icon: CircleCheck,
                      label: "Reliable",
                    },
                  ].map(
                    ({ icon: Icon, label }) => (
                      <motion.div
                        key={label}
                        whileHover={{
                          y: -3,
                          scale: 1.04,
                        }}
                        className="
                          flex
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          border-cyan-400/10
                          bg-cyan-400/10
                          px-3
                          py-1.5
                          text-xs
                          text-cyan-300
                        "
                      >
                        <Icon size={12} />

                        {label}
                      </motion.div>
                    )
                  )}

                </motion.div>

              </div>

            </section>

          </div>

        </motion.div>

      </div>

    </main>
  );
};

export default LoginPage;