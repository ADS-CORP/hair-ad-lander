import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export type WebsiteUrlParams = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
  ref?: string;
  [key: string]: string | undefined;
};

type TrackedLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  trackingParams?: WebsiteUrlParams;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
};

const addParamsToUrl = (url: string, params?: WebsiteUrlParams): string => {
  if (!params) return url;

  const urlObj = new URL(url, window.location.origin);
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      urlObj.searchParams.set(key, value);
    }
  });

  return urlObj.toString();
};

const TrackedLink: React.FC<TrackedLinkProps> = ({
  href,
  className,
  children,
  trackingParams,
  onClick,
  target,
  rel,
  ...props
}) => {
  const processedHref = React.useMemo(() => {
    try {
      return addParamsToUrl(href, trackingParams);
    } catch (e) {
      console.error('Error processing URL:', e);
      return href;
    }
  }, [href, trackingParams]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    
    // Add any additional tracking logic here if needed
    // For example, GTM events, analytics, etc.
  };

  const isExternal = href.startsWith('http') || href.startsWith('//');
  const finalRel = cn(
    rel,
    isExternal ? 'noopener noreferrer' : undefined
  );

  if (isExternal) {
    return (
      <a
        href={processedHref}
        className={className}
        target={target}
        rel={finalRel}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={processedHref}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default TrackedLink;