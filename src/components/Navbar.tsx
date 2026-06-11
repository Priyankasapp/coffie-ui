import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { LuCoffee, LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { href: "#menu", label: "Menu" },
    { href: "#about", label: "About" },
    { href: "#visit", label: "Visit" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Animation variants
  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring" as const, 
        stiffness: 100, 
        damping: 20,
        mass: 0.5
      }
    }
  };

  const logoVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring" as const, 
        stiffness: 200, 
        damping: 15,
        delay: 0.2 
      }
    }
  };

  const menuItemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    })
  };

  const buttonVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring" as const, 
        stiffness: 200, 
        delay: 0.4,
        damping: 15
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(200, 149, 106, 0.4)",
      transition: { type: "spring" as const, stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants: Variants = {
    hidden: { 
      x: "100%",
      transition: { type: "spring" as const, stiffness: 300, damping: 30 }
    },
    visible: { 
      x: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 }
    },
    exit: { 
      x: "100%",
      transition: { type: "spring" as const, stiffness: 300, damping: 30 }
    }
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };
  const mobileLinkVariants: Variants = {
    hidden: { x: -30, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { 
        delay: i * 0.1, 
        type: "spring" as const, 
        stiffness: 200,
        damping: 15
      }
    })
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
         
        className={`fixed bg-gradient-to-b from-[#140702] to-[#1d0903] top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "pt-0" : "pt-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className={`bg-[#210b04]/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 transition-all duration-300 ${
              scrolled ? "rounded-none rounded-b-2xl" : ""
            }`}
            animate={{
              boxShadow: scrolled 
                ? "0 10px 30px -10px rgba(0,0,0,0.3)" 
                : "0 20px 40px -15px rgba(0,0,0,0.2)"
            }}
          >
            <div className="px-6 py-4">
              <div className="flex items-center justify-between gap-4">
                {/* Logo Section - Clickable */}
                <motion.a
                  href="#"
                  className="flex items-center gap-3 cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    variants={logoVariants}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c8956a]/20 to-[#c8956a]/5 text-[#c8956a]"
                  >
                    <LuCoffee className="text-2xl" />
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h1 className="text-xl font-semibold text-white tracking-tight">
                      Noir Brew
                    </h1>
                  </motion.div>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10 text-sm text-[#f4e6d2]/90">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      custom={index}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.05, color: "#c8956a" }}
                      whileTap={{ scale: 0.95 }}
                      className="transition cursor-pointer relative group"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(item.href)?.scrollIntoView({ 
                          behavior: "smooth" 
                        });
                      }}
                    >
                      {item.label}
                      <motion.span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#c8956a] to-[#d2a775]"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  ))}

                  <motion.button
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    className="rounded-full bg-gradient-to-r from-[#c8956a] to-[#b87a4a] px-6 py-2.5 text-sm font-semibold text-[#210b04] shadow-lg"
                    onClick={() => {
                      // Add order now functionality
                      console.log("Order now clicked");
                    }}
                  >
                    Order Now
                  </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileTap={{ scale: 0.9 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <AnimatePresence mode="wait">
                    {menuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <LuX className="text-xl" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <LuMenu className="text-xl" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay and Panel */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              key="mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-gradient-to-br from-[#210b04] to-[#1a0a03] shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#c8956a]/15 text-[#c8956a]">
                      <LuCoffee className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[#f4e6d2]/60">
                        Menu
                      </p>
                      <h2 className="text-lg font-semibold text-white">
                        Noir Brew
                      </h2>
                    </div>
                  </motion.div>
                  
                  <motion.button
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMenuOpen(false)}
                    className="h-10 w-10 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors"
                  >
                    <LuX className="text-xl mx-auto" />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 px-6 py-8 overflow-y-auto">
                  <div className="flex flex-col gap-6">
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        custom={index}
                        variants={mobileLinkVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ x: 10, color: "#c8956a" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.preventDefault();
                          document.querySelector(item.href)?.scrollIntoView({ 
                            behavior: "smooth" 
                          });
                          setMenuOpen(false);
                        }}
                        className="flex items-center justify-between text-lg font-medium text-[#f4e6d2]/80"
                      >
                        {item.label}
                        <motion.span
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          className="group-hover:translate-x-1 transition-transform"
                        >
                          →
                        </motion.span>
                      </motion.a>
                    ))}
                  </div>

                  {/* Mobile Order Button */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="mt-12 pt-8 border-t border-white/10"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full rounded-full bg-gradient-to-r from-[#c8956a] to-[#b87a4a] px-6 py-4 text-base font-semibold text-[#210b04] shadow-lg"
                      onClick={() => {
                        setMenuOpen(false);
                        // Add order now functionality
                        console.log("Order now clicked");
                      }}
                    >
                      Order Now
                    </motion.button>
                  </motion.div>
                </div>

                {/* Menu Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-6 border-t border-white/10"
                >
                  <p className="text-center text-xs text-[#f4e6d2]/40">
                    Crafting perfect moments, one cup at a time.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer with animation */}
      <motion.div 
        className="h-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
    </>
  );
};

export default Navbar;