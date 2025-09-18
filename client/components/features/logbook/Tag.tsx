import { clsx } from 'clsx';

type TagProps = {
  label: string;
  color: 'blue' | 'darkBlue' | 'cyan' | 'violet' | 'green';
  small?: boolean;
  className?: string;
};

const colorMap = {
  blue: 'bg-blue-500/20 text-blue-400',
  darkBlue: 'bg-blue-500/20 text-blue-800 font-medium',
  cyan: 'bg-cyan-500/20 text-cyan-400',
  violet: 'bg-violet-500/20 text-violet-400',
  green: 'bg-green-500/20 text-green-400',
};

export const Tag: React.FC<TagProps> = ({ label, color, small, className }) => (
  <span
    className={clsx(
      'block px-3 rounded-full',
      colorMap[color],
      small ? 'py-1 text-xs' : 'py-1.5 text-sm',
      className
    )}>
    {label}
  </span>
);
