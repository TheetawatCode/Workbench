import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      {/* <Header /> */} {/* แสดง Header ทุกหน้า */}
      <NavBar /> {/* แสดง NavBar ทุกหน้า */}
      <div>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* หน้าแรก */}
        <Route path="/about" element={<AboutPage />} /> {/* เกี่ยวกับเรา */}
        <Route path="/services" element={<ServicesPage />} /> {/* บริการ */}
        <Route path="/contact" element={<ContactPage />} /> {/* ติดต่อเรา */}
        <Route path="*" element={<NotFoundPage />} /> {/* 404 - Page Not Found */}
      </Routes>
      </div>
      <Footer /> {/* แสดง Footer ทุกหน้า */}
    </Router>
  );
};

export default App;