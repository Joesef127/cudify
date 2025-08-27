import { ArrowRight } from "lucide-react";
import CTASection from "../components/CTASection";

const TermsConditions = () => {
  return (
    <section className="pt-28 md:pt-36 lg:pt-44 w-full relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-[#101828]">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-6xl leading-snug md:leading-[52px] lg:leading-[72px] font-bold mb-2 text-black">
          Terms & Conditions
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-8 text-[#48505E]">
          Last updated: January 2024
        </p>

        {/* Content */}
        <div className="prose prose-gray max-w-none text-base md:text-lg leading-7">
          <p className="mb-6 text-foreground">
            Welcome to Cudify. These Terms and Conditions ("Terms") govern your
            use of our financial services platform and mobile application. By
            accessing or using our services, you agree to be bound by these
            Terms.
          </p>

          <h2 className="text-lg md:text-xl leading-7 font-semibold mb-4 text-foreground">
            1. Acceptance of Terms
          </h2>
          <p className="mb-6 text-foreground">
            By accessing, downloading, or using the Cudify application and
            services, you acknowledge that you have read, understood, and agree
            to be bound by these Terms and our Privacy Policy. If you do not
            agree to these Terms, you must not use our services.
          </p>

          <h2 className="text-lg md:text-xl leading-7 font-semibold mb-4 text-foreground">
            2. Eligibility
          </h2>
          <ul className="mb-6 space-y-2 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              You must be at least 18 years old to use our services
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              You must be legally capable of entering into binding contracts
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              You must provide accurate and complete information during
              registration
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              You must comply with all applicable laws and regulations in your
              jurisdiction
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              You must not be prohibited from using financial services
            </li>
          </ul>

          <h2 className="text-lg md:text-xl leading-7 font-semibold mb-4 text-foreground">
            3. Account Registration and Security
          </h2>
          <ul className="mb-6 space-y-2 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              You are responsible for maintaining the confidentiality of your
              account credentials
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              You must notify us immediately of any unauthorized access to your
              account
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              You are liable for all activities that occur under your account
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              We reserve the right to suspend or terminate accounts that violate
              these Terms
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              You may only create one account unless expressly authorized by us
            </li>
          </ul>

          <h2 className="text-lg md:text-xl leading-7 font-semibold mb-4 text-foreground">
            4. Financial Services
          </h2>
          <h3 className="text-base md:text-lg font-semibold mb-3 text-foreground">
            4.1 Payment Processing
          </h3>
          <ul className="mb-4 space-y-2 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              We facilitate secure payment transactions between users and
              service providers
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              All payments are processed through secure, encrypted channels
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              We may charge fees for certain payment processing services
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Payment processing times may vary depending on the method and
              financial institutions involved
            </li>
          </ul>

          <h3 className="text-base md:text-lg font-semibold mb-3 text-foreground">
            4.2 Lending Services
          </h3>
          <ul className="mb-6 space-y-2 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Loan applications are subject to credit checks and approval
              processes
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Interest rates and terms are determined based on individual credit
              profiles
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Borrowers are responsible for timely repayment according to agreed
              terms
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Failure to repay loans may result in additional fees and credit
              reporting
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              We reserve the right to refuse loan applications at our discretion
            </li>
          </ul>

          <h2 className="text-lg md:text-xl leading-7 font-semibold mb-4 text-foreground">
            5. Fees and Charges
          </h2>
          <ul className="mb-6 space-y-2 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Service fees will be clearly disclosed before any transaction
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Fees may vary based on transaction type, amount, and payment
              method
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Late payment fees may apply to overdue loan payments
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Currency conversion fees may apply to international transactions
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              We reserve the right to modify fees with appropriate notice
            </li>
          </ul>

          <h2 className="text-lg md:text-xl leading-7 font-semibold mb-4 text-foreground">
            6. Prohibited Activities
          </h2>
          <p className="mb-4 text-foreground">You agree not to:</p>
          <ul className="mb-6 space-y-2 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Use our services for any illegal or fraudulent activities
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Provide false or misleading information
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Attempt to circumvent security measures
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Use our services to launder money or finance terrorism
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Share your account credentials with others
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Reverse engineer or attempt to access our systems unauthorized
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Use our services for gambling or other restricted activities
            </li>
          </ul>

          <h2 className="text-lg md:text-xl leading-7 font-semibold mb-4 text-foreground">
            7. Data Protection and Privacy
          </h2>
          <ul className="mb-6 space-y-2 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              We collect and process personal data in accordance with our
              Privacy Policy
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              We implement industry-standard security measures to protect your
              data
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              We may share data with third parties as described in our Privacy
              Policy
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              You have rights regarding your personal data as outlined in
              applicable laws
            </li>
          </ul>

          <h2 className="text-lg md:text-xl leading-7 font-semibold mb-4 text-foreground">
            8. Intellectual Property
          </h2>
          <ul className="mb-6 space-y-2 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              All content, trademarks, and intellectual property on our platform
              belong to Cudify
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              You may not reproduce, distribute, or create derivative works
              without permission
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              You grant us a license to use content you submit to our platform
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              We respect intellectual property rights and expect users to do the
              same
            </li>
          </ul>

          <h2 className="text-lg md:text-xl leading-7 font-semibold mb-4 text-foreground">
            9. Limitation of Liability
          </h2>
          <ul className="mb-6 space-y-2 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Our liability is limited to the maximum extent permitted by law
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              We are not liable for indirect, incidental, or consequential
              damages
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Our total liability shall not exceed the fees paid by you in the
              preceding 12 months
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              We are not responsible for third-party services or content
            </li>
          </ul>

          <h2 className="text-lg md:text-xl leading-7 font-semibold mb-4 text-foreground">
            10. Termination
          </h2>
          <ul className="mb-6 space-y-2 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              You may terminate your account at any time by contacting us
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              We may suspend or terminate accounts for violation of these Terms
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Termination does not affect existing obligations or liabilities
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Certain provisions of these Terms survive termination
            </li>
          </ul>

          <h2 className="text-lg md:text-xl leading-7 font-semibold mb-4 text-foreground">
            11. Dispute Resolution
          </h2>
          <ul className="mb-6 space-y-2 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Disputes will be resolved through binding arbitration
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              You waive the right to participate in class action lawsuits
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Arbitration will be conducted under established arbitration rules
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Some disputes may be resolved through small claims court
            </li>
          </ul>

          <h2 className="text-lg md:text-xl leading-7 font-semibold mb-4 text-foreground">
            12. Changes to Terms
          </h2>
          <p className="mb-6 text-foreground">
            We reserve the right to modify these Terms at any time. Material
            changes will be communicated through our platform or via email.
            Continued use of our services after changes constitutes acceptance
            of the new Terms.
          </p>

          <h2 className="text-lg md:text-xl leading-7 font-semibold mb-4 text-foreground">
            13. Governing Law
          </h2>
          <p className="mb-6 text-foreground">
            These Terms are governed by and construed in accordance with the
            laws of the jurisdiction where Cudify is incorporated, without
            regard to conflict of law principles.
          </p>

          <h2 className="text-lg md:text-xl leading-7 font-semibold mb-4 text-foreground">
            14. Contact Information
          </h2>
          <p className="text-foreground">
            If you have any questions about these Terms and Conditions, please
            contact us at:
          </p>
          <ul className="mt-4 space-y-1 text-foreground">
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Email: legal@cudify.com
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Phone: +1 (555) 123-4567
            </li>
            <li>
              <ArrowRight className="inline-block mr-2 text-blue-500 w-4 h-4" />
              Address: 123 Financial District, Suite 456, New York, NY 10001
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <CTASection />
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
