"use client";

import React from "react";
import styles from "./team.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import Link from "next/link";
import TeamMember from "@/components/team-member";
import { TeamMembers } from "@/constants/mock";
import { motion } from "framer-motion";
import { AnimatedText, AnimatedLink, staggerContainer, staggerItem } from "@/components/animations";

export default function Team() {
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
              <Heading type="heading-3">Meet Our Expert Agents</Heading>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <div className={cn("paragraph-large", styles.subtitle)}>
                {
                  "Our team of dedicated and experiences agents is here to guide you through every step of your real estate journey."
                }
              </div>
            </AnimatedText>
          </div>

          <AnimatedLink 
            href="/agents" 
            className={cn("button button-primary")}
            delay={0.3}
          >
            Meet Our Team
          </AnimatedLink>
        </motion.div>

        <motion.div 
          className={styles.team_members}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {TeamMembers.slice(0, 3).map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <TeamMember member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
