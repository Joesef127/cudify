import { ArrowRight } from "lucide-react";
import CTASection from "../components/CTASection";

// const iconMap = {
//   "Account Information": (
//     <User className="inline-block mr-2 text-blue-500 w-4 h-4" />
//   ),
//   "Personal Details": (
//     <User className="inline-block mr-2 text-blue-500 w-4 h-4" />
//   ),
//   "Identity Verification": (
//     <ShieldCheck className="inline-block mr-2 text-green-500 w-4 h-4" />
//   ),
//   "Financial Information": (
//     <FileText className="inline-block mr-2 text-purple-500 w-4 h-4" />
//   ),
//   "Transaction Data": (
//     <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
//   ),
//   Communication: <Mail className="inline-block mr-2 text-pink-500 w-4 h-4" />,
//   "Survey Data": <Info className="inline-block mr-2 text-indigo-500 w-4 h-4" />,
//   "Marketing and Communications": (
//     <Globe className="inline-block mr-2 text-orange-500 w-4 h-4" />
//   ),
//   "Other Information": (
//     <CheckCircle className="inline-block mr-2 text-gray-500 w-4 h-4" />
//   ),
//   "Device Information": (
//     <FileText className="inline-block mr-2 text-blue-500 w-4 h-4" />
//   ),
//   "Usage Data": (
//     <ListChecks className="inline-block mr-2 text-green-500 w-4 h-4" />
//   ),
//   "Location Information": (
//     <Globe className="inline-block mr-2 text-purple-500 w-4 h-4" />
//   ),
//   "Cookies and Similar Technologies": (
//     <Lock className="inline-block mr-2 text-yellow-500 w-4 h-4" />
//   ),
// };

const PrivacyPolicy = () => {
  return (
    <section className="pt-44 pb-24 w-full relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-[#101828] ">
        <h1 className="text-6xl leading-[72px] font-bold mb-2 text-black">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-8 text-[#48505E]">
          Last updated: January 2024
        </p>

        <div className="prose prose-gray max-w-none text-lg leading-7">
          <p className="mb-6 text-foreground">
            At Cudify, we are committed to protecting your privacy and
            safeguarding your personal data. This Privacy Policy explains how we
            collect, use, disclose, and protect your information when you use
            our services.
          </p>

          <h2 className="text-xl leading-7 font-semibold mb-4 text-foreground">
            Information You Provide to Us
          </h2>
          <ul className="mb-6 space-y-2 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Account Information:</strong> when you create an account
              with the App, we may ask you to provide information such as your
              name, email address, phone number, and other contact details.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Personal Details:</strong> you may be asked to identify
              yourself such as your name, address, email, telephone number, bank
              account details, credit score, financial information or any
              credentials of information that could be used to identify you.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Identity Verification:</strong> we may collect documents
              or information to verify your identity, such as a copy of your ID,
              passport, or driver's license.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Financial Information:</strong> we use BNEP to confirm how
              financial information and bank transactions.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Transaction Data:</strong> details of the transactions you
              carry out through our services and of the fulfillment of your
              orders.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Communication:</strong> when you contact us, we may keep a
              record of that correspondence and any phone numbers used.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Survey Data:</strong> from time to time, we may also ask
              you to complete surveys that we use for research purposes. We may
              use this information to improve the App. You may also provide us
              feedback or other information about the App.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Marketing and Communications:</strong> your preferences in
              receiving marketing from us and our third parties and your
              communication preferences.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Other Information:</strong> any other information that you
              decide to share with us.
            </li>
          </ul>

          <h2 className="text-xl leading-7 font-semibold mb-4 text-foreground">
            How We Use Your Information
          </h2>
          <ul className="mb-6 space-y-2 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Provide Services:</strong> we use your information and
              any data that you provide to provide services to our customers,
              including any personal information, for the smooth running of your
              account and services.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Account Management:</strong> to administer your account
              and provide customer support and information that you request from
              us.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Identity Verification:</strong> facilitate your
              application with services on the App.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Transaction Processing:</strong> conduct and/or
              facilitate your transactions including facilitating payment or
              other specified functions to process transactions to perform
              credit-related activities or services requested by you and as may
              be specified within the relevant terms and conditions.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Communication:</strong> send you service-related
              information, such as confirmations, invoices, technical notices,
              updates, security alerts, and support and administrative messages.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Legal Compliance:</strong> comply with applicable laws.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Fraud Prevention:</strong> identify and prevent the
              amount of suspected data or the use of transaction and transaction
              that prevent data or suspected data to any third or third parties.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Marketing:</strong> with your consent, send you
              promotional and marketing materials about products and services
              that we think may be of interest to you, unless you have indicated
              that you do not wish to receive such communications. You can
              opt-out of receiving these communications at any time.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Security:</strong> protect, enhance, and boost cyber
              fraud, security breaches and potentially prohibited or illegal
              activities.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Analytics:</strong> analyze the use of our cyber fraud,
              security research and protecting integrity illegal activities.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Technical Issues:</strong> address technical issues and
              improve the functionality of our services.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Business Operations:</strong> for other business
              purposes that are compatible with this Policy as disclosed to you
              and purposes that improve our services.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Information We Collect Automatically
          </h2>
          <ul className="mb-6 space-y-2 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Device Information:</strong> information about your mobile
              device, including the hardware model, operating system and
              version, unique device identifiers, mobile network information.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Usage Data:</strong> information about your use of the
              App, including the areas of the App you visit, the time you spend
              on those areas, the actions you take while using the App, and how
              often and for how long you use the App.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Location Information:</strong> with your consent, we may
              collect information about your actual location when you use our
              mobile applications.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Cookies and Similar Technologies:</strong> we use cookies
              and similar tracking technologies to track the activity on our
              service and hold certain information.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            How We Share Your Information
          </h2>
          <ul className="mb-6 space-y-2 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Service Providers:</strong> we may share your personal
              information with third party service providers who perform
              services for us.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Business Partners:</strong> we may share information
              with our business partners to offer you certain products, services
              or promotions.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Legal Requirements:</strong> we may disclose your
              information if required to do so by law or in good faith belief
              that such action is necessary.
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              <strong>Business Transfers:</strong> in connection with any
              merger, sale of company assets, financing, or acquisition.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Data Security
          </h2>
          <p className="mb-6 text-foreground">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Your Rights
          </h2>
          <ul className="mb-6 space-y-2 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Access your personal information
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Correct inaccurate information
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Request deletion of your information
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Object to processing of your information
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Request portability of your information
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Contact Us
          </h2>
          <p className="text-foreground">
            If you have any questions about this Privacy Policy, please contact
            us at privacy@cudify.com
          </p>
        </div>
        <CTASection />
      </div>
    </section>
  );
};

export default PrivacyPolicy;
