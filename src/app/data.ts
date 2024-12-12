import type { HeaderDataType, NavigationDataType } from './types';
import type { FooterDataType } from '@/components/base/footer/types';

export const companyName = "Hair Relaxer";

export const HeaderData: HeaderDataType = {
  logo: {
    src: '/images/pj-logo1.png',
    alt: 'Company Logo',
  },
  navigation: [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About',
      link: '/about',
    },
  ],
};

export const FooterData: FooterDataType = {
  className: 'bg-[#41464f]',
  columns: [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
};

export const NavigationData: NavigationDataType = {
  logo: {
    src: '/images/pj-logo1.png',
    alt: 'Logo',
  },
  items: [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About',
      link: '/about',
    },
  ],
};
