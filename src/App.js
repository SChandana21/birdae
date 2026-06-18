import './App.css';
import ONEPAGE from './components/Onepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pagetwo from './components/Pagetwo';
import Pagethree from './components/Pagethree';
import Pagefour from './components/Pagefour';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ONEPAGE />} />
        <Route path="/page-two" element={<Pagetwo />} />
        <Route path="/pagethree" element={<Pagethree />} />
        <Route path="/pagefour" element={<Pagefour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;