import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { y: -50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const headingVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const paragraphVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 12,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      y: 0,
    },
  };

  const circleVariants: Variants = {
    hidden: { scale: 0, opacity: 0, rotate: 0 },
    visible: {
      scale: 1,
      opacity: 0.3,
      rotate: 360,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 20,
        duration: 1.5,
        delay: 0.2,
      },
    },
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 360],
      transition: {
        scale: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse" as const,
        },
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear" as const,
        },
      },
    },
  };

  const floatingElementsVariants: Variants = {
    animate: (i: number) => ({
      y: [0, -20, 0],
      x: [0, i % 2 === 0 ? 15 : -15, 0],
      transition: {
        duration: 4 + i,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
        delay: i * 0.5,
      },
    }),
  };

  return (
    <motion.section
      ref={ref}
      className="px-4 py-8 min-h-screen flex items-center"
      id="about"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#1d0903] to-[#2a1107] min-h-[650px] w-full flex items-center justify-center shadow-2xl">
        
        {/* Animated Background Circles */}
        <motion.div
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? ["visible", "animate"] : "hidden"}
          className="absolute top-[-120px] left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-gradient-to-r from-[#5d2d16] to-[#c8956a]/30 blur-2xl"
        />

        <motion.div
          variants={circleVariants}
          custom={1}
          initial="hidden"
          animate={isInView ? ["visible", "animate"] : "hidden"}
          className="absolute bottom-[-180px] right-[-100px] h-[400px] w-[400px] rounded-full bg-gradient-to-r from-[#c8956a]/20 to-[#5d2d16]/20 blur-2xl"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating decorative elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={floatingElementsVariants}
            initial="hidden"
            animate="animate"
            className="absolute hidden lg:block"
            style={{
              top: `${20 + i * 25}%`,
              left: `${5 + i * 15}%`,
              width: `${8 + i * 4}px`,
              height: `${8 + i * 4}px`,
              background: "#c8956a",
              borderRadius: "50%",
              opacity: 0.3 + i * 0.1,
              filter: "blur(2px)",
            }}
          />
        ))}

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`right-${i}`}
            custom={i + 3}
            variants={floatingElementsVariants}
            initial="hidden"
            animate="animate"
            className="absolute hidden lg:block"
            style={{
              bottom: `${20 + i * 20}%`,
              right: `${5 + i * 12}%`,
              width: `${6 + i * 3}px`,
              height: `${6 + i * 3}px`,
              background: "#f4e6d2",
              borderRadius: "50%",
              opacity: 0.2 + i * 0.1,
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center px-6 py-12">
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            className="inline-flex rounded-full border border-[#c8956a] px-5 py-2 text-sm uppercase tracking-[0.25em] text-[#c8956a] bg-[#c8956a]/5 backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: "#d2a775" }}
          >
            ✨ Est. 2018 • Specialty Coffee ✨
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={headingVariants}
            className="mt-8 text-5xl md:text-7xl font-bold text-[#f5ede5] leading-tight"
          >
            Where every cup tells a{" "}
            <motion.span
              className="text-[#c8956a] inline-block"
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              story
            </motion.span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={paragraphVariants}
            className="mx-auto mt-8 max-w-2xl text-lg md:text-2xl leading-10 text-[#b79c8c]"
          >
            Handcrafted espresso drinks, single-origin pour-overs,
            and seasonal blends — brewed for the ones who
            take their coffee seriously.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={buttonVariants}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative overflow-hidden rounded-xl bg-gradient-to-r from-white to-[#f5ede5] px-8 py-4 text-lg font-semibold text-[#1d0903] transition-all shadow-lg group"
              onClick={() => {
                document.querySelector("#menu")?.scrollIntoView({ 
                  behavior: "smooth" 
                });
              }}
            >
              <span className="relative z-10">☕ Explore Menu</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#c8956a] to-[#d2a775]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              {/* <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                ☕ Explore Menu
              </span> */}
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative overflow-hidden rounded-xl border border-[#5d4a42] px-8 py-4 text-lg text-white transition-all hover:border-[#c8956a] group"
              onClick={() => {
                document.querySelector("#visit")?.scrollIntoView({ 
                  behavior: "smooth" 
                });
              }}
            >
              <span className="relative z-10">📖 Our Story</span>
              <motion.div
                className="absolute inset-0 bg-[#c8956a]/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => {
                document.querySelector("#menu")?.scrollIntoView({ 
                  behavior: "smooth" 
                });
              }}
            >
              <span className="text-xs uppercase tracking-wider text-[#b79c8c]">
                Scroll
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M12 19L5 12M12 19L19 12"
                  stroke="#c8956a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;