import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import GaleryPage from './pages/GaleryPage/GaleryPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/galery' element={<GaleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
