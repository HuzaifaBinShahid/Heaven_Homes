"use client";

import React from "react";
import styles from "./footer.module.css";
import cn from "classnames";
import Logo from "../logo";
import { Heading } from "../typography";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "@/constants/icons";
import { motion } from "framer-motion";
import { AnimatedText, staggerContainer, staggerItem } from "@/components/animations";

const links = [
  {
    id: 1,
    title: "Benefits",
    url: "#",
  },
  {
    id: 2,
    title: "Ofices",
    url: "#",
  },
  {
    id: 3,
    title: "Services",
    url: "#",
  },
  {
    id: 4,
    title: "Testimonials",
    url: "#",
  },
  {
    id: 5,
    title: "Newsletter",
    url: "#",
  },
  {
    id: 6,
    title: "Home",
    url: "#",
  },
  {
    id: 7,
    title: "About us",
    url: "#",
  },
  {
    id: 8,
    title: "Listings",
    url: "#",
  },
  {
    id: 9,
    title: "Agents",
    url: "#",
  },
];

const socials = [
  {
    id: 1,
    icon: Instagram,
    title: "Instagram",
    url: "#",
  },
  {
    id: 2,
    icon: Facebook,
    title: "Facebook",
    url: "#",
  },
  {
    id: 3,
    icon: Linkedin,
    title: "Linkedin",
    url: "#",
  },
  {
    id: 4,
    icon: Youtube,
    title: "Youtube",
    url: "#",
  },
];

export default function Footer() {
  return (
    <footer className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Logo />
          </motion.div>

          <div>
            <AnimatedText delay={0.1}>
              <Heading type="heading-3" className={styles.title}>
                Building Dreams, One Home at a Time.
              </Heading>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <div className={cn("subheading-small", styles.email)}>
                HEAVENHOMES@INFO.COM
              </div>
            </AnimatedText>
          </div>
        </motion.div>

        <motion.div 
          className={styles.divider}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.business_info}>
            <div>
              <AnimatedText delay={0.5}>
                <div className={cn("paragraph-small", styles.address)}>
                  123 Main Street, Hometown, USA
                </div>
              </AnimatedText>
              <AnimatedText delay={0.6}>
                <div className={cn("paragraph-small", styles.phone)}>
                  (123) 456-7890
                </div>
              </AnimatedText>
            </div>

            <motion.div 
              className={styles.socials}
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              {socials.map((social, index) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            <AnimatedText delay={0.8}>
              <div className={cn("paragraph-small", styles.copyright)}>
                © 2024 Elektra. All rights reserved.
              </div>
            </AnimatedText>
          </div>

          <motion.div 
            className={styles.links}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {links.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.05, ease: "easeOut" }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={link.url}
                  className={cn("label-medium", styles.link)}
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
