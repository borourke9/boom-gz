import SmartVideo from "./SmartVideo";

export default function ServiceCard({
  title, desc, video, poster
}: { title: string; desc: string; video: string; poster?: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/50 p-4 shadow-sm backdrop-blur-md hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      {/* media area */}
      <div className="relative overflow-hidden rounded-xl">
        {/* 16:9 aspect without extra deps */}
        <div className="relative pt-[56.25%]">
          <SmartVideo src={video} poster={poster} />
          {/* subtle sheen on hover */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity hover:opacity-20 bg-gradient-to-tr from-white/10 to-transparent" />
        </div>
      </div>

      <h3 className="mt-4 text-sm font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-black/60 mt-2">{desc}</p>
    </div>
  );
}










