"use client";

import React from "react";
import cn from "classnames";
import styles from "./categories.module.css";
import { Heading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedText, AnimatedLink, staggerContainer, staggerItem } from "@/components/animations";

const categories = [
  {
    id: 1,
    title: "Houses",
    image: "/images/properties/houses/123-serenity-lane.webp",
  },
  {
    id: 2,
    title: "Townhouses",
    image: "/images/properties/townhouses/123-modern-townhouse.webp",
  },
  {
    id: 3,
    title: "Condos",
    image: "/images/properties/apartments/321-suburban-apartment.webp",
  },
  {
    id: 4,
    title: "Villas",
    image: "/images/properties/villas/luxury-estate-villa.webp",
  },
  {
    id: 5,
    title: "Commercial",
    image: "/images/properties/commercial/downtown-office.webp",
  },
  {
    id: 6,
    title: "Apartments",
    image: "/images/properties/apartments/789-downtown-loft.webp",
  },
];

export default function Categories() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.title_container}>
            <AnimatedText delay={0.1}>
              <Heading type="heading-3">Explore Our Categories</Heading>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <div className={cn("paragraph-large", styles.subtitle)}>
                {
                  "Whether you're looking for a luxurious home, a cozy apartment, or a prime commercial space, we have something for everyone."
                }
              </div>
            </AnimatedText>
          </div>

          <AnimatedLink 
            href="/listings" 
            className={cn("button button-primary")}
            delay={0.3}
          >
            View All Categories
          </AnimatedLink>
        </motion.div>

        <motion.div 
          className={styles.categories}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((category, index) => (
            <motion.div 
              key={category.id} 
              className={styles.category}
              variants={staggerItem}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div 
                className={styles.image_container}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ width: "100%", height: "100%" }}
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>

              <motion.div 
                className={styles.overlay}
                whileHover={{ 
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className={cn("heading-6", styles.category_title)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {category.title}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
