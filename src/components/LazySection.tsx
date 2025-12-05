import React, { type ReactNode } from 'react';
import { useLazyLoad } from '../hooks/useLazyLoad';

interface LazySectionProps {
  id: string;
  children: ReactNode;
}

const LazySection: React.FC<LazySectionProps> = ({ id, children }) => {
  const { ref, isVisible } = useLazyLoad();

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </section>
  );
};

export default LazySection;
