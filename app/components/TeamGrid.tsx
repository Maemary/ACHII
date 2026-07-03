"use client";

import { useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

interface TeamGridProps {
  teams: TeamMember[];
}

export default function TeamGrid({ teams }: TeamGridProps) {
  const [active, setActive] = useState<TeamMember | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {teams.map((team) => (
          <button
            key={team.name}
            onClick={() => setActive(team)}
            className="text-left flex flex-col gap-3 bg-primary-lighter rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image src={team.photo} alt={team.name} fill className="object-contain object-center" />
            </div>
            <div>
              <p className="font-bold">{team.name}</p>
              <p className="text-sm text-muted font-semibold">{team.role}</p>
              <p className="text-xs mt-1 line-clamp-3">{team.bio}</p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-8 relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-4 right-4 text-strong/50 hover:text-strong text-xl leading-none"
            >
              ✕
            </button>
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6">
              <Image src={active.photo} alt={active.name} fill className="object-contain object-center" />
            </div>
            <h3 className="font-header font-semibold text-strong text-xl mb-1">{active.name}</h3>
            <p className="font-body text-primary-base text-sm mb-4">{active.role}</p>
            <p className="font-body text-sub text-sm leading-[1.7]">{active.bio}</p>
          </div>
        </div>
      )}
    </>
  );
}