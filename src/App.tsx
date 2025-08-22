import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SendMoneyHome from "./pages/SendMoneyHome";
import RecieveMoney from "./pages/RecieveMoney";
import VirtualCard from "./pages/VirtualCard";
import CudifyMe from "./pages/CudifyMe";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQ from "./pages/FAQ";
import TermsConditions from "./pages/Terms&Conditions";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen sora">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/send_money_home" element={<SendMoneyHome />} />
          <Route path="/recieve_money" element={<RecieveMoney />} />
          <Route path="/virtual_card" element={<VirtualCard />} />
          <Route path="/cudify_me" element={<CudifyMe />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/terms_conditions" element={<TermsConditions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/*" element={<NotFound />} />
          {/* Add other routes here as needed */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
