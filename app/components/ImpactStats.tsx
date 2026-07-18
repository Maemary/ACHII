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
  const gridCols =
    columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2";

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
      {stats.map((s) => (
        <div key={s.label} className="bg-primary-dark rounded-xl p-7">
          <div className="font-header font-semibold text-[56px] leading-none text-white mb-6">
            {s.value}
          </div>
          <div className="border-t border-stroke-sub/60 pt-4">
            <span className="font-body text-sm text-white/80">{s.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}