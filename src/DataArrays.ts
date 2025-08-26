import type {
  CountriesType,
  FAQCategory,
  FeatureType,
  HomeFAQProps,
  HowItWorksCardType,
  TeamMembersType,
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
import leslie_alexander from "./assets/images/leslie_alexander.jpg";
import brooklyn_simmons from "./assets/images/brooklyn_simmons.jpg";
import cameron_williamson from "./assets/images/Cameron_williamson.jpg";

export const footerNav = [
  { name: "About us", route: "/about" },
  { name: "Careers", route: "/careers" },
  { name: "Contact", route: "/contact" },
  { name: "FAQs", route: "/faq" },
];

export const footerNav2 = [
  { name: "Terms & Conditions", route: "/terms_conditions" },
  { name: "Privacy Policy", route: "/privacy_policy" },
  { name: "Cookie Policy", route: "/cookie_policy" },
];

export const footerNav3 = [
  { name: "+2348140915605" },
  { name: "hello@cudify.com" },
];

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

export const teamMembers: TeamMembersType[] = [
    {image: leslie_alexander, name: "Leslie Alexander", position: "Founder/CEO", linkedin: "https://linkedin.com/in/lesliealexander"},
    {image: brooklyn_simmons, name: "Brooklyn Simmons", position: "Founder/CEO", linkedin: "https://linkedin.com/in/lesliealexander"},
    {image: cameron_williamson, name: "Cameron Williamson", position: "Founder/CEO", linkedin: "https://linkedin.com/in/lesliealexander"}
]

export const howItWorksData: HowItWorksCardType[] = [
    {
      icon: "1",
      isImage: false,
      heading: "Create Your Account",
      desc: "Sign up in minutes with your email or phone number. No paperwork needed.",
    },
    {
      icon: "2",
      isImage: false,
      heading: "Activate Your Virtual Card",
      desc: "Get your virtual card instantly. Use it for online purchases, subscriptions, and more.",
    },
    {
      icon: "3",
      isImage: false,
      heading: "Top Up & Spend",
      desc: "Fund your wallet and start spending online anywhere major cards are accepted.",
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

export const cudifyWhyChoseData: WhyChoseDataProps[] = [
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
    icon: flash,
    heading: "Fast Tansfer notifications",
    desc: "Need help? Our support team is available 24/7 — real people, ready to assist anytime.",
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
      heading: "Send Money",
      desc: "Send money to individuals in your home country directly to the recipient’s bank account or  mobile wallet (multi-currencies available)s.",
      image: old_couple,
      icon: nigeria,
      currency: "NGN",
      picture_tag: "Send money home",
      price: "201,900",
      has_tag: false,
      col_span: "3",
      route: "/send_money_home",
      bgColor: "#E7ECFC",
    },
    {
      heading: "Receive Money from Anywhere in the world",
      desc: "Receive money from international employers, business partners, family etc.",
      image: cute_lady_selfie,
      icon: nigeria,
      currency: "NGN",
      picture_tag: "Recieve Money",
      price: "201,900",
      has_tag: false,
      col_span: "3",
      route: "/recieve_money",
      bgColor: "#E6FAFE",
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
      route: "/virtual_card",
      bgColor: "#F9E7FF",
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
      route: "/cudify_me",
      bgColor: "#E7F8F0",
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
      bgColor: "#FEF4E6",
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
  ];

  export const paymentFAQs: FAQCategory[] = [
    {
      title: "Wallets",
      items: [
        {
          question: "What is CudifyApp?",
          answer:
            "Cudify is a digital platform designed to make sending money across Africa simple, fast, and secure. We offer a user-friendly wallet for storing, sending, and receiving funds, as well as access to other financial services.",
        },
        {
          question: "How do I create a Cudify wallet?",
          answer:
            "Download the Cudify app from the App Store or Google Play, sign up with your details, and follow the prompts to set up your wallet in just a few minutes.",
        },
        {
          question: "Can I hold multiple currencies in my wallet?",
          answer:
            "Yes, Cudify wallets support multiple currencies, allowing you to store and manage funds in your preferred currency.",
        },
        {
          question: "Is my wallet secure?",
          answer:
            "Absolutely. Cudify uses advanced encryption and security protocols to keep your wallet and transactions safe.",
        },
      ],
    },
    {
      title: "Payments",
      items: [
        {
          question: "Which countries can I send money to?",
          answer:
            "You can send money from the UK to several African countries, including Nigeria, Ghana, Kenya, South Africa, and more. Check the app for the full list of supported countries.",
        },
        {
          question: "What payment methods are available?",
          answer:
            "Cudify supports bank transfers, card payments, mobile money (MoMo), and USSD payments for maximum flexibility.",
        },
        {
          question: "How long does it take for the money to arrive?",
          answer:
            "Transfers are typically instant or completed within a few minutes, depending on the destination and payment method.",
        },
        {
          question: "Are there any fees for sending money?",
          answer:
            "Cudify offers transparent pricing with no hidden fees. You’ll see the exact cost before confirming your transaction.",
        },
      ],
    },
    {
      title: "Security & Support",
      items: [
        {
          question: "Is Cudify safe to use?",
          answer:
            "Yes. Cudify is regulated by the Financial Conduct Authority and uses industry-leading security measures to protect your data and funds.",
        },
        {
          question: "What should I do if I have a problem with my transaction?",
          answer:
            "Contact our support team via the app or email hello@cudify.com. We’re here to help 24/7.",
        },
        {
          question: "Can I track my transfer?",
          answer:
            "Yes, you can track the status of your transfer in real time within the Cudify app.",
        },
        {
          question: "How do I update my account information?",
          answer:
            "Go to your profile in the app and select the details you wish to update. For security, some changes may require verification.",
        },
      ],
    },
  ];

  export const loanFAQs: FAQCategory[] = [
    {
      title: "Loan Basics",
      items: [
        {
          question: "What is Cudify Loan?",
          answer:
            "Cudify Loan is a service that allows eligible users to access quick, short-term loans directly through the Cudify app, with flexible repayment options.",
        },
        {
          question: "Who can apply for a loan?",
          answer:
            "Any verified Cudify user who meets our eligibility criteria can apply for a loan. Criteria include age, residency, and account activity.",
        },
        {
          question: "How do I apply for a loan?",
          answer:
            "Log in to the Cudify app, navigate to the Loans section, and follow the instructions to submit your application. Approval is fast and easy.",
        },
        {
          question: "How much can I borrow?",
          answer:
            "Loan amounts depend on your account history and eligibility. Check the app for your personalized loan offer.",
        },
      ],
    },
    {
      title: "Repayment & Fees",
      items: [
        {
          question: "What are the interest rates and fees?",
          answer:
            "Cudify offers competitive interest rates and transparent fees. All costs are clearly displayed before you accept a loan offer.",
        },
        {
          question: "How do I repay my loan?",
          answer:
            "Repayments can be made via your Cudify wallet, bank transfer, or card. You can also set up automatic payments for convenience.",
        },
        {
          question: "Can I repay early?",
          answer:
            "Yes, you can repay your loan early at any time without penalty. Early repayment may reduce your interest charges.",
        },
        {
          question: "What happens if I miss a payment?",
          answer:
            "If you miss a payment, please contact our support team immediately. Late payments may incur additional fees and affect your eligibility for future loans.",
        },
      ],
    },
    {
      title: "Security & Support",
      items: [
        {
          question: "Is my personal information safe?",
          answer:
            "Yes. Cudify uses strict security protocols and complies with data protection regulations to keep your information safe.",
        },
        {
          question: "Who do I contact for loan support?",
          answer:
            "You can reach our loan support team via the app or email hello@cudify.com for assistance with your loan application or repayment.",
        },
        {
          question: "Can I increase my loan limit?",
          answer:
            "Your loan limit may increase over time based on your repayment history and account activity. Check the app for updates to your eligibility.",
        },
        {
          question: "Are there any hidden charges?",
          answer:
            "No. All fees and charges are disclosed upfront before you accept a loan offer.",
        },
      ],
    },
  ];