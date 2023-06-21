import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import InfoPage from "./pages/InfoPage";
import NotFoundPage from "./pages/NotFoundPage";
import OfferPage from "./pages/OfferPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/offer/:name" element={<OfferPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
