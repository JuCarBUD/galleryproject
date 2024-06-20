import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cborabora from './components/Cborabora';
import Cborabora2 from './components/Cborabora2';
import Cborabora3 from './components/Cborabora3';
import Cborabora4 from './components/Cborabora4';
import Cborabora5 from './components/Cborabora5';
import Cborabora6 from './components/Cborabora6';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 id="title">Galería de Bora Bora</h1>
        <Navigation />
        <Routes>
          <Route path="/cborabora" element={<Cborabora />} />
          <Route path="/cborabora2" element={<Cborabora2 />} />
          <Route path="/cborabora3" element={<Cborabora3 />} />
          <Route path="/cborabora4" element={<Cborabora4 />} />
          <Route path="/cborabora5" element={<Cborabora5 />} />
          <Route path="/cborabora6" element={<Cborabora6 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;