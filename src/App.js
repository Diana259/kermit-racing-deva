import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './app.css';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import EventsPage from './pages/EventsPage';
import PostsPage from './pages/PostsPage';
import Contact from './pages/Contact';
import ErrorPage from './components/ErrorPage';
import Topbar from './components/Topbar';
import StyledFooter from './components/Footer';
import ScrollToTop from './components/ToTopButton';


function App() {

  return (
    <Router>
    <Topbar/>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <StyledFooter />
    </Router>
  );
}

export default App;
