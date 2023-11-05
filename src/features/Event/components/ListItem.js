import React from "react";

export default function ListItem({ event }) {
  const handleClick = () => {
    // Open the link in a new tab
    window.open(event.regLink, "_blank");
  };
  return (
    // bg-slate-50 hover:bg-slate-100 rounded-md ring-1 ring-slate-200 shadow-sm
    <article className="flex flex-col mb-4 p-6 max-w-md md:max-w-3xl">
      <img src={event.img} alt="" className="h-96 object-contain flex-none  " />
      <div className="min-w-0 relative flex-auto mt-4 md:mt-0">
        {event.eventPosted ? (
          <div className="text-xs font-semibold text-purple-700 my-3">
            By {event.organizer} on {event.eventPosted}
          </div>
        ) : (
          <div className="text-xs font-semibold text-purple-700 my-3">
            By {event.organizer} on ________
          </div>
        )}
        <h2 className="font-semibold text-slate-600  truncate text-3xl leading-10 cursor-pointer">
          {event.title}
        </h2>

        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium whitespace-normal cursor-text">
          <div className="flex-none w-full mt-2 font-normal">
            <dt className="sr-only">description</dt>
            {event.eventDescription && event.eventDescription.map((line) => (
              <dd className="text-slate-500">{line}</dd>
            ))}
          </div>
        </dl>
        {/* <a href={event.regLink}> */}
        <button
          onClick={handleClick}
          className="text-lg font-semibold bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 rounded-md my-3"
        >
          Explore{" "}
        </button>
        {/* </a> */}
      </div>
    </article>
  );
}
