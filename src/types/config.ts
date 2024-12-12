export interface DomainSetting {
  domain: string;
  startUrl: string;
}

export interface LandingPageVariantType {
  variant: string;
  domainsettings: DomainSetting[];
}

export type GtmIdType = string | undefined;

export interface PageMetaConfigType {
  name: string;
  description: string;
}
