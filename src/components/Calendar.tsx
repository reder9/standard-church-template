import React, { useEffect, useState } from "react";
import churchConfig from "../config/churchConfig.json"; // Import configuration
import "./Calendar.css";
import HelmetLayout from "./Helmet";

interface Event {
  title: string;
  date: string; // ISO 8601 format
  time?: string;
  location?: string;
  description?: string;
}

const mockEvents: Event[] = [
  {
    title: "Sunday Service",
    date: "2024-11-26",
    time: "10:00 AM",
    location: "Main Sanctuary",
  },
  {
    title: "Youth Group",
    date: "2024-11-28",
    time: "6:30 PM",
    location: "Youth Center",
  },
  {
    title: "Bible Study",
    date: "2024-11-29",
    time: "7:00 PM",
    location: "Room 204",
  },
  {
    title: "Christmas Choir Practice",
    date: "2024-12-01",
    time: "3:00 PM",
    location: "Choir Room",
  },
];

const CalendarPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Mock event fetching for demonstration.
    // Replace this with an API or database call if needed.
    setEvents(mockEvents);
  }, []);

  const sortedEvents = events
    .filter((event) => new Date(event.date) >= new Date()) // Show only future events
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Sort by date

  return (
    <HelmetLayout title="Calendar">
      <div className="calendar-page container my-5">
        <header className="text-center mb-5">
          <h1 className="display-4">Church Calendar</h1>
          <p className="lead">
            Stay connected with our upcoming events and activities at{" "}
            {churchConfig.churchName}.
          </p>
        </header>

        {/* Dynamic Calendar Embed */}
        <div className="calendar-embed mb-5">
          <iframe
            src={churchConfig.calendarEmbedUrl} // Embed URL from config
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Church Calendar"
          ></iframe>
        </div>

        {/* Upcoming Events Section */}
        <div className="upcoming-events">
          <h2 className="mb-4">Upcoming Events</h2>
          {sortedEvents.length > 0 ? (
            <ul className="list-group">
              {sortedEvents.map((event, index) => (
                <li key={index} className="list-group-item mb-3">
                  <div className="event-title font-weight-bold">
                    {event.title}
                  </div>
                  <div className="event-date-time">
                    <span className="event-date">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                    {event.time && (
                      <>
                        {" "}
                        | <span className="event-time">{event.time}</span>
                      </>
                    )}
                  </div>
                  {event.location && (
                    <div className="event-location text-muted">
                      Location: {event.location}
                    </div>
                  )}
                  {event.description && (
                    <div className="event-description mt-2">
                      {event.description}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No upcoming events at this time.</p>
          )}
        </div>
      </div>
    </HelmetLayout>
  );
};

export default CalendarPage;
