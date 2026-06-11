import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { menuItems, state } from "../data";

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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

  const headerVariants: Variants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    }),
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.98,
      y: -5,
    },
  };

  const statCardVariants: Variants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1 + 0.5,
        type: "spring" as const,
        stiffness: 150,
        damping: 12,
      },
    }),
    hover: {
      y: -5,
      scale: 1.05,
      backgroundColor: "#2a1107",
      transition: {
        type: "spring" as const,
        stiffness: 300,
      },
    },
  };

  const priceVariants: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 10,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.1,
      color: "#d2a775",
      transition: {
        type: "spring" as const,
        stiffness: 300,
      },
    },
  };

  const numberVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#140702] to-[#1d0903]"
      id="menu"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          className="text-center md:text-left"
        >
          <motion.p
            variants={badgeVariants}
            className="inline-block uppercase tracking-[0.3em] text-[#c8956a] mb-2 bg-[#c8956a]/10 px-4 py-2 rounded-full text-sm"
            whileHover={{ letterSpacing: "0.5em", scale: 1.05 }}
          >
            ✨ Our Menu ✨
          </motion.p>

          <motion.h2
            variants={headerVariants}
            className="text-4xl md:text-5xl font-bold text-white mt-3 leading-tight"
          >
            Crafted with{" "}
            <motion.span
              className="text-[#c8956a] inline-block"
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              intention
            </motion.span>
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-[#9d8d84] text-lg md:text-xl mt-4 max-w-2xl"
          >
            Every drink is made to order using freshly ground,
            ethically sourced beans.
          </motion.p>
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="group relative bg-gradient-to-br from-[#210b04] to-[#2a1107] border border-[#4b2818]/50 rounded-3xl p-8 text-center cursor-pointer overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#c8956a]/0 via-[#c8956a]/5 to-[#c8956a]/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              {/* Decorative Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#c8956a]/10 flex items-center justify-center"
              >
                <span className="text-3xl">
                  {item.name.includes("Espresso") && "☕"}
                  {item.name.includes("Latte") && "🥛"}
                  {item.name.includes("Cold") && "❄️"}
                  {item.name.includes("Brew") && "⚡"}
                  {!item.name.includes("Espresso") && 
                   !item.name.includes("Latte") && 
                   !item.name.includes("Cold") && 
                   !item.name.includes("Brew") && "🍵"}
                </span>
              </motion.div>

              <motion.h3
                className="text-white text-2xl font-semibold mb-2 group-hover:text-[#c8956a] transition-colors"
              >
                {item.name}
              </motion.h3>

              <motion.p
                className="text-[#9d8d84] mt-4 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {item.description}
              </motion.p>

              <motion.p
                variants={priceVariants}
                className="text-[#c8956a] text-3xl font-bold mt-6"
              >
                ₹{item.price}
              </motion.p>

              {/* Order Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-4 py-2 rounded-full bg-[#c8956a]/10 text-[#c8956a] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
                onClick={() => {
                  console.log(`Ordered: ${item.name}`);
                }}
              >
                Order Now →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12"
        >
          {state.map((item, index) => (
            <motion.div
              key={item.label}
              custom={index}
              variants={statCardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="relative bg-gradient-to-br from-[#210b04] to-[#2a1107] border border-[#4b2818]/50 rounded-3xl p-8 text-center cursor-pointer overflow-hidden group"
            >
              {/* Animated Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-[#c8956a]/0 rounded-3xl"
                whileHover={{ borderColor: "#c8956a/30" }}
                transition={{ duration: 0.3 }}
              />

              <motion.h2
                variants={numberVariants}
                className="text-[#c8956a] text-5xl md:text-6xl font-bold group-hover:scale-110 transition-transform duration-300"
              >
                {item.Number}
              </motion.h2>

              <motion.p
                className="text-[#9d8d84] mt-3 text-sm md:text-base uppercase tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                {item.label}
              </motion.p>

              {/* Decorative Line */}
              <motion.div
                className="w-0 h-0.5 bg-[#c8956a] mx-auto mt-4 group-hover:w-12 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, type: "spring" }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#c8956a] to-[#b87a4a] text-[#210b04] px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
            onClick={() => {
              document.querySelector("#visit")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            View Full Menu →
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Menu;