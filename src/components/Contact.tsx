import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LuClock3, LuMapPin, LuWifi } from "react-icons/lu";
import { openingHours, amenities } from "../data";

const Contact = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.14,
        when: "beforeChildren",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
      className="py-10"
      id="visit"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 rounded-3xl border border-[#4b2818] bg-[#210b04] p-8"
          variants={cardVariants}
        >

          {/* Hours */}

          <div>
            <div className="flex items-center gap-2 text-[#c8956a] mb-5">
              <LuClock3 />
              <h3 className="text-2xl font-semibold">
                Hours
              </h3>
            </div>

            <div className="space-y-3">
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between border-b border-[#4b2818] pb-2"
                >
                  <span className="text-[#9d8d84]">
                    {item.day}
                  </span>

                  <span className="text-white">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}

          <div>
            <div className="flex items-center gap-2 text-[#c8956a] mb-5">
              <LuMapPin />
              <h3 className="text-2xl font-semibold">
                Location
              </h3>
            </div>

            <div className="space-y-3">

              <p className="text-[#9d8d84]">
                12, CG Road,
                Navrangpura
              </p>

              <p className="text-[#9d8d84]">
                Ahmedabad,
                Gujarat 380009
              </p>

              <button className="text-[#c8956a] hover:text-white transition">
                Get directions →
              </button>

            </div>
          </div>

          {/* Amenities */}

          <div>
            <div className="flex items-center gap-2 text-[#c8956a] mb-5">
              <LuWifi />
              <h3 className="text-2xl font-semibold">
                Amenities
              </h3>
            </div>

            <div className="space-y-3">

              {amenities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span className="text-[#c8956a]">
                    ✓
                  </span>

                  <span className="text-white">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </div>

        </motion.div>

      </div>
    </motion.section>
  );
};

export default Contact;