import { Heading } from '@/components/ui/heading';
import { Tag } from '@/components/features/logbook/Tag';

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
