"use client";

import React from "react";
import cn from "classnames";
import styles from "./search-bar.module.css";
import { Building, Filter } from "@/constants/icons";
import Link from "next/link";
import { motion } from "framer-motion";

type SearchBarProps = {
  placeholder: string;
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
};

export default function SearchBar({
  placeholder,
  searchTerm,
  onSearchTermChange,
}: SearchBarProps) {
  const [loading, setLoading] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onSearchTermChange(newValue);

    setLoading(true);

    // Simulate a search operation with a timeout
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1-second loading time
  };

  return (
    <motion.div 
      className={styles.search_bar}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      whileHover={{ y: -2 }}
    >
      <motion.div 
        className={styles.input_group}
        animate={{
          boxShadow: isFocused 
            ? "0 0 0 2px rgba(255, 255, 255, 0.3)" 
            : "0 0 0 0px rgba(255, 255, 255, 0)"
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div 
          className={styles.icon}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {Building}
        </motion.div>
        <input
          type="text"
          placeholder={placeholder}
          className={cn("label-medium", styles.input)}
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <div className={styles.divider} />
        {loading ? (
          <motion.div 
            className={styles.spinner}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        ) : (
          <motion.div 
            className={styles.icon}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {Filter}
          </motion.div>
        )}
      </motion.div>

      <motion.div 
        className={styles.breakline}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href={{
            pathname: "/search",
            query: { query: searchTerm },
          }}
          className={cn("button", styles.button)}
        >
          Search Property
        </Link>
      </motion.div>
    </motion.div>
  );
}
