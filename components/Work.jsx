"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets, workData } from "@/assets/assets";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Headings */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Projects
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-Ovo"
      >
        My Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Throughout my BTech journey, I have completed various projects to
        upskill myself.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-6">
        {workData.map((projects, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-lg cursor-pointer group overflow-hidden shadow-md transition-transform duration-500 hover:-translate-y-2"
          >
            <div
              className="w-full h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${projects.bgImage})` }}
            ></div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white w-10/12 p-4 rounded-md absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between shadow-lg 
                transition-all duration-500 group-hover:bottom-6"
            >
              <div>
                <h2 className="font-semibold text-lg">{projects.title}</h2>
                <p className="text-sm text-gray-600">{projects.description}</p>
              </div>
              <div className="border rounded-full border-black w-10 h-10 flex items-center justify-center shadow-md group-hover:bg-gray-200 transition">
                <Image
                  src={assets.send_icon}
                  alt="send icon"
                  width={20}
                  height={20}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.a
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-700 
        rounded-full py-3 px-10 mx-auto hover:bg-gray-100 transition"
      >
        Show more{" "}
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          width={16}
          height={16}
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
