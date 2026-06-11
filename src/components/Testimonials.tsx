import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { testiomonils } from "../data";

const Testimonials = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#140702] to-[#1d0903]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}

        <p className="uppercase tracking-[0.3em] text-[#c8956a] text-sm">
          Regulars Say
        </p>

        <motion.h2
          className="mt-3 text-4xl md:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Loved by coffee people
        </motion.h2>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

          {testiomonils.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              custom={index}
              className="rounded-3xl border border-[#4b2818] bg-[#210b04] p-8 transition duration-300"
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.25)",
              }}
            >
              {/* Review */}

              <p className="text-[#9d8d84] italic text-xl leading-9">
                "{item.text}"
              </p>

              {/* User */}

              <div className="flex items-center gap-4 mt-8">

                <div
                  className="h-14 w-14 rounded-full bg-[#5d2d16] flex items-center justify-center text-[#c8956a] font-semibold"
                >
                  {item.initials}
                </div>

                <div>
                  <h3 className="text-white text-xl">
                    {item.name}
                  </h3>

                  <div className="flex text-[#c8956a]">
                    {"★".repeat(item.rating)}
                  </div>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  );
};

export default Testimonials;