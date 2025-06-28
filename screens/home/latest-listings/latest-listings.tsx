"use client";

import React from "react";
import cn from "classnames";
import styles from "./latest-listings.module.css";
import { Heading } from "@/components/typography";
import { Listings } from "@/constants/mock";
import PropertyListing from "@/components/property-listing";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedText, AnimatedLink, staggerContainer, staggerItem } from "@/components/animations";

export default function LatestListings() {
  // Flatten all listings from all categories
  const allListings = Listings.flatMap((listing) => listing.items);

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
          <div>
            <AnimatedText delay={0.1}>
              <Heading type="heading-3" className={styles.title}>
                Latest Property Listings
              </Heading>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <div className={cn("paragraph-large", styles.subtitle)}>
                Discover the newest additions to our exclusive real estate
                portfolio.
              </div>
            </AnimatedText>
          </div>

          <AnimatedLink 
            href="/listings" 
            className={cn("button", styles.button)}
            delay={0.3}
          >
            View All Listings
          </AnimatedLink>
        </motion.div>

        <motion.div 
          className={styles.listings}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {allListings.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <PropertyListing item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
