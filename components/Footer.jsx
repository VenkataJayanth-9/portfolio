"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="mt-20"
    >
      <div className="text-center">
        {assets?.logo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={assets.logo}
              alt="Logo"
              width={144}
              height={50}
              className="mx-auto mb-2"
            />
          </motion.div>
        )}

        {/* Email Section */}
        {assets?.mail_icon && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-max flex items-center gap-2 mx-auto cursor-pointer hover:scale-105 transition-transform"
          >
            <Image
              src={assets.mail_icon}
              alt="Email Icon"
              width={24}
              height={24}
            />
            <span className="hover:text-blue-500 transition-colors">
              venkatajayanth.tummalapalli@gmail.com
            </span>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6"
      >
        <p>© 2025 Venkata Jayanth. All rights reserved.</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          {[
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/in/venkata-jayanth-27a28428a/",
            },
            { name: "GitHub", url: "https://github.com/VenkataJayanth-9" },
            {
              name: "Instagram",
              url: "https://www.instagram.com/venkatajayanth9/",
            },
          ].map(({ name, url }, index) => (
            <motion.li
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              viewport={{ once: true }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={url}
                className="hover:text-blue-500 transition-colors hover:underline"
              >
                {name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
