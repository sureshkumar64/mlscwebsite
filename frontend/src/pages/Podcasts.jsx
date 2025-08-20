import React from "react";

const PodcastSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0E1525] via-[#141B2D] to-[#0E1525] pt-16 pb-20 px-6 text-center text-white overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.7)] mb-4">
          The Transcend Buzz Show
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-14">
          Dive into <span className="text-yellow-400 font-medium">tech talks</span>,{" "}
          <span className="text-yellow-400 font-medium">student journeys</span>, and{" "}
          <span className="text-yellow-400 font-medium">expert interviews</span> 
          curated by our club members.
        </p>

        {/* Grid of Podcasts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            "lcvIvuxElw8?si=3kOG0qYF9S-wr2KU",
            "lz8XAsw2THY?si=0OWnI7-d9rEgSJP9",
            "NaWtpPdiWic?si=IFR-uQ0CRm3Klgj-",
            "mo_ejvvOGAU?si=q2EfUzivXPcbcxtl",
          ].map((id, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-xl border border-yellow-400/20 hover:border-yellow-400/60 transition transform hover:scale-[1.04] hover:shadow-[0_0_35px_rgba(250,204,21,0.4)]"
            >
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`Podcast ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-gray-400 text-sm mt-12">
          More episodes coming soon. Stay tuned!
        </p>
      </div>
    </section>
  );
};

export default PodcastSection;
