"use client";

import React from "react";
import styles from "./services.module.css";
import cn from "classnames";
import {
  Bag,
  BubbleChart,
  Building,
  DoubleBed,
  House,
  TrendUp,
} from "@/constants/icons";
import { motion } from "framer-motion";
import { AnimatedText, staggerContainer, staggerItem } from "@/components/animations";

const services = [
  {
    id: 1,
    icon: House,
    title: "Buying a home",
    description:
      "We provide expert guidance and support to help you secure the best mortgage rates and terms.",
  },
  {
    id: 2,
    icon: TrendUp,
    title: "Selling your property",
    description:
      "We offer comprehensive services to sell your property quickly and at the best price.",
  },
  {
    id: 3,
    icon: Building,
    title: "Property management",
    description:
      "Our property managament services ensure that your investment is well-maintainted and profitable.",
  },
  {
    id: 4,
    icon: Bag,
    title: "Investment consultation",
    description:
      "Our investment consultants provide expert advice and strategic planning to help you build.",
  },
  {
    id: 5,
    icon: BubbleChart,
    title: "Market analysis",
    description:
      "Our market analysis services provide you with detailed insights into the current market trends.",
  },
  {
    id: 6,
    icon: DoubleBed,
    title: "Home staging",
    description:
      "Our home staging services enhace the appeal of your propeeryy, making it more attractive.",
  },
];

export default function Services() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <AnimatedText delay={0.1}>
          <div className={cn("subheading-small", styles.title)}>Our services</div>
        </AnimatedText>

        <motion.div 
          className={styles.services}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              className={styles.service}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className={cn("gradient-bubble")}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                {service.icon}
              </motion.div>
              <div className={cn("heading-6", styles.service_title)}>
                {service.title}
              </div>
              <div className={cn("paragraph-medium", styles.service_subtitle)}>
                {service.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
