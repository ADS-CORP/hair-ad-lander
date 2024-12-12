import type { ActionButtonType } from '@/components/ui/ActionButton/types';
import type { ImageType } from '@/types/image';

// Header and Navigation types
export type HeaderDataType = {
  logo: ImageType;
  button: {
    sticky: ActionButtonType;
    initial: ActionButtonType;
  };
  accountButton: {
    display: boolean;
  };
};

export type NavigationDataType = {
  logo: ImageType;
  items: Array<{
    text: string;
    link: string;
  }>;
};

// Section types
export type HeroSectionDataType = {
  enabled: boolean;
  title: string;
  video: {
    src: string;
  };
  phrases: string[];
  phraseInterval: number;
  description: string;
  primaryButton: ActionButtonType;
  secondaryButton: ActionButtonType;
};

export type ReviewType = {
  title: string;
  content: string;
  author: string;
};

export type ShortReviewsSectionDataType = {
  enabled: boolean;
  showIndividualReviews: boolean; // Add this line
  reviewsCount: string;
  reviewsPageUrl: string;
  showReviewTitles: boolean;
  reviews: ReviewType[];
  carouselOptions: {
    delay: number;
  };
};

export type ImageListSectionDataType = {
  enabled: boolean;
  title: string;
  description: string;
  tagline: string;
  image: ImageType;
  listTitle: string;
  list: string[];
};

export type FeatureType = {
  icon: ImageType;
  title: string;
  description?: string;
};

export type FeaturesSectionDataType = {
  enabled: boolean;
  features: FeatureType[];
};

export type FourStepsSectionDataType = {
  enabled: boolean;
  title: string;
  steps: Array<{
    image: ImageType;
    link?: string;
    description: string;
  }>;
};

export type BlogItemType = {
  image: ImageType;
  title: string;
  content: string;
};

export type BlogSectionDataType = {
  enabled: boolean;
  title: string;
  subtitle: string;
  items: BlogItemType[];
};

export type CtaListSectionDataType = {
  enabled: boolean;
  image: ImageType;
  title: string;
  description: string;
  list: string[];
  button: ActionButtonType;
};

export type StatsSectionDataType = {
  enabled: boolean;
  image: ImageType;
  title: string;
  description: string;
  items: Array<{
    number: string;
    text: string;
  }>;
  button: ActionButtonType;
  logoSection: {
    display: boolean;
    logos: ImageType[];
  };
};

export type ImageAccordionSectionDataType = {
  enabled: boolean;
  title: string;
  image: ImageType;
  items: Array<{
    title: string;
    content: string;
  }>;
};

export type TestimonialTabsSectionDataType = {
  enabled: boolean;
  title: string;
  tabs: Array<{
    label: string;
    value: string;
    content: {
      quote: string;
      author: string;
      image: ImageType;
    };
  }>;
};

export type ReviewsSectionDataType = {
  enabled: boolean;
  reviewsCount: string;
  reviewsPageUrl: string;
  reviews: ReviewType[];
  carouselOptions: {
    delay: number;
  };
};

export type RotatingImageSectionDataType = {
  enabled: boolean;
  images: ImageType[];
  title: string;
  description: string;
  button: ActionButtonType;
};

export type FaqSectionDataType = {
  enabled: boolean;
  title: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
};

export type SocialMediaSectionDataType = {
  enabled: boolean;
  title: string;
  hashtag: string;
  handle: {
    text: string;
    link: string;
  };
  posts: Array<{
    image: ImageType;
    link: string;
  }>;
};

export type FooterDataType = {
  accordion: {
    display: boolean;
    items: Array<{
      title: string;
      links: Array<{
        text: string;
        link: string;
      }>;
    }>;
  };
  emailSubmitSection: {
    display: boolean;
    title: string;
    text: string;
    placeholder: string;
  };
  socialIconsSection: {
    display: boolean;
    icons: Array<{
      display: boolean;
      src: string;
      alt: string;
      link: string;
    }>;
  };
  companyLogo: ImageType;
  companyName: string;
  disclaimers: string[];
  bottomLinks: Array<{
    text: string;
    link: string;
  }>;
};
