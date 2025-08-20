import React, { useState } from "react";

const events = [
  {
    title: "AzureExplore",
    description:
      "Explore cloud computing and Microsoft Azure by starting with foundational concepts and Azure services. Gain hands-on experience in setting up and managing resources, and learn to build and deploy applications using Azure's tools for practical development.",
    details:
      "Explore cloud computing and Microsoft Azure by starting with foundational concepts and Azure services. Gain hands-on experience in setting up and managing resources, and learn to build and deploy applications using Azure's tools for practical development.",
  },
  {
    title: "Walchand Imagine Cup",
    description:
      "India’s Stage for Future Innovators. Walchand Imagine Cup is a premier national competition by the Microsoft Learn Students’ Club, connecting India’s brightest student innovators with real-world industry challenges.",
    details:
      "Walchand Imagine Cup is a premier national competition inspired by Microsoft Imagine Cup. This platform fosters creativity and problem-solving using Microsoft technologies like Azure, Power Platform, AI, and GitHub Copilot. Gain mentorship, internships, and job opportunities while showcasing your innovation on a national stage.",
  },
];

function EventsTimeline() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="bg-[#0E1525] text-white py-20 px-6 flex justify-center items-center">
      <div className="max-w-5xl w-full text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-6xl font-bold text-yellow-400 mb-6 sm:mb-10 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]">
          Event Highlights
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
          Relive the milestones of <span className="text-yellow-400 font-semibold">WCE MLSC</span>!  
          From interactive workshops to hackathons and flagship events, here’s a glimpse of our exciting journey.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 via-yellow-200 to-transparent animate-pulse"></div>

          <div className="space-y-20">
            {events.map((event, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-yellow-400 border-4 border-[#0E1525] shadow-[0_0_20px_rgba(250,204,21,0.8)]"></div>

                {/* Card */}
                <div className="bg-gradient-to-br from-[#1A2238] to-[#101624] border border-yellow-400/20 hover:border-yellow-400/50 rounded-2xl shadow-xl p-8 w-full max-w-xl mt-12 transition-transform transform hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,0.6)]">
                  <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">{event.description}</p>

                  {/* Learn More Button */}
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
          <div className="bg-[#1A2238] text-white rounded-2xl p-10 max-w-2xl w-full shadow-2xl relative">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              {selectedEvent.title}
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">{selectedEvent.details}</p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default EventsTimeline;
