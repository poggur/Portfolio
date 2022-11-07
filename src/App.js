import logo from './logo.svg';
import './App.css';
import Homepage from './pages/home';
import Blogpage from './pages/blogs';
import Cpage from './pages/c';
import CA1page from './pages/ca1-4';
import CA2page from './pages/ca5-8';
import Contactpage from './pages/contact';
import Eventpage from './pages/events';
import HTMLCSSpage from './pages/html css';
import Masterpage from './pages/masterclass';
import Placementpage from './pages/placement';
import Pypage from './pages/py';
import UIUXpage from './pages/UxUi';
import NavbarHeader from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavbarHeader />
      <div style={{backgroundColor: '#0A2E36', width: '100%', height: '100vh'}}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/c" element={<Cpage />} />
          <Route path="/ca1" element={<CA1page />} />
          <Route path="/ca2" element={<CA2page />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/event" element={<Eventpage />} />
          <Route path="/hc" element={<HTMLCSSpage />} />
          <Route path="/masterclass" element={<Masterpage />} />
          <Route path="/placement" element={<Placementpage />} />
          <Route path="/py" element={<Pypage />} />
          <Route path="/UIUX" element={<UIUXpage />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
