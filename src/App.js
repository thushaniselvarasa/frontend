import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Component/Landing"; // Correct the path
import About from "./Component/About"; // Correct the path
import Events from "./Component/Events"; // Correct the path
import Membership from "./Component/Membership"; // Correct the path
import Contact from "./Component/Contact"; // Correct the path
import Home from "./Component/Home";
import ExecutiveBoard from "./Component/ExecutiveBoard";
import Pastevents from "./Component/Pastevents";
import FeatureSection from "./Component/FeatureSection";
import Testimonials from "./Component/Testimonials";

import './index.css'
// import FeatureSection from "./Component/FeatureSection";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Routes>
          {/* Define routes for different sections */}
          <Route path="/Landing" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/executiveboard" element={<ExecutiveBoard />} />
          <Route path="/Pastevents" element={<Pastevents/>} />
          <Route path="/featuresection" element={<FeatureSection/>} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
