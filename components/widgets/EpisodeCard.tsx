import React, { useState } from "react";
import CheckIcon from "../Icons/CheckIcon";
import NavLink from "../NavLink";

interface EpisodeCardContent {
  id: string;
  episodeUrl: string;
  imageUrl: string;
  title: string;
  description: string;
  duration: number;
  episodeNumber: number;
}

export default function EpisodeCard(prop: EpisodeCardContent) {
  const { id, episodeUrl, title, duration, episodeNumber } = prop;
  const [completed, setCompleted] = useState('');
  const toggleCompleted = () => setCompleted(completed ? '' : 'completed');

  return (
    <NavLink
      href={`${episodeUrl}${id}`}
      className="group px-4 py-2 flex-center hover:bg-neutral-700 hover:shadow"
      exact={true}
    >
      <div
        className={`check-circle w-5 h-5 flex-center rounded-full border-2 border-neutral-400 mr-4 ${completed}`}
        onClick={toggleCompleted}
      >
        {completed && <CheckIcon color="#22c55e" />}
      </div>
      <div className="flex flex-col">
        <span className="text-sm opacity-70">Episode {episodeNumber}</span>
        <strong className="opacity-90">{title}</strong>
      </div>
      <div className="time-stamp flex-center w-12 text-xs ml-auto bg-neutral-700 py-1 px-2 rounded shadow group-hover:bg-neutral-600">
        {Math.round(duration)}m
      </div>
    </NavLink>
  );
}
