import { MapPinIcon, ClockIcon, ThermometerIcon, EyeIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { DiveStatKey, DiveStatLabel } from '@/lib/homepage/logbook';
import { DiveSpot, DiveStatUnit } from '@/lib/homepage/dives';

export interface DiveStatProps {
  statKey: keyof DiveSpot['stats'] | 'bestTime';
  icon: ReactNode;
  label: string;
  value: string;
  bg: string;
  iconColor: string;
  unit: string;
}

export const diveStatsConfig: Omit<DiveStatProps, 'value'>[] = [
  {
    statKey: DiveStatKey.DEPTH,
    label: DiveStatLabel.DEPTH,
    bg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    icon: <MapPinIcon className="icon-size-md" aria-hidden />,
    unit: DiveStatUnit.METER,
  },
  {
    statKey: DiveStatKey.TIME,
    label: DiveStatLabel.TIME,
    bg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    icon: <ClockIcon className="icon-size-md" aria-hidden />,
    unit: DiveStatUnit.MINUTES,
  },
  {
    statKey: DiveStatKey.TEMPERATURE,
    label: DiveStatLabel.TEMPERATURE,
    bg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    icon: <ThermometerIcon className="icon-size-md" aria-hidden />,
    unit: DiveStatUnit.CELSIUS,
  },
  {
    statKey: DiveStatKey.VISIBILITY,
    label: DiveStatLabel.VISIBILITY,
    bg: 'bg-green-100',
    iconColor: 'text-green-600',
    icon: <EyeIcon className="icon-size-md" aria-hidden />,
    unit: DiveStatUnit.METER,
  },
  {
    statKey: DiveStatKey.BESTTIME,
    label: DiveStatLabel.BESTTIME,
    bg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    icon: <ClockIcon className="icon-size-md" aria-hidden />,
    unit: '',
  },
] as const;
