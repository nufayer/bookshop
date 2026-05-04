const categoryThemes = {
  Story: "from-rose-300 via-rose-200 to-amber-100",
  Tech: "from-teal-300 via-cyan-200 to-slate-100",
  Science: "from-indigo-300 via-sky-200 to-cyan-50",
};

function getInitials(title) {
  return title
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function BookCover({ title, author, category, className = "" }) {
  const theme = categoryThemes[category] || "from-stone-300 via-orange-100 to-amber-50";

  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border border-base-300 bg-gradient-to-br ${theme} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.55),transparent_30%)]" />
      <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral">
        {category}
      </div>
      <div className="relative flex h-full min-h-[320px] flex-col justify-between p-6 text-neutral">
        <div className="text-6xl font-black tracking-tight opacity-70">{getInitials(title)}</div>
        <div className="space-y-2">
          <h3 className="max-w-[16ch] text-2xl font-black leading-tight">{title}</h3>
          <p className="text-sm font-medium opacity-80">by {author}</p>
        </div>
      </div>
    </div>
  );
}
