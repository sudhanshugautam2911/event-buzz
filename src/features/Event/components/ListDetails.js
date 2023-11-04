import React from "react";
import data from "../../../data.json";
import { useParams } from "react-router-dom";

export default function ListDetails() {
  const params = useParams();

  const event = data.events.find((event) => event.id === params.eventId);
  console.log("event  is ", event);

  if (!event) {
    return <div>Event not found.</div>;
  }

  return (
    <div>
      <img
        src={event.img}
        alt="thumbnail"
        className="w-full h-[50vh] object-contain rounded-sm ring-1 ring-slate-100 shadow-sm"
      />
      <div className="my-4">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-slate-800">
          {event.title}
        </h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div className="flex-none w-full mt-2 font-normal">
            <dt className="sr-only">description</dt>
            <dd className="text-slate-600">{event.description}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
