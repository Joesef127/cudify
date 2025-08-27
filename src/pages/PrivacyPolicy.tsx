import CTASection from "../components/CTASection";

const PrivacyPolicy = () => {
  return (
    <section className="pt-32 md:pt-40 lg:pt-44 w-full flex justify-center relative overflow-hidden">
      <div className="w-full max-w-[1000px] px-4 sm:px-6 lg:px-8 relative z-10 gap-12 text-[#101828]">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[56px] lg:leading-[72px] font-bold mb-2 text-black">
          Privacy Policy
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 text-[#48505E]">
          Last updated on June 10, 2025
        </p>

        {/* Content */}
        <div className="prose prose-gray max-w-none text-base sm:text-lg leading-6 sm:leading-7">
          <p className="mb-6 text-foreground">
            At Cudify, we are committed to protecting your privacy and
            safeguarding your personal data. This Privacy Policy explains how we
            collect, use, disclose, and protect your information when you use
            our services.
          </p>

          {/* Information You Provide */}
          <h2 className="text-lg sm:text-xl md:text-2xl leading-6 sm:leading-7 font-semibold mb-4 text-foreground">
            Information You Provide to Us
          </h2>
          <p>
            When you download, register with or use the App, we may ask you to
            provide information:
          </p>
          <ol className="mb-6 space-y-2 text-foreground list-disc">
            {[
              {
                text: "By which you may be personally identified, such as your name, address, email, telephone number, bank verification number, birth date, financial information or any combination of information that could be used to identify you ('personal information')",
              },
              {
                text: "We use ARKit to capture face 3D spatial orientation and facial expressions.",
              },
              {
                text: "That is about you but individually does not identify you, such as: information you provide by filling in forms on the App. This includes information provided at the time of registering to use the App. We may also ask you for information when you report a problem with the App.",
              },
              {
                text: "Records and copies of your correspondence (including email addresses and phone numbers) if you contact us.",
              },
              {
                text: "Your responses to surveys or questions that we might ask you to complete details of transactions you carry out through the App.",
              },
              {
                text: "Details of transactions you carry out through the App",
              },
            ].map((item, idx) => (
              <li key={idx} className="list-inside">
                {item.text}
              </li>
            ))}
          </ol>

          {/* How We Use Your Info */}
          <h2 className="text-lg sm:text-xl md:text-2xl leading-6 sm:leading-7 font-semibold mb-4 text-foreground">
            How We Use Your Information
          </h2>
          <p>
            We use information that we collect about you or that you provide to us,
            including any personal information, to:
          </p>
          <ul className="mb-6 space-y-2 text-foreground list-disc">
            {[ 
              "Provide you with the App and its contents and any other information that you request from us.",
              "Facilitate your activities with respect to the App.",
              "We use the data from Truedepth APIs when verifying our users to ensure the selfie being taken is of a live user for authentication and fraud reduction purposes. The Truedepth API information is processed entirely locally and the spatial orientation/facial expression data is not submitted to any third (or first) parties.",
              "Contact you regarding administrative issues, such as questions about a specific request or otherwise respond to your comments or requests.",
              "Prevent, detect, mitigate and investigate fraud, security breaches and potentially prohibited or illegal activities.",
              "Prevent, detect, mitigate and investigate fraud, security breaches, and potentially prohibited or illegal activities.",
              "Help us operate the App.",
              "Deliver notices regarding your account.",
              "Comply with IRS and local tax requirements and for tax reporting purposes.",
              "Provide you with information, such as notices of investment opportunities via the App, or updates concerning investments that you have participated in.",
              "Send you information we believe is relevant to you, such as news, bulletins, marketing materials or other information.",
              "Enforce this Policy and the Terms and Conditions.",
              "Conduct user surveys and questionnaires.",
              "Comply with applicable law."
            ].map((item, idx) => (
              <li key={idx} className="list-inside">
                {item}
              </li>
            ))}
          </ul>
          <p className="mb-4">
            We use aggregated information to analyze the effectiveness of the
            App, to improve the App, and for other similar purposes. In
            addition, from time to time, we may undertake or commission
            statistical and other summary analyses of the general behavior and
            characteristics of users participating in the App, and may share
            aggregated information with third parties. We may collect aggregated
            information through the features of the software that supports the
            App, through cookies, and through other means described in this
            Policy.
          </p>
          <p>
            To enable us to better understand the characteristics of our users
            and/or to provide services tailored to your needs, we may combine
            your personal information with certain automatically-collected
            information that would not otherwise be personally identifiable. If
            we combine or link any automatically-collected, non-individually
            identifiable information with your personal information, the
            resulting combination will be treated as personal information under
            this Policy.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <CTASection />
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
