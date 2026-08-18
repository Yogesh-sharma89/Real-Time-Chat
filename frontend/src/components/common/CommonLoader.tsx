import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface CommonLoaderProps {
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const CommonLoader = ({
  text = "Loading...",
  fullScreen = false,
  className = "",
}: CommonLoaderProps) => {
    
  return (
    <div
      className={`
        relative
        flex
        items-center
        justify-center
        bg-[#0b1220]
        ${fullScreen ? "min-h-screen w-full" : "py-10"}
        ${className}
      `}
    >
      {/* Background glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          size-32
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
      />

      {/* Loader content */}

      <div className="relative flex flex-col items-center">

        {/* Chat icon */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="relative"
        >

          {/* Outer glow */}

          <motion.div
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.35, 0, 0.35],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="
              absolute
              inset-0
              rounded-full
              bg-cyan-400/40
              blur-xl
            "
          />

          {/* Icon container */}

          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              flex
              size-14
              items-center
              justify-center
              rounded-2xl
              border
              border-cyan-400/20
              bg-[#172235]
              shadow-[0_0_30px_rgba(6,182,212,0.15)]
            "
          >
            <MessageCircle
              size={28}
              strokeWidth={1.8}
              className="text-cyan-400"
            />
          </motion.div>

        </motion.div>


        {/* Brand */}

        <motion.div
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.4,
          }}
          className="mt-4"
        >
          <span
            className="
              text-lg
              font-semibold
              tracking-wide
              text-[#E8F3FF]
            "
          >
            Chit
          </span>

          <span
            className="
              text-lg
              font-semibold
              tracking-wide
              text-cyan-400
            "
          >
            -Chat
          </span>
        </motion.div>


        {/* Animated message dots */}

        <div className="mt-3 flex items-center gap-1.5">

          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              animate={{
                y: [0, -5, 0],
                opacity: [0.35, 1, 0.35],
                scale: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                delay: index * 0.15,
                ease: "easeInOut",
              }}
              className="
                size-1.5
                rounded-full
                bg-cyan-400
              "
            />
          ))}

        </div>


        {/* Loading text */}

        <motion.p
          animate={{
            opacity: [0.45, 0.9, 0.45],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mt-2
            text-xs
            text-[#71849D]
          "
        >
          {text}
        </motion.p>

      </div>
    </div>
  );
};

export default CommonLoader;