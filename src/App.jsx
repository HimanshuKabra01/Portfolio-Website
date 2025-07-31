import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CommingSoon from './pages/CommingSoon';
import Navbar from './components/Navbar';

function App() {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comming-soon" element={<CommingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;