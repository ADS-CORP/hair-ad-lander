import type { HeaderDataType, NavigationDataType } from './types';
import type { FooterDataType } from '@/components/base/footer/types';

export const companyName = "People's Justice";

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
  accordion: {
    display: true,
    items: [
      {
        title: 'Company',
        links: [
          { text: 'About Us', link: '/about' },
          { text: 'Contact', link: '/contact' },
          { text: 'Privacy Policy', link: '/privacy' },
          { text: 'Terms of Service', link: '/terms' }
        ]
      },
      {
        title: 'Legal Resources',
        links: [
          { text: 'FAQ', link: '/faq' },
          { text: 'Eligibility', link: '/eligibility' },
          { text: 'Case Updates', link: '/updates' }
        ]
      }
    ]
  },
  emailSubmitSection: {
    display: true,
    title: 'Stay Updated',
    text: 'Get updates about your hair relaxer case',
    placeholder: 'Enter your email'
  },
  socialIconsSection: {
    display: true,
    icons: [
      {
        display: true,
        src: '/images/social/facebook.svg',
        alt: 'Facebook',
        link: 'https://facebook.com'
      },
      {
        display: true,
        src: '/images/social/twitter.svg',
        alt: 'Twitter',
        link: 'https://twitter.com'
      },
      {
        display: true,
        src: '/images/social/instagram.svg',
        alt: 'Instagram',
        link: 'https://instagram.com'
      }
    ]
  },
  companyLogo: {
    src: '/images/pj-logo1.png',
    alt: 'Hair Relaxer Compensation | People's Justice'
  },
  companyName: "Hair Relaxer Compensation | People's Justice",
  disclaimers: [
    "This website is an advertisement for legal services.",
    "The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice.",
    "Past results do not guarantee similar outcomes.",
    "Free case evaluation. No fee unless we win your case."
  ],
  bottomLinks: [
    { text: "Privacy Policy", link: "/privacy" },
    { text: "Terms of Service", link: "/terms" },
    { text: "Accessibility", link: "/accessibility" },
    { text: "Contact Us", link: "/contact" }
  ]
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
    {
      text: 'FAQ',
      link: '/faq',
    },
    {
      text: 'Contact',
      link: '/contact',
    }
  ],
};