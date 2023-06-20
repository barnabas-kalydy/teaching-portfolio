import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contact"
          element={"this is just an example contact page"}
        />
        <Route path="*" element={"404 page here"} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
