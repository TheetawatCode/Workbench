import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
// import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      {/* <Header />  */}
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* หน้าแรก */}
          <Route path="/services" element={<Services />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/pricing" element={<Pricing />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="*" element={<NotFoundPage />} /> {/* 404 - Page Not Found */}
        </Routes>
      </div>
      {/* <Footer />  */}
    </Router>
  );
};

export default App;