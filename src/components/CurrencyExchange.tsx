import { useState, forwardRef } from "react";
import { ChevronDown, Search } from "lucide-react";
import type { ButtonProps, CurrencySeletorType } from "../Types";
import { currencies } from "../DataArrays";

// Inline UI Components
const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${
        className || ""
      }`}
      {...props}
    />
  )
);

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={`flex h-10 w-full border-input px-3 py-2 text-sm placeholder:text-muted-foreground 
        disabled:cursor-not-allowed disabled:opacity-50 ${className || ""}`}
    ref={ref}
    {...props}
  />
));

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    };

    // const sizes = {
    //   default: "h-10 ",
    //   sm: "h-9 rounded-md",
    //   lg: "h-11 rounded-md",
    //   icon: "h-10 w-10",
    // };

    return (
      <button
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-full py-2 px-3 text-sm font-medium 
          ring-offset-background transition-colors focus-visible:outline-none
           disabled:pointer-events-none disabled:opacity-50 
          ${variants[variant]} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

// Currency Selector Modal
const CurrencySelector = ({
  isOpen,
  onClose,
  currencies,
  onSelect,
}: CurrencySeletorType) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCurrencies = currencies.filter(
    (currency) =>
      currency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      currency.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-end">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-lg mx-4 max-h-96 overflow-hidden w-4/6">
        <div>
          <div className="relative p-4">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for Currency"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 text-xs bg-[#F3F4F8] rounded-2xl"
            />
          </div>
        </div>

        <div className="p-4 pt-0">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            Popular
          </h3>
          <div className="flex flex-col gap-2 max-h-24 overflow-y-scroll">
            {filteredCurrencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => {
                  onSelect(currency);
                  onClose();
                  setSearchTerm("");
                }}
                className="w-full flex items-center gap-1.5 sm:gap-3 rounded-lg hover:bg-muted/50 transition-colors text-left"
              >
                <span className="text-2xl">{currency.flag}</span>
                <div>
                  <div className="font-medium text-xs sm:text-sm">{currency.name}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {currency.code}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CurrencyExchange() {
  const [sendAmount, setSendAmount] = useState("100");
  const [sendCurrency, setSendCurrency] = useState(currencies[0]);
  const [receiveCurrency, setReceiveCurrency] = useState(currencies[1]);
  const [showSendSelector, setShowSendSelector] = useState(false);
  const [showReceiveSelector, setShowReceiveSelector] = useState(false);

  const calculateReceiveAmount = () => {
    const amount = parseFloat(sendAmount) || 0;
    const rate = receiveCurrency.rate / sendCurrency.rate;
    return (amount * rate).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const getExchangeRate = () => {
    const rate = receiveCurrency.rate / sendCurrency.rate;
    return `1 ${sendCurrency.code} = ${rate.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })} ${receiveCurrency.code}`;
  };

  //   const swapCurrencies = () => {
  //     const temp = sendCurrency;
  //     setSendCurrency(receiveCurrency);
  //     setReceiveCurrency(temp);
  //   };

  return (
    <div className="relative z-10 min-w-4/9 bg-white overflow-hidden text-[#667085] rounded-2xl p-4 shadow-lg flex flex-col gap-4 mx-2.5">
      <CurrencySelector
        isOpen={showSendSelector}
        onClose={() => setShowSendSelector(false)}
        currencies={currencies}
        onSelect={setSendCurrency}
        selectedCurrency={sendCurrency}
      />

      <CurrencySelector
        isOpen={showReceiveSelector}
        onClose={() => setShowReceiveSelector(false)}
        currencies={currencies}
        onSelect={setReceiveCurrency}
        selectedCurrency={receiveCurrency}
      />

      {/* <div className="w-full max-w-md mx-auto space-y-4"> */}
      {/* Send Section */}
      <Card className="bg-exchange-send border-0">
        <div className="flex items-center justify-between gap-2 bg-[#F3F4F8] rounded-lg pr-2 sm:pr-4">
          <div className="flex flex-col justify-start items-start gap-2">
            <label htmlFor="sendAmount" className="text-xs pt-4 pl-1.5 sm:pl-3">
              You Send
            </label>
            <Input
              type="number"
              id="sendAmount"
              value={sendAmount}
              onChange={(e) => setSendAmount(e.target.value)}
              className="text-sm sm:text-base lg:text-2xl leading-auto text-[#101828] font-bold border border-transparent focus:border-[#0D41E1] p-0 outline-none rounded-xl"
              placeholder="0"
            />
          </div>

          <Button
            variant="ghost"
            onClick={() => setShowSendSelector(true)}
            className="flex items-center gap-2 text-sm font-semibold hover:bg-muted/50 bg-white rounded-3xl"
          >
            <span className="text-sm lg:text-2xl">{sendCurrency.flag}</span>
            {sendCurrency.code}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      <div className="space-y-2 text-sm flex flex-col gap-2.5 lg:gap-5 border-y border-black/10 sm:py-2">
        <div className="flex justify-between">
          <span className="text-xs leading-auto font-normal">
            Bank Transfer Fee
          </span>
          <span className="text-[#101828] text-xs">0 {sendCurrency.code}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs leading-auto font-normal">
            Exchange rate
          </span>
          <span className="text-[#0D41E1] text-xs font-normal">
            {getExchangeRate()}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs leading-auto font-normal">Duration</span>
          <span className="text-xs leading-auto font-normal">
            Usually seconds
          </span>
        </div>
      </div>

      {/* Receive Section */}
      <Card className="bg-exchange-receive-light border-0">
        <div className="flex items-center justify-between bg-[#F3F4F8] rounded-lg p-2 lg:p-4">
          <div className="flex flex-col justify-start items-start gap-2">
            <label htmlFor="sendAmount" className="text-xs">
              Reciever get
            </label>
            <div className="text-base lg:text-xl font-bold">{calculateReceiveAmount()}</div>
          </div>

          <Button
            variant="ghost"
            onClick={() => setShowSendSelector(true)}
            className="flex items-center gap-2 text-sm font-semibold hover:bg-muted/50 bg-white rounded-3xl"
          >
            <span className="text-sm lg:text-2xl">{receiveCurrency.flag}</span>
            {receiveCurrency.code}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
