export interface FooterLink {
  text: string;
  link: string;
}

export interface FooterDataType {
  accordion: {
    display: boolean;
    items: {
      title: string;
      links: FooterLink[];
    }[];
  };
  emailSubmitSection: {
    display: boolean;
    title: string;
    text: string;
    placeholder: string;
  };
  socialIconsSection: {
    display: boolean;
    icons: {
      display: boolean;
      src: string;
      alt: string;
      link: string;
    }[];
  };
  companyLogo: {
    src: string;
    alt: string;
  };
  companyName: string;
  disclaimers: string[];
  bottomLinks: FooterLink[];
}