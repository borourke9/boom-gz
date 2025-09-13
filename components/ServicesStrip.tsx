'use client';
import IosTile from './IosTile';
import { Monitor, FileDigit, Sparkles, MapPin } from 'lucide-react';

const items = [
  {
    title: 'Websites',
    desc: 'Fast, branded sites',
    gradient: 'bg-[linear-gradient(135deg,#3DA0FF_0%,#004CFF_100%)]',
    icon: <Monitor size={28} strokeWidth={2.2} />,
  },
  {
    title: 'Google Ads',
    desc: 'Targeted campaigns',
    gradient: 'bg-[linear-gradient(135deg,#3DDC84_0%,#00A86B_100%)]',
    icon: <FileDigit size={28} strokeWidth={2.2} />,
  },
  {
    title: 'AI Solutions',
    desc: 'Smart automation',
    gradient: 'bg-[linear-gradient(135deg,#9B5CFF_0%,#6C2CFF_100%)]',
    icon: <Sparkles size={28} strokeWidth={2.2} />,
  },
  {
    title: 'Local SEO',
    desc: 'GBP & visibility',
    gradient: 'bg-[linear-gradient(135deg,#FF8A00_0%,#FF3D00_100%)]',
    icon: <MapPin size={28} strokeWidth={2.2} />,
  },
];

export default function ServicesStrip() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 mt-8">
      {items.map((it) => (
        <div key={it.title} className="group flex flex-col items-center gap-3">
          <IosTile label={it.title} gradient={it.gradient}>
            {it.icon}
          </IosTile>
          <div className="text-center">
            <p className="font-semibold">{it.title}</p>
            <p className="text-sm text-black/60 dark:text-white/60">{it.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}







