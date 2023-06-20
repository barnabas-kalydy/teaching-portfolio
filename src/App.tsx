import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={"home"} />
        <Route path="/contact" element={"contact"} />
        <Route path="*" element={"404 page here"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
