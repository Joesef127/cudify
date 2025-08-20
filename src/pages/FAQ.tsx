import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const walletFaqs = [
  {
    question: "What is CudifyApp?",
    answer: "Cudify exists to make sending money to loved ones across Africa easier, faster, and more human. We're more than just a remittance platform—we're a movement to empower families and fuel dreams."
  },
  {
    question: "Which countries can I send money to?",
    answer: "You can send money to over 200 countries worldwide, with particular focus on African nations including Nigeria, Ghana, Kenya, South Africa, Uganda, and many more."
  },
  {
    question: "How long does it take for the money to arrive?",
    answer: "Most transfers arrive instantly or within minutes. Bank transfers may take 1-3 business days depending on the destination country and payment method."
  },
  {
    question: "Is Cudify safe to use?",
    answer: "Yes, Cudify is completely safe. We use bank-level security with end-to-end encryption, are regulated by financial authorities, and your money is protected by our security guarantee."
  }
];

const paymentFaqs = [
  {
    question: "What is CudifyApp?",
    answer: "Cudify is a secure payment platform that enables fast, reliable money transfers and payments across Africa and beyond, with great exchange rates and transparent pricing."
  },
  {
    question: "Which countries can I send money to?",
    answer: "Our payment services cover over 200 countries, with extensive coverage across Africa, Europe, and other major markets worldwide."
  },
  {
    question: "How long does it take for the money to arrive?",
    answer: "Payment processing times vary: instant transfers for wallet-to-wallet, 1-24 hours for bank transfers, and 1-3 business days for international wire transfers."
  },
  {
    question: "Is Cudify safe to use?",
    answer: "Absolutely. We maintain the highest security standards with regulatory compliance, fraud protection, and comprehensive insurance coverage for all transactions."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="text-sm text-primary font-semibold uppercase tracking-wider mb-4">
            FAQs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently asked
            <br />
            questions
          </h2>
        </div>

        <Tabs defaultValue="wallets" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="wallets">CudifyPayment</TabsTrigger>
            <TabsTrigger value="payments">Cudify for loan</TabsTrigger>
          </TabsList>

          <TabsContent value="wallets">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6">Wallets</h3>
              <Accordion type="single" collapsible className="w-full">
                {walletFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`wallet-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="payments">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6">Payments</h3>
              <Accordion type="single" collapsible className="w-full">
                {paymentFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`payment-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FAQ;