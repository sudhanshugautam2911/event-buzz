import React from "react";
import data from "../../../data.json";
import { Link, useParams } from "react-router-dom";

export default function CompDetails() {
  const params = useParams();

  const comp = data.competitions.find((comp) => comp.id === params.id );

  if (!comp) {
    return <div>comp not found.</div>;
  }

  return (
    <div>
      <img
        src={comp.img}
        alt="thumbnail"
        className="w-full h-[50vh] object-contain rounded-sm ring-1 ring-slate-300 shadow-sm"
      />
      <div className="my-4 mx-4 mb-12">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-slate-800">
          {comp.title}
        </h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div className="flex-none max-w-2xl mt-2 font-normal space-y-4 text-slate-600">
            <dt className="sr-only">Details</dt>
            <dd ><span className="text-lg font-semibold">Eligibility:</span> {comp.eligibility}</dd>
            <dd><span className="text-lg font-semibold">Registration Link:</span> <a href={comp.regLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">{comp.regLink}</a></dd>
            <dd><span className="text-lg font-semibold">Description:</span> {comp.description}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
