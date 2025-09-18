import { Heading } from '@/components/ui/heading';
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

type TagListProps = {
  icon?: React.ReactNode;
  title?: string;
  items?: string[];
  color: 'blue' | 'darkBlue' | 'cyan' | 'violet' | 'green';
  className?: string;
  small?: boolean;
};

export const TagList: React.FC<TagListProps> = ({
  icon,
  title,
  items,
  color,
  className,
  small,
}) => {
  if (!items || items.length === 0) return null;

  const headingId = title ? title.replace(/\s+/g, '-').toLowerCase() : undefined;

  return (
    <div className={className}>
      {title && (
        <div className="flex items-center gap-2 mb-3">
          {icon && <span>{icon}</span>}
          <Heading
            as="h3"
            title={title}
            size="xs"
            headingClassName="text-white font-semibold !mb-0"
            id={headingId}
          />
        </div>
      )}
      <ul
        className="flex flex-wrap gap-2"
        {...(headingId ? { 'aria-labelledby': headingId } : { 'aria-label': 'Tags list' })}>
        {items.map((item, i) => (
          <li key={i}>
            <Tag label={item} color={color} small={small} />
          </li>
        ))}
      </ul>
    </div>
  );
};
