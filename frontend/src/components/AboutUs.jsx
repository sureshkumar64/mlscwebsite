import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative bg-[#0E1525] text-white py-20 px-6 overflow-hidden">
      {/* 🌌 Background Glow Effects */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      {/* <div className="absolute bottom-10\5 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div> */}

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* 🔹 Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6 sm:mb-10 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About WCE MLSC
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-14 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          The <span className="text-cyan-400 font-semibold">WCE Microsoft Learn Students' Club (MLSC)</span>, 
          established on <span className="text-purple-400">July 30, 2024</span>, is dedicated to empowering 
          students with cutting-edge technical skills through the vast resources of Microsoft. 
          Our mission is to foster innovation, accelerate career growth, and inspire entrepreneurial thinking.
        </motion.p>

        {/* 🔹 Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Vision */}
          <motion.div
            className="relative group bg-[#1f2937] rounded-2xl p-8 shadow-lg border border-transparent hover:border-cyan-400/40 transition"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition"></div>
            <h3 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6 sm:mb-10 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]">Our Vision</h3>
            <p className="text-gray-300 relative z-10 leading-relaxed">
              To create a thriving community that fosters innovation, collaboration, and technical excellence, 
              empowering students to become future leaders in the global tech ecosystem.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="relative group bg-[#1f2937] rounded-2xl p-8 shadow-lg border border-transparent hover:border-purple-400/40 transition"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition"></div>
            <h3 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6 sm:mb-10 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]"> Our Mission</h3>
            <p className="text-gray-300 relative z-10 leading-relaxed">
              To build a collaborative community where students gain technical knowledge, 
              enhance career prospects, and embrace entrepreneurial thinking. 
              We achieve this by organizing impactful workshops, collaborative projects, hackathons, 
              and providing pathways to Microsoft certifications, leveraging Microsoft’s expert resources.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
