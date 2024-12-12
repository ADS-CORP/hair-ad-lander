// src/app/config.ts
import type { LandingPageVariantType, GtmIdType } from '@/types/config';

export const GtmId: GtmIdType = "GTM-ABC123";  // Replace with your actual GTM ID

// Define the variants as an array of LandingPageVariantType
export const LandingPageVariants: LandingPageVariantType[] = [
  {
    variant: 'default',
    domainsettings: [
      {
        domain: 'localhost',
        startUrl: '/'
      },
      {
        domain: 'hair-relaxer-lander.vercel.app',
        startUrl: '/'
      }
    ]
  },
  {
    variant: 'variant1',
    domainsettings: [
      {
        domain: 'localhost',
        startUrl: '/variant1'
      },
      {
        domain: 'hair-relaxer-lander.vercel.app',
        startUrl: '/variant1'
      }
    ]
  },
  {
    variant: 'variant2',
    domainsettings: [
      {
        domain: 'localhost',
        startUrl: '/variant2'
      },
      {
        domain: 'hair-relaxer-lander.vercel.app',
        startUrl: '/variant2'
      }
    ]
  }
];

// If you still need the enum for type checking elsewhere
export enum VariantNames {
  Default = 'default',
  Variant1 = 'variant1',
  Variant2 = 'variant2'
}