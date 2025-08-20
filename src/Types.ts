export interface HeroFeatureProps {
  heading: string;
  desc: string;
  image: string;
  tag?: string;
  icon?: string;
  picture_tag?: string;
  price?: string;
  currency?: string;
  col_span: string;
  has_tag?: boolean;
}

export interface Currency {
  code: string;
  name: string;
  flag: string;
  rate: number;
}

export interface CurrencySeletorType {
  isOpen: boolean;
  onClose: () => void;
  currencies: Currency[];
  onSelect: (currency: Currency) => void;
  selectedCurrency: Currency;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export interface DropdownNavProps {
  icon: string;
  heading: string;
  desc: string;
  route: string;
}

export interface SecurityCardProps {
  icon: string;
  heading: string;
  desc: string;
}

export interface HowItWorksCardType {
  icon: string;
  heading: string;
  desc: string;
  isImage?: boolean;
}

export interface HeroStickyCardProps {
  image: string;
  name: string;
  timeStamp: string;
  amount: string;
  className?: string;
}

export interface HeroContentBoxProps {
  heading?: string;
  desc?: string;
  contentClass?: string;
}

export interface FeatureHeroSectionProps {
  backgroundImage: string;
  heading: string;
  desc: string;
  contentClass?: string;
}

export interface WhyChoseDataProps {
  icon: string;
  heading: string;
  desc: string;
}

export interface WhyChoseProps {
  header: string;
  subHeader: string;
  whyChoseData: WhyChoseDataProps[];
}

export interface SectionIntroProps {
  header: string;
  subHeader: string;
}

export interface HomeFAQProps {
  question: string;
  answer: string;
}

export interface CountriesType {
  flag: string;
  name: string;
  currency: string;
}

export interface FeatureType {
  title: string;
  description: string;
  image: string;
  bgPosition: string;
}

export interface Step {
  title: string;
  description: string;
  bgColor: string;
  component: React.ReactNode;
  colSpan?: number;
}

export interface ProcessSectionProps {
  header: string;
  subHeader: string;
  steps: Step[];
}

export interface TeamMembersType {
  image: string;
  name: string;
  position: string;
}
