import clsx from 'clsx';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  as?: HeadingLevel;
  title: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
  gradient?: boolean;
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  headingClassName?: string;
  descriptionSize?: 'xl' | 'lg' | 'md' | 'sm';
  descriptionClassName?: string;
  color?: string;
  center?: boolean;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Tag = 'h1',
  title,
  highlight,
  subtitle,
  description,
  gradient = false,
  size = 'xl',
  headingClassName,
  descriptionSize = 'md',
  descriptionClassName = 'text-slate-600',
  color = 'text-slate-900',
  center = false,
  className,
}) => {
  const sizeClasses = {
    xl: 'text-4xl md:text-6xl lg:text-7xl font-bold leading-none mb-8',
    lg: 'text-3xl md:text-4xl font-bold mb-4',
    md: 'text-2xl md:text-3xl font-bold mb-4',
    sm: 'text-lg font-semibold mb-2',
    xs: 'text-base font-semibold mb-2',
  };

  const descriptionSizeClasses = {
    xl: 'text-xl md:text-2xl max-w-3xl leading-relaxed mb-8',
    lg: 'text-xl max-w-3xl mb-16',
    md: 'text-lg max-w-2xl mx-auto',
    sm: 'text-sm',
  };

  const gradientClasses = gradient ? 'gradient-cyan bg-clip-text text-transparent' : '';

  return (
    <div className={clsx(center && 'text-center', 'w-full', className)}>
      <Tag className={clsx(sizeClasses[size], color, headingClassName)}>
        {title}
        {highlight && (
          <>
            <br />
            <span className={gradientClasses}>{highlight}</span>
          </>
        )}
        {subtitle && (
          <>
            <br />
            <span>{subtitle}</span>
          </>
        )}
      </Tag>
      {description && (
        <p
          className={clsx(
            descriptionSizeClasses[descriptionSize],
            descriptionClassName,
            center && 'mx-auto'
          )}>
          {description}
        </p>
      )}
    </div>
  );
};
