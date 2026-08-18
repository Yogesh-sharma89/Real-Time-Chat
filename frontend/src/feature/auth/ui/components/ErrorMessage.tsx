import { AnimatePresence,motion } from "framer-motion";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({
  message,
}: ErrorMessageProps) => {
  return (
    <AnimatePresence mode="wait">

      {message && (
        <motion.p
          initial={{
            opacity: 0,
            height: 0,
            y: -5,
          }}
          animate={{
            opacity: 1,
            height: "auto",
            y: 0,
          }}
          exit={{
            opacity: 0,
            height: 0,
            y: -5,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            mt-1.5
            px-1
            text-xs
            text-red-400
          "
        >
          {message}
        </motion.p>
      )}

    </AnimatePresence>
  );
};

export default ErrorMessage;
