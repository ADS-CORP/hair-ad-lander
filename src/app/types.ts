export interface NavigationItem {
  text: string;
  link: string;
}

export interface Logo {
  src: string;
  alt: string;
}

export interface HeaderDataType {
  logo: Logo;
  navigation?: NavigationItem[];
}

export interface NavigationDataType {
  logo: Logo;
  items?: NavigationItem[];
}
