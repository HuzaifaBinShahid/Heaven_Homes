"use client";

import React from "react";
import styles from "./testimonials.module.css";
import cn from "classnames";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "@/constants/icons";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedText } from "@/components/animations";

const testimonials = [
  {
    id: 1,
    image: "/images/testimonials/john-lisa.webp",
    name: "John and Lisa Anderson",
    span: "Happy Homeowners",
    text: "HeavenHomes helped us find our dream home. We were able to find a home that was perfect for our family. We are so grateful for their help and would recommend them to anyone looking for a home.",
  },
  {
    id: 2,
    image: "/images/testimonials/sarah-michael.webp",
    name: "Tom and Jane Smith",
    span: "Happy Homeowners",
    text: "We were so happy with the service we received from HeavenHomes. They were able to help us find a home that was perfect for our family. We would recommend them to anyone looking for a home.",
  },
  {
    id: 3,
    image: "/images/testimonials/emily-david.webp",
    name: "Emily and David Brown",
    span: "Happy Homeowners",
    text: "Working with HeavenHomes was a great experience. They were able to help us find a home that was perfect for our family. We would recommend them to anyone looking for a home.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <AnimatedText delay={0.1}>
          <div className={cn("subheading-small", styles.title)}>Testimonials</div>
        </AnimatedText>

        <motion.div 
          className={styles.testimonial}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className={styles.testimonial_image}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className={styles.testimonial_info}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <div className={cn("heading-6", styles.text)}>
                    {testimonials[current].text}
                  </div>

                  <div className={cn("paragraph-medium", styles.testimonial_name)}>
                    {testimonials[current].name},&nbsp;
                    <span className={styles.span}>
                      {testimonials[current].span}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className={styles.btns}>
              <motion.button
                className={cn("button-stroke-small", styles.btn)}
                onClick={prevSlide}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {ChevronLeft}
              </motion.button>

              <motion.button
                className={cn("button-stroke-small", styles.btn)}
                onClick={nextSlide}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {ChevronRight}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
