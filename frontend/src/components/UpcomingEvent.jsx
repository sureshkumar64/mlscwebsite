import React from "react";
import { motion } from "framer-motion";

const UpcomingEvent = () => {
  const formEndpoint = "https://getform.io/f/brolqzoa";
  const qrImage = "/QR.jpg";

  return (
    <section className="relative bg-[#0E1525] py-20 px-6 text-center text-blue-400 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* 🎉 Title */}
         <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-yellow-400 to-orange-300 mb-6 sm:mb-10 drop-shadow-[0_0_25px_rgba(250,204,21,0.8)]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
         Upcoming Event: <span className="text-cyan-300">Azure Explore 2025</span>
        </motion.h2>

        {/* ✨ Event tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-10 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Dive into{" "}
          <span className="text-cyan-400 font-semibold">Microsoft Azure</span> and
          unlock the world of cloud computing. Learn to build, deploy, and
          manage applications with real hands-on experience in{" "}
          <span className="text-blue-400 font-semibold">Azure services</span>.
        </motion.p> 
        {/* Registrations Badge */}
        <div className="inline-block px-6 py-2 mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 
        text-[#0E1525] font-semibold rounded-full shadow-lg animate-pulse">
          Registrations Open SOON!
        </div>

  
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/20 
          bg-[#111827]/80 backdrop-blur-lg p-8 text-left hover:shadow-cyan-500/30 transition"
        >
          <form
            action={formEndpoint}
            method="POST"
            encType="multipart/form-data"
            className="space-y-5"
          >
       
            {["Full Name", "Mobile Number", "Email ID", "College"].map((label, i) => (
              <div key={i}>
                <label className="block text-gray-300 mb-1">{label}</label>
                <input
                  type={label === "Email ID" ? "email" : label === "Mobile Number" ? "tel" : "text"}
                  name={label.toLowerCase().replace(/\s/g, "")}
                  required
                  placeholder={label}
                  pattern={label === "Mobile Number" ? "[0-9]{10}" : undefined}
                  className="w-full p-3 rounded-lg bg-[#0E1525] border border-gray-600 
                  text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            ))}

     
            <div className="text-center my-8">
              <p className="text-gray-300 mb-3 font-medium">Scan to complete your payment</p>
              <div className="inline-block p-3 rounded-xl border border-cyan-400/40 
              shadow-lg hover:shadow-cyan-400/50 transition">
                <img
                  src={qrImage}
                  alt="Payment QR"
                  className="mx-auto w-56 h-56 rounded-lg"
                />
              </div>
            </div>

      
            <div>
              <label className="block text-gray-300 mb-1">Upload Payment Screenshot</label>
              <input
                type="file"
                name="screenshot"
                accept="image/*"
                required
                className="w-full p-2 text-gray-300"
              />
            </div>

        
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-400 to-blue-500 
              text-[#0E1525] font-bold rounded-lg shadow-lg 
              hover:shadow-cyan-400/40 transition"
            >
              Register Now
            </motion.button>
          </form>
        </motion.div> */}
      </div>
    </section>
  );
};

export default UpcomingEvent;
