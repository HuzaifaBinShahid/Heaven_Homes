"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { Heading, Hero as HeroTitle } from "@/components/typography";
import Image from "next/image";
import SearchBar from "@/components/search-bar";
import { motion } from "framer-motion";
import { AnimatedText, AnimatedImage } from "@/components/animations";

export default function Hero() {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <>
      <div className={styles.img_container}>
        <Image
          src="/images/header-background.webp"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />

        <div className={styles.overlay} />

        <div className={styles.hero_centered}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroTitle size="hero-lg" className={styles.title}>
              Find Your Next <br />
              Home Sweet Home.
            </HeroTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <SearchBar
              placeholder="Enter an address, neighborhood, city or ZIP code"
              searchTerm={searchTerm}
              onSearchTermChange={setSearchTerm}
            />
          </motion.div>
        </div>
      </div>

      <section className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.content}>
            <AnimatedText delay={0.2}>
              <Heading type="heading-3">
                Find your dream home with our curated listings and expert
                guidance.
              </Heading>
            </AnimatedText>

            <div className={styles.stack}>
              <motion.div 
                className={styles.card}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className={cn("paragraph-large", styles.card_subtitle)}>
                  Property Investments
                </div>
                <div className={cn("heading-3")}>$1B+</div>
              </motion.div>

              <AnimatedImage delay={0.4} className={styles.card}>
                <Image
                  src="/images/intro.webp"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                />
              </AnimatedImage>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
