"use client";

import React from "react";
import cn from "classnames";
import styles from "./header.module.css";
import Logo from "../logo";
import Burger from "../burger";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav_links = [
  { title: "Home", href: "/" },
  { title: "About us", href: "/about" },
  { title: "Listings", href: "/listings" },
  { title: "Agents", href: "/agents" },
];

const blackHeaderPages = [
  "/listings",
  "/agents",
  "/contact",
  "/property-detail",
  "/agent",
];

export default function Header() {
  const [visibleNav, setVisibleNav] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);
  const [sticky, setSticky] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navVariants = {
    hidden: { 
      clipPath: "inset(0% 0% 100% 0%)",
      opacity: 0
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 25,
        mass: 2,
        delay: 0.2,
        staggerChildren: 0.1,
        delayChildren: 0.3
      },
    },
  };

  const navLinkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const handleScrollSection = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = mobile ? 0 : 100;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: y, behavior: "smooth" });

      if (mobile) {
        setVisibleNav(false);
      }
    }
  };

  const isBlackHeader = blackHeaderPages.includes(pathname);

  return (
    <motion.header
      className={cn(styles.header, {
        [styles.sticky]: sticky,
        [styles.border_header]: isBlackHeader,
      })}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={cn("container", styles.container)}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Logo
            className={cn(styles.logo, {
              [styles.black_logo]:
                (isBlackHeader && !(mobile && visibleNav)) || sticky,
              [styles.sticky_logo]: sticky,
            })}
          />
        </motion.div>

        <motion.nav
          className={cn(styles.nav, {
            [styles.visible]: visibleNav,
          })}
          initial={mobile ? "hidden" : false}
          animate={mobile && visibleNav ? "visible" : "hidden"}
          variants={mobile ? navVariants : {}}
        >
          <div className={styles.nav_links}>
            {nav_links.map((link, index) => (
              <motion.div
                key={index}
                variants={mobile ? navLinkVariants : {}}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className={cn("label-small", styles.nav_link, {
                    [styles.active]: pathname === link.href,
                    [styles.black_link]: isBlackHeader && !(mobile && visibleNav),
                    [styles.sticky_link]: sticky,
                  })}
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>

        <div className={styles.button_wrapper}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/contact"
              className={cn("button-stroke-small", styles.button, {
                [styles.black_button]: isBlackHeader && !(mobile && visibleNav),
                [styles.sticky_button]: sticky,
              })}
            >
              Get In Touch
            </Link>
          </motion.div>

          <Burger
            className={styles.burger}
            burgerClassName={cn(styles.burger, {
              [styles.black_burger]: isBlackHeader && !(mobile && visibleNav),
              [styles.sticky_burger]: sticky,
            })}
            visibleNav={visibleNav}
            setVisibleNav={setVisibleNav}
          />
        </div>
      </div>
    </motion.header>
  );
}
