const stats = [
  { value: "5", label: "Active Projects" },
  { value: "1570", label: "Students Trained" },
  { value: "75,363", label: "People reached via social media" },
  { value: "170", label: "Webinar Attendees" },
  { value: "22", label: "Regional Champions" },
  { value: "15", label: "Countries Represented" },
];

export default function ImpactStats({
  columns = 3,
}: {
  columns?: 2 | 3;
}) {
  const gridCols = columns === 3 ? "grid-cols-3" : "grid-cols-2";

  return (
    <div className={`grid ${gridCols} gap-2.5 md:gap-6`}>
      {stats.map((s) => (
        <div key={s.label} className="bg-primary-dark rounded-lg md:rounded-xl p-2.5 md:p-7">
          <div className="font-header font-semibold text-lg md:text-[56px] leading-none text-white mb-2 md:mb-6">
            {s.value}
          </div>
          <div className="border-t border-stroke-sub/60 pt-1.5 md:pt-4">
            <span className="font-body text-[10px] md:text-sm text-white/80">{s.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}