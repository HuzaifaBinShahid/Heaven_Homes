"use client";

import React from "react";
import styles from "./benefits.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import Image from "next/image";
import { Checkmark } from "@/constants/icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedImage, AnimatedText, AnimatedLink, staggerContainer, staggerItem } from "@/components/animations";

const benefits = [
  {
    id: 1,
    title: "Why choose us?",
    description:
      "We are committed to providing exceptional service and unparallaled expertise in the real estate market. Our features are designed to ensure a smooth and rewarding experience for our clients, whether you are buying, selling, or investing.",
    image: "/images/benefit-1.webp",
    items: [
      {
        id: 1,
        title: "Expert agents",
      },
      {
        id: 2,
        title: "Comprehensive listings",
      },
      {
        id: 3,
        title: "Personalized service",
      },
    ],
  },
  {
    id: 2,
    title: "Benefits of choosing HeavenHomes",
    description:
      "We offer a range of benefits that set us apart from other real estate agencies. Our team of experts will guide you through the process, ensuring you get the best deal possible.",
    image: "/images/benefit-2.webp",
    items: [
      {
        id: 1,
        title: "Tailored approach",
      },
      {
        id: 2,
        title: "Extensive network",
      },
      {
        id: 3,
        title: "Proven track record",
      },
    ],
  },
];

export default function Benefits() {
  return (
    <section className={cn("section")}>
      {benefits.map((benefit, benefitIndex) => (
        <AnimatedSection key={benefit.id} delay={benefitIndex * 0.2}>
          <div className={cn("container", styles.container)}>
            <AnimatedImage delay={0.1} className={styles.image}>
              <Image
                src={benefit.image}
                alt="Benefits"
                layout="fill"
                objectFit="cover"
              />
            </AnimatedImage>
            <div className={styles.content}>
              <AnimatedText delay={0.2}>
                <Heading type="heading-3">{benefit.title}</Heading>
              </AnimatedText>
              <AnimatedText delay={0.3}>
                <div className={cn("paragraph-large", styles.subtitle)}>
                  {benefit.description}
                </div>
              </AnimatedText>

              <motion.ul 
                className={styles.list}
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
              >
                {benefit.items.map((item, index) => (
                  <motion.li 
                    key={item.id} 
                    className={styles.item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <motion.div 
                      className={styles.icon}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {Checkmark}
                    </motion.div>
                    <div className={cn("paragraph-medium", styles.text)}>
                      {item.title}
                    </div>
                  </motion.li>
                ))}
              </motion.ul>

              <AnimatedLink 
                href="/about" 
                className={cn("button", styles.button)}
                delay={0.6}
              >
                Learn more
              </AnimatedLink>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </section>
  );
}
