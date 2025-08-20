import type {
  CountriesType,
  Currency,
  FeatureType,
  HomeFAQProps,
  WhyChoseDataProps,
} from "./Types";
import moneys from "./assets/icons/moneys.png";
import flash from "./assets/icons/flash.png";
import convert from "./assets/icons/convert.png";
import refresh_circle from "./assets/icons/refresh_circle.png";
import dark_dude_chatting from "./assets/images/dark_dude_chatting.jpg";
import globe from "./assets/images/globe.jpg";
import woman_pressing_laptop from "./assets/images/woman_pressing_laptop.jpg";
import bank from "./assets/icons/bank.png";
import global from "./assets/icons/global.png";
import card from "./assets/icons/card.png";
import dollar_circle from "./assets/icons/dollar_circle.png";
import double_user from "./assets/icons/double_user.png";
import type { HeroFeatureProps } from "./Types";
import nigeria from "./assets/icons/nigeria.png";
import spotify from "./assets/icons/spotify.png";
import cute_lady_selfie from "./assets/images/cute_lady_selfie.jpg";
import guitar_girl from "./assets/images/guitar_girl.jpg";
import old_couple from "./assets/images/old_couple.png";
import silver_globe from "./assets/images/silver_globe.jpg";
import guy_cudify_card from "./assets/images/guy_cudify_card.png";
import calling from "./assets/icons/calling.png";

export const countries: CountriesType[] = [
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    currency: "GBP",
  },
  {
    flag: "🇺🇸",
    name: "United State Dollar",
    currency: "USD",
  },
  {
    flag: "🇳🇬",
    name: "Nigerian Naira",
    currency: "NGN",
  },
  {
    flag: "🇬🇭",
    name: "Ghanaian Cedis",
    currency: "GHS",
  },
  {
    flag: "🇿🇦",
    name: "South African rand",
    currency: "ZAR",
  },
];

export const currencies: Currency[] = [
  { code: "GBP", name: "United Kingdom", flag: "🇬🇧", rate: 1 },
  { code: "NGN", name: "Nigerian Naira", flag: "🇳🇬", rate: 2100 },
  { code: "USD", name: "US Dollar", flag: "🇺🇸", rate: 0.79 },
  { code: "EUR", name: "Euro", flag: "🇪🇺", rate: 0.86 },
];

export const features: FeatureType[] = [
  {
    title: "Global Transfers",
    description:
      "Send money home and abroad. Whether you're sending to Africa.",
    image: globe,
    bgPosition: "left",
  },
  {
    title: "Receive Salary",
    description:
      "Get paid from clients or marketplaces abroad, without delays.",
    image: woman_pressing_laptop,
    bgPosition: "center",
  },
  {
    title: "Get Paid Early",
    description: "Receive refunds, paybacks, or shared expenses easily.",
    image: dark_dude_chatting,
    bgPosition: "right",
  },
];

export const sendWhyChoseData: WhyChoseDataProps[] = [
  {
    icon: moneys,
    heading: "Local Transactions",
    desc: "Make local-to-local payments through various channels like bank transfer, card, mobile money (MoMo), USSD, and more.",
  },
  {
    icon: convert,
    heading: " Real-Time Exchange",
    desc: "Get access to real-time currency exchange services to stay ahead of rate changes.",
  },
  {
    icon: refresh_circle,
    heading: "Flexible payment methods",
    desc: "Card payment, bank transfer or with your digital wallet.",
  },
  {
    icon: flash,
    heading: "Fast Tansfer notifications",
    desc: "Quick, secure transfers—see your money move in real time.",
  },
];

export const recieveWhyChoseData: WhyChoseDataProps[] = [
  {
    icon: moneys,
    heading: "Cheap transfers abroad",
    desc: "Make local-to-local payments through various channels like bank transfer, card, mobile money (MoMo), USSD, and more.",
  },
  {
    icon: convert,
    heading: "Best exchange rates",
    desc: "Get access to real-time currency exchange services to stay ahead of rate changes.",
  },
  {
    icon: refresh_circle,
    heading: "Competitive FX Rates",
    desc: "Benefit from great exchange rates, quick settlements, and smooth transactions via our dashboard, APIs, or OTC desk.",
  },
  {
    icon: moneys,
    heading: "Fast Tansfer notifications",
    desc: "Need help? Our support team is available 24/7 — real people, ready to assist anytime.",
  },
];

export const virtualWhyChoseData: WhyChoseDataProps[] = [
  {
    icon: flash,
    heading: "Instant Issuance",
    desc: "Get your card in minutes and start using it right away—no long forms or physical delivery needed",
  },
  {
    icon: moneys,
    heading: "Online Purchases on Global Platforms",
    desc: "Shop on international websites like Amazon, eBay, AliExpress, App stores, Travel platforms etc",
  },
  {
    icon: refresh_circle,
    heading: " Run Paid Ads on platforms",
    desc: "Eg Facebook Ads, Google Ads, Twitter Ads, TikTok Ads, etc.",
  },
  {
    icon: flash,
    heading: "Pay for International Subscriptions",
    desc: "Eg Netflix, Spotify, Apple Music, YouTube Premium. Enroll in Online Courses or Exams",
  },
];

export const navLinks = [
    { href: "/product", label: "Product", hasDropdown: true },
    { href: "/about", label: "About us" },
    { href: "faq", label: "FAQs" },
  ];

  export const productDropdown = [
    {
      icon: bank,
      heading: "Send Money home",
      desc: "Send Money home",
      route: "/send_money_home",
    },
    {
      icon: double_user,
      heading: "Cudify me",
      desc: "Send money to celebrity",
      route: "/cudify_me",
    },
    {
      icon: global,
      heading: "Receive money",
      desc: "Global International Transfer",
      route: "/recieve_money",
    },
    {
      icon: dollar_circle,
      heading: "Investment",
      desc: "Coming soon",
      route: "/investment",
    },
    {
      icon: card,
      heading: "Virtual Card",
      desc: "Secure digital payment",
      route: "/virtual_card",
    },
  ];

  export const featuresData: HeroFeatureProps[] = [
    {
      heading: "Send Money Home",
      desc: "Send money to individuals in your home country directly to the recipient’s bank account or  mobile wallet (multi-currencies available)s.",
      image: old_couple,
      icon: nigeria,
      currency: "NGN",
      picture_tag: "Send money home",
      price: "201,900",
      has_tag: false,
      col_span: "3",
    },
    {
      heading: "Receive Money from Anywhere in the world",
      desc: "Send money to family, individuals, or businesses—direct to bank accounts or mobile wallets.",
      image: cute_lady_selfie,
      icon: nigeria,
      currency: "NGN",
      picture_tag: "Recieve Money",
      price: "201,900",
      has_tag: false,
      col_span: "3",
    },
    {
      heading: "Shop/ Spend Globally",
      desc: "With our virtual card, you can now shop and spend on international platforms like Amazon, Netflix, Google Ads, and more.",
      image: guy_cudify_card,
      icon: spotify,
      currency: "USD",
      picture_tag: "Spotify",
      price: "16,000",
      has_tag: false,
      col_span: "3",
    },
    {
      heading: "Send to an Icon (“CudifyMe”)",
      desc: "Who has inspired you, brought a smile to your face or warmed your heart…show them some love or support.",
      image: guitar_girl,
      icon: nigeria,
      currency: "NGN",
      picture_tag: "Celebrity",
      price: "201,900",
      has_tag: false,
      col_span: "3",
    },
    {
      heading: "Investments",
      desc: "Invest in vetted opportunities back home from Mutual Funds to Properties, Stocks, Businesses.., we are here to ensure your money works for you so you work less.",
      image: silver_globe,
      icon: nigeria,
      currency: "NGN",
      picture_tag: "Shares",
      price: "201,900",
      tag: "Coming Soon",
      has_tag: true,
      col_span: "2",
    },
  ];

  export const securityCardData = [
    {
      icon: moneys,
      heading: "No Hidden Fees",
      desc: "What you see is what you pay. No hidden charges, ever.",
    },
    {
      icon: bank,
      heading: "Licensed & Regulated",
      desc: "We partner with licensed financial institutions to ensure safe, fast, and compliant transfers.",
    },
    {
      icon: calling,
      heading: "24/7 Human Support",
      desc: "Need help? Our support team is available 24/7. Real people, ready to assist anytime.",
    },
  ];

  export const banks = [
    'First Bank of Nigeria',
    'GTBank',
    'Access Bank',
    'Zenith Bank',
    'UBA',
    'Fidelity Bank',
    'Sterling Bank',
    'FCMB',
    'Union Bank',
    'Wema Bank'
  ];

  export const faqData: HomeFAQProps[] = [
    {
      question: "What is CudifyApp?",
      answer: "Cudify exists to make sending money to loved ones across Africa easier, faster, and more human. We’re more than just a remittance platform—we’re a movement to empower families and fuel dreams."
    },
    {
      question: "Which countries can I send money to?",
      answer: "Cudify exists to make sending money to loved ones across Africa easier, faster, and more human. We're more than just a remittance platform—we're a movement to empower families and fuel dreams."
    },
    {
      question: "How long does it take for the money to arrive?",
      answer: "Cudify exists to make sending money to loved ones across Africa easier, faster, and more human. We’re more than just a remittance platform—we’re a movement to empower families and fuel dreams."
    },
    {
      question: "Is Cudify safe to use?",
      answer: "Cudify exists to make sending money to loved ones across Africa easier, faster, and more human. We’re more than just a remittance platform—we’re a movement to empower families and fuel dreams."
    },
    {
      question: "Is Cudify safe to use?",
      answer: "Cudify exists to make sending money to loved ones across Africa easier, faster, and more human. We’re more than just a remittance platform—we’re a movement to empower families and fuel dreams."
    }
  ];