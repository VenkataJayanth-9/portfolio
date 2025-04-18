"use client";
import { motion } from "framer-motion";
import { serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      id="services"
      className="w-full px-6 sm:px-[12%] py-12 scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-3xl sm:text-5xl font-Ovo mb-12"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {serviceData.map(({ icon, title }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 bg-white/20 backdrop-blur-lg shadow-lg
            hover:shadow-2xl hover:scale-105 transition-all duration-500
            flex flex-col items-center text-center cursor-pointer"
          >
            <div className="flex items-center justify-center rounded-full bg-gradient-to-br mb-6 shadow-lg">
              <Image
                src={icon}
                alt={title}
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
      
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
