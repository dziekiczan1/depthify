import {
  CalendarIcon,
  StarIcon,
  MapPinIcon,
  ClockIcon,
  ThermometerIcon,
  EyeIcon,
  CameraIcon,
} from 'lucide-react';
import { DiveLogEntry } from '@/lib/homepage/logbook';
import { cn } from '@/lib/utils';

export const DiveCard = ({ dive }: { dive: DiveLogEntry }) => {
  return (
    <div className="p-8 hover:bg-slate-50 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-lg font-semibold text-slate-900 mb-1">{dive.title}</h4>
          <div className="flex items-center text-slate-500 text-sm">
            <CalendarIcon className="w-4 h-4 mr-1" />
            {dive.date}
          </div>
        </div>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              className={cn(
                'w-4 h-4',
                i < dive.rating ? 'text-yellow-400 fill-current' : 'text-slate-300'
              )}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <DiveStat
          icon={<MapPinIcon className="w-4 h-4 text-blue-600" />}
          label="Głębokość"
          value={dive.depth}
          bg="bg-blue-100"
        />
        <DiveStat
          icon={<ClockIcon className="w-4 h-4 text-cyan-600" />}
          label="Czas"
          value={dive.time}
          bg="bg-cyan-100"
        />
        <DiveStat
          icon={<ThermometerIcon className="w-4 h-4 text-orange-600" />}
          label="Temperatura"
          value={dive.temperature}
          bg="bg-orange-100"
        />
        <DiveStat
          icon={<EyeIcon className="w-4 h-4 text-green-600" />}
          label="Widoczność"
          value={dive.visibility}
          bg="bg-green-100"
        />
      </div>

      <p className="text-slate-600 text-sm mb-3 leading-relaxed">{dive.description}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {dive.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center text-slate-500 text-sm">
          <CameraIcon className="w-4 h-4 mr-1" />
          {dive.photosCount} zdjęć
        </div>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Zobacz szczegóły →
        </button>
      </div>
    </div>
  );
};

export const DiveStat = ({
  icon,
  label,
  value,
  bg,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  bg: string;
}) => {
  return (
    <div className="flex items-center space-x-2 text-sm">
      <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center', bg)}>{icon}</div>
      <div>
        <div className="text-slate-500">{label}</div>
        <div className="font-semibold text-slate-900">{value}</div>
      </div>
    </div>
  );
};
