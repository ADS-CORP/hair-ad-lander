'use client';

import { WebsiteUrlParams } from '@/components/controls/TrackedLink';
import { DomainSettingsProvider } from '@/context/DomainSettingsContext';
import { getUrlParams } from '@/utils/user-data';
import { GoogleTagManager } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

import Footer from '@/components/base/footer';
import { DynamicHeader, StaticHeader } from '@/components/base/header';

enum HeaderType {
  Static = 'static',
  Dynamic = 'dynamic',
}

// Define the known tracking parameter keys
const TRACKING_PARAM_KEYS = ['source', 'medium', 'campaign', 'content', 'term', 'ref'];

type LayoutProps = {
  children: ReactNode;
  data: any;
  config: any;
  headerType: HeaderType;
};

export default function BaseLayout({ children, data, config, headerType }: LayoutProps) {
  const [variant, setVariant] = useState('default');
  const rawPath = usePathname();
  const path = rawPath?.endsWith('/') && rawPath !== '/' ? rawPath.slice(0, -1) : rawPath;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentUrlParams = getUrlParams();
      const storedUrlParams = JSON.parse(localStorage.getItem('urlParams') || '{}');
      const storedPathData = JSON.parse(localStorage.getItem(path) || '{}');

      // Handle variant separately for the current path
      let pathVariant = storedPathData.variant || 'default';
      if ('variant' in currentUrlParams && currentUrlParams.variant !== 'default') {
        pathVariant = currentUrlParams.variant;
      }

      // Update global URL parameters
      const updatedUrlParams = { ...storedUrlParams };
      Object.entries(currentUrlParams).forEach(([key, value]) => {
        if (key !== 'variant' && storedUrlParams[key] !== value) {
          updatedUrlParams[key] = value;
        }
      });

      // Filter out tracking parameters from global URL parameters
      const filteredUrlParams = Object.fromEntries(
        Object.entries(updatedUrlParams).filter(
          ([key]) => !TRACKING_PARAM_KEYS.includes(key)
        )
      );

      // Save global URL parameters
      localStorage.setItem('urlParams', JSON.stringify(filteredUrlParams));

      // Save path-specific variant
      localStorage.setItem(path, JSON.stringify({ ...storedPathData, variant: pathVariant }));

      setVariant(pathVariant);
    }
  }, [path]);

  const renderHeader = () => {
    switch (headerType) {
      case HeaderType.Static:
        return <StaticHeader data={data} />;
      case HeaderType.Dynamic:
        return <DynamicHeader data={data} />;
      default:
        return null;
    }
  };

  return (
    <>
      {config.gtmId && <GoogleTagManager gtmId={config.gtmId} />}
      <DomainSettingsProvider landingPageVariants={config.landingPageVariants} variant={variant}>
        {renderHeader()}
        {children}
        <Footer data={data.FooterData} />
      </DomainSettingsProvider>
    </>
  );
}