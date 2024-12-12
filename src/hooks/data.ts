'use client';

import { useDomainSettings } from '@/context/DomainSettingsContext';
import type {
  CtaListSectionDataType,
  FourStepsSectionDataType,
  HeaderDataType,
  HeroSectionDataType,
  NavigationDataType,
  RotatingImageSectionDataType,
  StatsSectionDataType,
} from '@/types/data';
import type { ImageType } from '@/types/image';
import { TailwindImageFit } from '@/types/image';

// Hook for Hero Section Data
export const useHeroSectionData = (data: Partial<HeroSectionDataType> = {}): HeroSectionDataType => {
  const { startUrl } = useDomainSettings();

  return {
    enabled: data.enabled ?? false,
    title: data.title ?? '-',
    video: {
      src: data.video?.src ?? '-',
    },
    phrases: data.phrases ?? ['-', '-', '-', '-'],
    phraseInterval: data.phraseInterval ?? 2700,
    description: data.description ?? '-',
    primaryButton: {
      display: data.primaryButton?.display ?? false,
      text: data.primaryButton?.text ?? '-',
      link: data.primaryButton?.link ?? startUrl ?? '/',
      icon: data.primaryButton?.icon,
      iconPosition: data.primaryButton?.iconPosition,
    },
    secondaryButton: {
      display: data.secondaryButton?.display ?? false,
      text: data.secondaryButton?.text ?? '-',
      link: data.secondaryButton?.link ?? startUrl ?? '/',
      icon: data.secondaryButton?.icon,
      iconPosition: data.secondaryButton?.iconPosition,
    },
  };
};

// Hook for Header Data
export const useHeaderData = (data: Partial<HeaderDataType> = {}): HeaderDataType => {
  const { startUrl } = useDomainSettings();

  return {
    logo: {
      src: data.logo?.src ?? '-',
      alt: data.logo?.alt ?? '-',
    },
    button: {
      sticky: {
        display: data.button?.sticky?.display ?? false,
        text: data.button?.sticky?.text ?? '-',
        link: data.button?.sticky?.link ?? startUrl ?? '/',
        icon: data.button?.sticky?.icon,
        iconPosition: data.button?.sticky?.iconPosition,
      },
      initial: {
        display: data.button?.initial?.display ?? false,
        text: data.button?.initial?.text ?? '-',
        link: data.button?.initial?.link ?? startUrl ?? '/',
        icon: data.button?.initial?.icon,
        iconPosition: data.button?.initial?.iconPosition,
      },
    },
    accountButton: {
      display: data.accountButton?.display ?? false,
    },
  };
};

// Hook for Navigation Data
export const useNavigationData = (data: Partial<NavigationDataType> = {}): NavigationDataType => {
  const { startUrl } = useDomainSettings();

  return {
    logo: {
      src: data.logo?.src ?? '-',
      alt: data.logo?.alt ?? '-',
    },
    items: data.items?.map((item) => ({
      text: item.text ?? '-',
      link: item.link ?? startUrl ?? '/',
    })) ?? [
      { text: '-', link: '/' },
      { text: '-', link: startUrl ?? '/' },
    ],
  };
};

// Hook for Four Steps Section Data
export const useFourStepsSectionData = (data: Partial<FourStepsSectionDataType> = {}): FourStepsSectionDataType => {
  const { startUrl } = useDomainSettings();

  return {
    enabled: data.enabled ?? false,
    title: data.title ?? '-',
    steps: data.steps?.map((step) => ({
      image: {
        src: step.image?.src ?? '-',
        alt: step.image?.alt ?? '-',
        fit: step.image?.fit ?? TailwindImageFit.Cover,
      },
      link: step.link ?? startUrl ?? '/',
      description: step.description ?? '-',
    })) ?? [
      {
        image: {
          src: '-',
          alt: '-',
          fit: TailwindImageFit.Cover,
        },
        link: startUrl ?? '/',
        description: '-',
      },
      {
        image: {
          src: '-',
          alt: '-',
          fit: TailwindImageFit.Cover,
        },
        link: startUrl ?? '/',
        description: '-',
      },
      {
        image: {
          src: '-',
          alt: '-',
          fit: TailwindImageFit.Cover,
        },
        link: startUrl ?? '/',
        description: '-',
      },
      {
        image: {
          src: '-',
          alt: '-',
          fit: TailwindImageFit.Cover,
        },
        link: startUrl ?? '/',
        description: '-',
      },
    ],
  };
};

// Hook for CTA List Section Data
export const useCtaListSectionData = (data: Partial<CtaListSectionDataType> = {}): CtaListSectionDataType => {
  const { startUrl } = useDomainSettings();

  return {
    enabled: data.enabled ?? false,
    image: {
      src: data.image?.src ?? '-',
      alt: data.image?.alt ?? '-',
      fit: data.image?.fit ?? TailwindImageFit.Cover,
    },
    title: data.title ?? '-',
    description: data.description ?? '-',
    list: data.list ?? ['-', '-', '-', '-', '-', '-'],
    button: {
      display: data.button?.display ?? false,
      text: data.button?.text ?? '-',
      link: data.button?.link ?? startUrl ?? '/',
      icon: data.button?.icon,
      iconPosition: data.button?.iconPosition,
    },
  };
};

// Hook for Stats Section Data
export const useStatsSectionData = (data: Partial<StatsSectionDataType> = {}): StatsSectionDataType => {
  const { startUrl } = useDomainSettings();

  return {
    enabled: data.enabled ?? false,
    image: {
      src: data.image?.src ?? '-',
      alt: data.image?.alt ?? '-',
      fit: data.image?.fit ?? TailwindImageFit.Cover,
    },
    title: data.title ?? '-',
    description: data.description ?? '-',
    items: data.items?.map((item) => ({
      number: item.number ?? '-',
      text: item.text ?? '-',
    })) ?? [
      { number: '-', text: '-' },
      { number: '-', text: '-' },
      { number: '-', text: '-' },
      { number: '-', text: '-' },
    ],
    button: {
      display: data.button?.display ?? false,
      text: data.button?.text ?? '-',
      link: data.button?.link ?? startUrl ?? '/',
      icon: data.button?.icon,
      iconPosition: data.button?.iconPosition,
    },
    logoSection: {
      display: data.logoSection?.display ?? false,
      logos: data.logoSection?.logos?.map((logo: ImageType) => ({
        src: logo.src ?? '-',
        alt: logo.alt ?? '-',
      })) ?? [
        { src: '-', alt: '-' },
        { src: '-', alt: '-' },
        { src: '-', alt: '-' },
        { src: '-', alt: '-' },
      ],
    },
  };
};

// Hook for Rotating Image Section Data
export const useRotatingImageSectionData = (
  data: Partial<RotatingImageSectionDataType> = {}
): RotatingImageSectionDataType => {
  const { startUrl } = useDomainSettings();

  return {
    enabled: data.enabled ?? false,
    images: data.images?.map((image) => ({
      src: image.src ?? '-',
      alt: image.alt ?? '-',
      fit: image.fit ?? TailwindImageFit.Cover,
    })) ?? [
      { src: '-', alt: '-', fit: TailwindImageFit.Cover },
      { src: '-', alt: '-', fit: TailwindImageFit.Cover },
      { src: '-', alt: '-', fit: TailwindImageFit.Cover },
    ],
    title: data.title ?? '-',
    description: data.description ?? '-',
    button: {
      display: data.button?.display ?? false,
      text: data.button?.text ?? '-',
      link: data.button?.link ?? startUrl ?? '/',
      icon: data.button?.icon,
      iconPosition: data.button?.iconPosition,
    },
  };
};
