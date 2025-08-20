import React from "react";

function Sponsor() {
  const formEndpoint = "https://getform.io/f/brolqzoa";

  return (
    <section className="relative bg-gradient-to-b from-[#0E1525] via-[#141B2D] to-[#0E1525] min-h-screen text-white py-20 px-6 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.7)] mb-6">
          Sponsor WCE MLSC
        </h2>

        {/* Intro Text */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-4">
          Partner with <span className="text-yellow-400 font-semibold">one of Maharashtra's most vibrant technical communities</span>.
          Sponsoring WCE MLSC gives you visibility among{" "}
          <span className="text-yellow-400 font-semibold">top student talent</span>,{" "}
          future tech leaders, and an engaged developer ecosystem.
        </p>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Your support fuels <span className="text-yellow-400">innovation</span>,{" "}
          <span className="text-yellow-400">learning</span>, and{" "}
          <span className="text-yellow-400">real impact</span> through our
          workshops, podcasts, hackathons, and flagship events.
        </p>

        {/* Form */}
        <div className="rounded-2xl border border-white/10 shadow-2xl bg-white/5 backdrop-blur-md max-w-3xl mx-auto p-10 text-left hover:shadow-yellow-400/20 transition">
          <form action={formEndpoint} method="POST" className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                required
                className="w-full p-3 rounded-lg bg-[#0E1525] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Contact Person
              </label>
              <input
                type="text"
                name="contact"
                required
                className="w-full p-3 rounded-lg bg-[#0E1525] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-lg bg-[#0E1525] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                required
                placeholder="Enter 10-digit number"
                className="w-full p-3 rounded-lg bg-[#0E1525] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Sponsorship Interest
              </label>
              <select
                name="interest"
                required
                className="w-full p-3 rounded-lg bg-[#0E1525] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">-- Select an Option --</option>
                <option value="Title Sponsor">Title Sponsor</option>
                <option value="Gold Sponsor"> Gold Sponsor</option>
                <option value="Silver Sponsor">Silver Sponsor</option>
                <option value="Community Partner">Community Partner</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Message / Proposal
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full p-3 rounded-lg bg-[#0E1525] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0E1525] font-bold rounded-lg shadow-lg hover:scale-[1.02] hover:shadow-yellow-400/50 transition-transform"
            >
              Submit Sponsorship Request
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <p className="text-sm text-gray-400 mt-10">
          Have questions? Contact us directly at{" "}
          <a
            href="mailto:wcemlsc@gmail.com"
            className="text-yellow-400 underline hover:text-yellow-300"
          >
            wcemlsc@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Sponsor;
