import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './styling/style.css';
import Home from './Home';
import Hypotheekrentes from './components/Hypotheekrentes';
import Huizenprijzen from './components/Huizenprijzen';
import Leencapaciteit from './components/Leencapaciteit';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hypotheekrentes" element={<Hypotheekrentes />} />
        <Route path="/Huizenprijzen" element={<Huizenprijzen />} />
        <Route path="/Leencapaciteit" element={<Leencapaciteit />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
