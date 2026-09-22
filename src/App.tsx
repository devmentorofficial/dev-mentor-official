import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Page Imports
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Internships from "./pages/Internships";
import About from "./pages/About";
import Contact from "./pages/Contact";

function AppContent() {
  const location = useLocation();
  const isWelcome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfc]">
      {/* Dynamic Reset Scroll behavior on navigation */}
      <ScrollToTop />
      
      {/* Nav displayed on all pages except Welcome page */}
      {!isWelcome && <Navbar />}
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback route back to Welcome page */}
          <Route path="*" element={<Welcome />} />
        </Routes>
      </main>
      
      {/* Footer displayed on all pages except Welcome page */}
      {!isWelcome && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

