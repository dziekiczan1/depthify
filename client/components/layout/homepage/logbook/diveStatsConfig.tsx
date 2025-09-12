import { MapPinIcon, ClockIcon, ThermometerIcon, EyeIcon } from 'lucide-react';
import { ReactNode } from 'react';

export interface DiveStatProps {
  icon: ReactNode;
  label: string;
  value: string;
  bg: string;
  iconColor: string;
}

export const diveStatsConfig: Omit<DiveStatProps, 'value'>[] = [
  {
    label: 'Depth',
    bg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    icon: <MapPinIcon className="icon-size-md" aria-hidden />,
  },
  {
    label: 'Time',
    bg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    icon: <ClockIcon className="icon-size-md" aria-hidden />,
  },
  {
    label: 'Temperature',
    bg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    icon: <ThermometerIcon className="icon-size-md" aria-hidden />,
  },
  {
    label: 'Visibility',
    bg: 'bg-green-100',
    iconColor: 'text-green-600',
    icon: <EyeIcon className="icon-size-md" aria-hidden />,
  },
] as const;
