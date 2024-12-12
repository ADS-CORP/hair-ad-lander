export enum TailwindImageFit {
  Cover = 'object-cover',
  Contain = 'object-contain',
  Fill = 'object-fill',
  None = 'object-none',
  ScaleDown = 'object-scale-down',
}

export type ImageType = {
  src: string;
  alt: string;
  fit?: TailwindImageFit;
};
