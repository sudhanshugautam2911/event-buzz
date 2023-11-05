import React from "react";
import ListItem from "./ListItem";
import data from "../../../data.json";

export default function EventList() {
  const events = data.events;
  console.log("data ", events);

  return (
    <div className="flex flex-col justify-center items-center h-full">
        {events.map((event) => (
            <ListItem key={event.id} event={event}></ListItem>
        ))}
    </div>
  );
}
