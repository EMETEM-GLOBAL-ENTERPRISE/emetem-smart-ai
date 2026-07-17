import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import AiAssistant from "./pages/AiAssistant";
import Dashboard from "./pages/Dashboard";
import CropRecommendation from "./pages/CropRecommendation";
import FarmRecordBook from "./pages/FarmRecordBook";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ai-assistant" element={<AiAssistant />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="crop-recommendation" element={<CropRecommendation />} />
          <Route path="farm-record-book" element={<FarmRecordBook />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
