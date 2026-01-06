/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactMarkdown from "react-markdown";
import CTASection from "../components/CTASection";
import { useMarkdownFile } from "../hooks/useMarkdownFile";
import privacyPolicyPath from "../assets/docs/Privacy Policy - Cudify.md?url";

const PrivacyPolicy = () => {
  const { content, loading, error } = useMarkdownFile(privacyPolicyPath);

  if (loading) {
    return (
      <section className="pt-32 md:pt-40 lg:pt-44 w-full flex justify-center relative overflow-hidden">
        <div className="w-full max-w-[1000px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-muted-foreground">Loading privacy policy...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="pt-32 md:pt-40 lg:pt-44 w-full flex justify-center relative overflow-hidden">
        <div className="w-full max-w-[1000px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-red-500">Error loading privacy policy: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 md:pt-40 lg:pt-44 w-full flex justify-center relative overflow-hidden">
      <div className="w-full max-w-[1000px] px-4 sm:px-6 lg:px-8 relative z-10 gap-12 text-[#101828]">
        {/* Content */}
        <div className="prose prose-gray max-w-none text-base sm:text-lg leading-6 sm:leading-7">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[56px] lg:leading-[72px] font-bold mb-2 text-black"
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  className="text-lg sm:text-xl md:text-2xl leading-6 sm:leading-7 font-semibold mb-4 text-foreground mt-8"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 font-semibold mb-3 text-foreground mt-6"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p className="mb-6 text-foreground text-start" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="mb-6 space-y-2 text-foreground list-disc pl-6" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="mb-6 space-y-2 text-foreground list-decimal pl-6" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="text-foreground" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
              ),
              strong: ({ node, ...props }) => (
                <strong className="font-semibold" {...props} />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
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
