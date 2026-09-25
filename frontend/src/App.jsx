import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUsPage from './pages/AboutUsPage';
import OurStoryPage from './pages/OurStoryPage';
import MissionVisionPage from './pages/MissionVisionPage';
import CoreValuesPage from './pages/CoreValuesPage';
import TargetMarketPage from './pages/TargetMarketPage';
import ContactPage from './pages/ContactPage';
import JobsPage from './pages/JobsPage';
import JobSinglePage from './pages/JobSinglePage';
import InsightsPage from './pages/InsightsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/mission-vision" element={<MissionVisionPage />} />
        <Route path="/core-values" element={<CoreValuesPage />} />
        <Route path="/target-market" element={<TargetMarketPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobSinglePage />} />
        <Route path="/insights" element={<InsightsPage />} />
      </Routes>
    </Router>
  );
}

export default App;