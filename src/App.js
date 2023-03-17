import Home from "./pages/Home";
import Jobs from "./components/Jobs";
import Contact from "./pages/Contact";
import Navigation from "./components/Navbar";
import ApplyJob from "./components/ApplyJob";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply/:id" element={<ApplyJob />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
