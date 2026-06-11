import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LuCoffee } from "react-icons/lu";

const Footer = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const links = [
    "Instagram",
    "Menu",
    "Careers",
    "Contact",
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  const linkVariants = {
    hover: {
      y: -2,
      color: "#c8956a",
      transition: {
        duration: 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.footer
      ref={ref}
      className="py-8 px-4"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto">

        <div
          className="
          bg-[#210b04]
          border
          border-[#4b2818]
          rounded-3xl
          px-8
          py-8
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
          "
        >
          {/* Left */}

          <div>
            <div className="flex items-center gap-3">

              <LuCoffee className="text-2xl text-[#c8956a]" />

              <h2 className="text-3xl font-semibold text-white">
                Noir Brew
              </h2>

            </div>

            <p className="mt-2 text-[#9d8d84]">
              Specialty coffee • Ahmedabad
            </p>
          </div>

          {/* Right */}

          <div className="flex flex-wrap justify-center gap-8">

            {links.map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-[#9d8d84] transition"
                whileHover="hover"
                variants={linkVariants}
              >
                {item}
              </motion.a>
            ))}

          </div>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;