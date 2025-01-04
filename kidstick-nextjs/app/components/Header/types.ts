export interface NavLinkProps {
    text: string;
    isActive?: boolean;
    suffix?: string;
  }
  
  export interface SocialIconProps {
    iconSrc: string;
    notificationCount?: number;
  }
  
  export interface ContactInfoProps {
    iconSrc: string;
    label: string;
    value: string;
  }