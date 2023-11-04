import React from "react";
import ListItem from "./ListItem";
import data from "../../../data.json";
import { Link } from "react-router-dom";

export default function EventList() {
  const events = data.events;
  console.log("data ", events);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="divide-y divide-slate-500">
        {events.map((event) => (
          <Link to={`/events/${event.id}`}>
            <ListItem key={event.id} event={event}></ListItem>
          </Link>
        ))}
      </div>
    </div>
  );
}
