"use client";

import cn from "classnames";
import Image from "next/image";
import styles from "./property-listing.module.css";
import Link from "next/link";
import PropertyFeatures from "../property-features";
import { motion } from "framer-motion";

type PropertyListingProps = {
  item: {
    id: number;
    images: string[];
    title: string;
    price: string;
    description: string;
    features: {
      id: number;
      icon: string;
      name: string;
      value: string | number;
    }[];
  };
};

export default function PropertyListing({ item }: PropertyListingProps) {
  return (
    <motion.div 
      key={item.id} 
      className={styles.listing}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <Link
        href={{
          pathname: "/property-detail",
          query: { item: JSON.stringify(item) },
        }}
        className={styles.img_holder}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src={item.images && item.images[0]}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </motion.div>

        <motion.div 
          className={cn("paragraph-small", styles.listing_price)}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {item.price}
        </motion.div>
      </Link>
      <motion.div 
        className={styles.listing_wrapper}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className={cn("heading-6", styles.listing_title)}>
          {item.title}
        </div>
        <div className={cn("paragraph-medium", styles.listing_description)}>
          {item.description}
        </div>

        <PropertyFeatures
          features={item.features}
          className={styles.features}
        />
      </motion.div>
    </motion.div>
  );
}
