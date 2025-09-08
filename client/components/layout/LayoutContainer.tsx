import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function LayoutContainer({ children, className = '' }: ContainerProps) {
  return <div className={`relative max-w-7xl mx-auto px-4 lg:px-6 ${className}`}>{children}</div>;
}
