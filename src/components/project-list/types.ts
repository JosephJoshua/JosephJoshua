import { ImageProps } from 'next/image';

export type Project = {
  title: string;
  description: string;
  type: string;
  skills: string[];
  image: ImageProps['src'];
  sourceLink?: string;
  demoLink?: string;
};
