import { motion } from "framer-motion";
import {
  MessageCircle,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Zap,
  CircleCheck,
  Loader
} from "lucide-react";
import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import useSignup from "../../hooks/useSignup";



const SignupPage = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);



  const {register,submit,errors,navigate,isLoading} = useSignup();
  

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.055) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.055) 1px,
                transparent 1px
              )
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
            h-[500px]
            w-[500px]
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
            h-[500px]
            w-[500px]
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


      {/* =====================================================
          MAIN
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-4
          py-8
          sm:px-6
          lg:px-8
        "
      >

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


          <div
            className="
              relative
              grid
              min-h-175
              lg:grid-cols-2

              lg:after:absolute
              lg:after:inset-y-0
              lg:after:left-1/2
              lg:after:w-px
              lg:after:-translate-x-1/2
              lg:after:bg-[#263750]
            "
          >

            {/* =================================================
                LEFT — SIGNUP FORM
            ================================================== */}

            <section
              className="
                flex
                items-center
                justify-center
                px-6
                py-12
                sm:px-10
                lg:px-14
              "
            >

              <motion.div
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                }}
                className="w-full max-w-100"
              >

                {/* Logo */}

                <motion.div
                  initial={{
                    scale: 0,
                    rotate: -20,
                  }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 12,
                    delay: 0.3,
                  }}
                  className="mb-4 flex justify-center"
                >
                  <MessageCircle
                    size={46}
                    strokeWidth={1.7}
                    className="text-cyan-400"
                  />
                </motion.div>


                {/* Heading */}

                <div className="mb-7 text-center">

                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.4,
                    }}
                    className="
                      text-2xl
                      font-bold
                      tracking-tight
                      text-[#F4F8FF]
                      sm:text-3xl
                    "
                  >
                    Create account
                  </motion.h1>

                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.5,
                    }}
                    className="
                      mt-2
                      text-sm
                      text-[#8FA3BD]
                    "
                  >
                    Sign up for a new account
                  </motion.p>

                </div>


                {/* =================================================
                    FORM
                ================================================== */}

                <form className="space-y-4" onSubmit={submit}>


                  {/* =================================================
                      FIRST NAME + LAST NAME
                  ================================================== */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.55,
                    }}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                  >

                    {/* First Name */}

                    <div>

                      <label
                        htmlFor="firstName"
                        className="
                          mb-2
                          block
                          text-sm
                          font-medium
                          text-[#D6E0ED]
                        "
                      >
                        First Name
                      </label>

                      <div
                        className={`
                          flex
                          h-11
                          items-center
                          gap-3
                          rounded-lg
                          border
                          bg-[#142033]/70
                          px-3
                          transition-all
                          duration-200

                          ${
                            errors.firstname 
                              ? "border-red-400/60 shadow-[0_0_20px_rgba(248,113,113,0.08)]"
                              : "border-[#2A3A52] focus-within:border-cyan-400/50 focus-within:shadow-[0_0_20px_rgba(6,182,212,0.08)]"
                          }
                        `}
                      >

                        <User
                          size={17}
                          className="shrink-0 text-[#71849D]"
                        />

                        <input
                          id="firstName"
                          type="text"
                          disabled={isLoading}
                          {
                            ...register("firstname",{
                              required:"Firstname is required",
                            })
                          }
                          placeholder="John"
                          className="
                            w-full
                            bg-transparent
                            disabled:cursor-not-allowed
                            text-sm
                            text-[#F4F8FF]
                            outline-none
                            placeholder:text-[#64758D]
                          "
                        />

                      </div>
                  

                      {
                        errors.firstname && 
                        <ErrorMessage
                        message={errors.firstname.message}
                      />
                      }

                    </div>


                    {/* Last Name */}

                    <div>

                      <label
                        htmlFor="lastName"
                        className="
                          mb-2
                          block
                          text-sm
                          font-medium
                          text-[#D6E0ED]
                        "
                      >
                        Last Name
                      </label>

                      <div
                        className={`
                          flex
                          h-11
                          items-center
                          gap-3
                          rounded-lg
                          border
                          bg-[#142033]/70
                          px-3
                          transition-all
                          duration-200

                          ${
                            errors.lastname
                              ? "border-red-400/60"
                              : "border-[#2A3A52] focus-within:border-cyan-400/50"
                          }
                        `}
                      >

                        <User
                          size={17}
                          className="shrink-0 text-[#71849D]"
                        />

                        <input
                          id="lastName"
                          type="text"
                          placeholder="Doe"
                          disabled={isLoading}
                          {
                            ...register("lastname",{
                              required:"Lastname is also required"
                            })
                          }
                          className="
                            w-full
                            bg-transparent
                            disabled:cursor-not-allowed
                            text-sm
                            text-[#F4F8FF]
                            outline-none
                            placeholder:text-[#64758D]
                          "
                        />

                      </div>

                      {errors.lastname &&  <ErrorMessage
                        message={errors.lastname.message}
                      />}

                    </div>

                  </motion.div>


                  {/* =================================================
                      EMAIL
                  ================================================== */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.62,
                    }}
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

                    <div
                      className={`
                        flex
                        h-11
                        items-center
                        gap-3
                        rounded-lg
                        border
                        bg-[#142033]/70
                        px-3
                        transition-all
                        duration-200

                        ${
                          errors.email
                            ? "border-red-400/60 shadow-[0_0_20px_rgba(248,113,113,0.08)]"
                            : "border-[#2A3A52] focus-within:border-cyan-400/50 focus-within:shadow-[0_0_20px_rgba(6,182,212,0.08)]"
                        }
                      `}
                    >

                      <Mail
                        size={18}
                        className="shrink-0 text-[#71849D]"
                      />

                      <input
                        id="email"
                        disabled={isLoading}
                        {
                          ...register("email",{
                            required:"Email is required"
                          })
                        }
                        type="email"
                        placeholder="johndoe@gmail.com"
                        className="
                          w-full
                          disabled:cursor-not-allowed
                          bg-transparent
                          text-sm
                          text-[#F4F8FF]
                          outline-none
                          placeholder:text-[#64758D]
                        "
                      />

                    </div>

                   {errors.email  && <ErrorMessage
                      message={errors.email.message}
                    />}

                  </motion.div>


                  {/* =================================================
                      PASSWORD
                  ================================================== */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.69,
                    }}
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

                    <div
                      className={`
                        flex
                        h-11
                        items-center
                        gap-3
                        rounded-lg
                        border
                        bg-[#142033]/70
                        px-3
                        transition-all
                        duration-200

                        ${
                          errors.password
                            ? "border-red-400/60"
                            : "border-[#2A3A52] focus-within:border-cyan-400/50"
                        }
                      `}
                    >

                      <Lock
                        size={18}
                        className="shrink-0 text-[#71849D]"
                      />

                      <input
                        id="password"
                        disabled={isLoading}
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        {
                          ...register("password",{
                            required:"Password is required"
                          })
                        }
                        placeholder="Enter your password"
                        className="
                          w-full
                          disabled:cursor-not-allowed
                          bg-transparent
                          text-sm
                          text-[#F4F8FF]
                          outline-none
                          placeholder:text-[#64758D]
                        "
                      />

                      <button
                        type="button"
                        
                        onClick={() =>
                          setShowPassword(
                            (prev) => !prev
                          )
                        }
                        className="
                          shrink-0
                          text-[#71849D]
                          transition-colors
                          hover:text-cyan-400
                        "
                        aria-label={
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>

                    </div>

                    { errors.password && <ErrorMessage
                      message={errors.password.message}
                    />}

                  </motion.div>


                  {/* =================================================
                      CONFIRM PASSWORD
                  ================================================== */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.76,
                    }}
                  >

                    <label
                      htmlFor="confirmPassword"
                      className="
                        mb-2
                        block
                        text-sm
                        font-medium
                        text-[#D6E0ED]
                      "
                    >
                      Confirm Password
                    </label>

                    <div
                      className={`
                        flex
                        h-11
                        items-center
                        gap-3
                        rounded-lg
                        border
                        bg-[#142033]/70
                        px-3
                        transition-all
                        duration-200

                        ${
                          errors.confirmPassword
                            ? "border-red-400/60"
                            : "border-[#2A3A52] focus-within:border-cyan-400/50"
                        }
                      `}
                    >

                      <Lock
                        size={18}
                        className="shrink-0 text-[#71849D]"
                      />

                      <input
                        id="confirmPassword"
                        disabled={isLoading}
                        type={
                          showConfirmPassword
                            ? "text"
                            : "password"
                        }
                        {
                          ...register("confirmPassword",{
                            required:"Confirm password is required"
                          })
                        }
                        placeholder="Confirm your password"
                        className="
                          w-full
                          disabled:cursor-not-allowed
                          bg-transparent
                          text-sm
                          text-[#F4F8FF]
                          outline-none
                          placeholder:text-[#64758D]
                        "
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(
                            (prev) => !prev
                          )
                        }
                        className="
                          shrink-0
                          text-[#71849D]
                          transition-colors
                          hover:text-cyan-400
                        "
                        aria-label={
                          showConfirmPassword
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>

                    </div>

                    {errors.confirmPassword &&    <ErrorMessage
                      message={errors.confirmPassword.message}
                    />}

                  </motion.div>


                  {/* =================================================
                      SUBMIT
                  ================================================== */}

                  <motion.button
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.83,
                    }}
                    whileHover={{
                      scale: 1.015,
                      boxShadow:
                        "0 0 28px rgba(6,182,212,0.25)",
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    type="submit"
                    disabled={isLoading}
                    className="
                      btn
                      mt-2
                      disabled:cursor-not-allowed
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
                    {
                      isLoading ?
                      <Loader className="size-5 animate-spin"/>
                      :
                      <span>Create Account</span>
                    }
                  </motion.button>

                </form>


                {/* =================================================
                    LOGIN LINK
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.9,
                  }}
                  className="mt-5 text-center"
                >

                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={()=>navigate("/login")}
                    className="
                      rounded-md
                      cursor-pointer

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
                    Already have an account?{" "}
                    <span className="font-semibold">
                      Login
                    </span>
                  </button>

                </motion.div>

              </motion.div>

            </section>


            {/* =================================================
                RIGHT — ILLUSTRATION
            ================================================== */}

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

              {/* Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
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


              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                "
              >

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
                    src="/signup-illustration.png"
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
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.8,
                  }}
                  className="
                    mt-2
                    text-xl
                    font-semibold
                    text-cyan-400
                  "
                >
                  Start Your Journey Today
                </motion.h2>


                {/* Badges */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.95,
                  }}
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
                      label: "Free",
                    },
                    {
                      icon: Zap,
                      label: "Easy Setup",
                    },
                    {
                      icon: CircleCheck,
                      label: "Private",
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


// ============================================================
// ERROR COMPONENT
// ============================================================


export default SignupPage;