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
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mb-20">
        {teams.map((team) => (
         <button
        key={team.name}
        onClick={() => setActive(team)}
        className="flex flex-col items-center gap-3 text-center  max-w-[320px] group"
    >
  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-primary-lighter"> 
                <Image
                src={team.photo}
                alt={team.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <p className="font-header font-semibold text-strong text-base">{team.name}</p>
              <p className="font-body text-primary-dark text-lg mt-0.5">{team.role}</p>
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