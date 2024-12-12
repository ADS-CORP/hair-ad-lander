'use client';
import type { LandingPageVariantType } from '@/types/config';
import type { ReactNode } from 'react';
import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

interface DomainSettingsContextProps {
  startUrl: string;
}

const DomainSettingsContext = createContext<DomainSettingsContextProps | undefined>(undefined);

interface DomainSettingsProviderProps {
  children: ReactNode;
  landingPageVariants: LandingPageVariantType[];
  variant: string;
}

// Fallback constant with default values
const FALLBACK_VARIANT: LandingPageVariantType = {
  variant: 'fallback',
  domainsettings: [{ domain: 'localhost', startUrl: '/' }],
};

export const DomainSettingsProvider: React.FC<DomainSettingsProviderProps> = ({
  children,
  landingPageVariants,
  variant,
}) => {
  const [startUrl, setStartUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const variantSettings = landingPageVariants.find((v) => v.variant === variant) || FALLBACK_VARIANT;

      // Try to find an exact match for the current domain
      let matchingDomainSetting = variantSettings.domainsettings.find((setting) => setting.domain === currentDomain);

      if (!matchingDomainSetting) {
        // If no exact match, look for a 'default' variant
        const defaultVariant = landingPageVariants.find((v) => v.variant === 'default');
        if (defaultVariant) {
          matchingDomainSetting = defaultVariant.domainsettings.find((setting) => setting.domain === currentDomain);
        }
      }

      if (matchingDomainSetting) {
        setStartUrl(matchingDomainSetting.startUrl);
      } else {
        // If still no match, use the fallback
        setStartUrl(FALLBACK_VARIANT.domainsettings[0]?.startUrl || '/');
      }
    } else {
      // Server-side rendering fallback
      setStartUrl(FALLBACK_VARIANT.domainsettings[0]?.startUrl || '/');
    }
  }, [landingPageVariants, variant]);

  return <DomainSettingsContext.Provider value={{ startUrl }}>{children}</DomainSettingsContext.Provider>;
};

export const useDomainSettings = (): DomainSettingsContextProps => {
  const context = useContext(DomainSettingsContext);
  if (!context) {
    throw new Error('useDomainSettings must be used within a DomainSettingsProvider');
  }

  return context;
};
