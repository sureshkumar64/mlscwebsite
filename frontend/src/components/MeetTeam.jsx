import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const teamMembers = [
  { name: "Siddhi Jadhav", role: "Lead", img: "/Siddhi.jpg" },
  { name: "Aditya Baldawa", role: "Co-Lead", img: "/Aditya.jpg" },
  { name: "Rishika Rajput", role: "Secretary", img: "/Rishika.jpg" },
  { name: "Suresh Kumar", role: "Web Developer Lead", img: "/Suresh.jpg" },
  { name: "Parth Nerkar", role: "Web Developer Lead", img: "/Parth.jpg" },
  { name: "Ayush Shankarpure", role: "Finance & Resources Head", img: "/Saharsh.jpg" },
  { name: "Vaibhav Shingne", role: "AIML lead", img: "/Vaibhav.jpg" },
  { name: "Vishal DUDHAL", role: "Event Director", img: "/Vishal.jpg" },
  { name: "Ayush Borkar", role: "Design Head", img: "/AyushB.jpg" },
  { name: "Shreya Thorat", role: "Publicity Head", img: "/Shreya.jpg" },
  { name: "Suresh Kumar", role: "Media & Production Lead", img: "/Suresh.jpg" },
  { name: "Om Chougule ", role: "Media & Production Lead", img: "/Om.jpg" },
  { name: "Ayush Shankarpure", role: "Cybersecurity Lead", img: "/Ayush.jpg" },
  { name: "Siddhi Jadhav", role: "Cloud-Lead", img: "/Siddhi.jpg" },
  { name: "Om Chougule ", role: "Event Director", img: "/Om.jpg" },
  { name: "Aditya Baldawa", role: "Chief Technical Coordinator", img: "/Aditya.jpg"},
  { name: "Parth Nerkar", role: "Publicity Head", img: "/Parth.jpg" },
  { name: "Suresh Kumar", role: "Video Editor", img: "/Suresh.jpg" },
];

const roles = [
  "All",
  "Lead",
  "Co-Lead",
  "Secretary",
  "Web Developer Lead",
  "Event Director",
  "Finance & Resources Head",
  "Media & Production Lead",
  "AIML lead",
  "Cybersecurity Lead",
  "Cloud-Lead",
  "Design Head",
  "Publicity Head",
  "Video Editor",
];

const MeetTeam = () => {
  const [selectedRole, setSelectedRole] = useState("All");

  // Filter members based on role
  const filteredMembers =
    selectedRole === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.role === selectedRole);

  return (
    <section className="bg-[#0E1525] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6 sm:mb-10 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]">
          Meet Our Team
        </h2>

        {/* Role Filter Tabs */}
        {/* Mobile: Horizontal Scrollable */}
        <div className="sm:hidden mb-8 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 w-max px-2">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition whitespace-nowrap ${
                  selectedRole === role
                    ? "bg-yellow-400 text-black shadow-lg"
                    : "bg-transparent text-gray-300 hover:text-yellow-400"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: Centered Wrap */}
        <div className="hidden sm:flex flex-wrap justify-center gap-3 mb-12 bg-[#1A2238]/50 border border-white/10 px-6 py-3 rounded-full">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedRole === role
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "bg-transparent text-gray-300 hover:text-yellow-400"
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 35 },
          }}
        >
          {filteredMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-[#1A2238]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.6)] transition transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-48 sm:h-56 object-cover rounded-t-2xl"
                  />
                </div>

                {/* Info */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-400">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {member.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MeetTeam;
