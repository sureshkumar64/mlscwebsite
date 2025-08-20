import React from 'react';
import { useParams } from 'react-router-dom';

const eventData = {
  'hackfest-2024': {
    title: 'Hackfest 2024',
    description: 'Full details about Hackfest 2024 go here.',
  },
  'ai-bootcamp': {
    title: 'AI Bootcamp',
    description: 'Details of the 3-day AI Bootcamp event go here.',
  },
  'devconnect': {
    title: 'DevConnect',
    description: 'All about DevConnect: guest speakers, agenda, etc.',
  },
};

const EventDetail = () => {
  const { eventId } = useParams();
  const event = eventData[eventId];

  if (!event) return <p className="text-center text-white mt-10">Event not found</p>;

  return (
    <div className="min-h-screen bg-[#0E1525] text-white p-8">
      <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
      <p className="text-lg">{event.description}</p>
    </div>
  );
};

export default EventDetail;
