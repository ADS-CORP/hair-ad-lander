import type { LandingPageVariantType } from '@/types/config';

export const GtmId = "GTM-ABC123";  // Replace with your actual GTM ID

// Define the variants enum for type safety
export enum VariantNames {
  Default = "default",
  Variant1 = "variant1",
  Variant2 = "variant2",
}

// Define the actual landing page variants configuration
export const LandingPageVariants: LandingPageVariantType[] = [
  {
    variant: VariantNames.Default,
    domainsettings: [
      {
        domain: 'localhost',
        startUrl: '/',
      },
      {
        domain: 'hair-relaxer-lander.vercel.app',
        startUrl: '/',
      }
    ]
  },
  {
    variant: VariantNames.Variant1,
    domainsettings: [
      {
        domain: 'localhost',
        startUrl: '/variant1',
      },
      {
        domain: 'hair-relaxer-lander.vercel.app',
        startUrl: '/variant1',
      }
    ]
  },
  {
    variant: VariantNames.Variant2,
    domainsettings: [
      {
        domain: 'localhost',
        startUrl: '/variant2',
      },
      {
        domain: 'hair-relaxer-lander.vercel.app',
        startUrl: '/variant2',
      }
    ]
  }
];