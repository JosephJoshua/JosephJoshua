import BaseProps from '@/types/BaseProps';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export type PageSectionProps = BaseProps &
  PropsWithChildren<{
    as?: 'div' | 'section';
  }>;

const PageSection = ({ className, id, as = 'section', children }: PageSectionProps) => {
  const Component = as;

  return (
    <Component id={id} className={clsx('mx-auto px-6 w-full max-w-5xl', className)}>
      {children}
    </Component>
  );
};

export default PageSection;
