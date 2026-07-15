import Image from "next/image";

interface Volunteer {
  name: string;
  photo: string;
}

interface VolunteerGridProps {
  volunteers: Volunteer[];
}

export default function VolunteerGrid({ volunteers }: VolunteerGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
      {volunteers.map((volunteer) => (
        <div key={volunteer.name} className="flex flex-col items-center gap-3 text-center">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-primary-lighter">
            <Image src={volunteer.photo} alt={volunteer.name} fill className="object-cover object-center" />
          </div>
          <p className="font-body font-semibold text-strong text-sm">{volunteer.name}</p>
        </div>
      ))}
    </div>
  );
}
