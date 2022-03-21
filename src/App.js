import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './app.css';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import ErrorPage from './components/ErrorPage';
import Topbar from './components/Topbar';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
    <Topbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
