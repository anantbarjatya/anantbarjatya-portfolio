import { motion } from "framer-motion";

export default function CarScene({ className = "" }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, x: 50, scale: 0.94 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Subtle ground shadow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[10%]
          right-[5%]
          bottom-[4%]
          h-[20px]
          rounded-full
          bg-black/35
          blur-xl
        "
      />

      {/* Main car */}
      <img
        src="/car.png"
        alt="Red sports car"
        className="
          relative
          z-10
          block
          w-full
          h-auto
          object-contain
          select-none
          pointer-events-none
        "
        draggable="false"
      />
    </motion.div>
  );
}