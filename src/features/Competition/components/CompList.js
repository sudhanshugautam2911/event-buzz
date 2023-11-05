import React from "react";
import ListItem from "./ListItem";
import data from "../../../data.json";
import { Link } from "react-router-dom";

export default function CompList() {
  const comp = data.competitions;
  console.log("data ", comp);

  return (
    <div className="flex justify-center items-center h-full mt-4">
      <div className="divide-y divide-slate-500">
        {comp.map((comp) => (
          <Link to={`/competition/${comp.id}`}>
            <ListItem key={comp.id} comp={comp}></ListItem>
          </Link>
        ))}
      </div>
    </div>
  );
}
