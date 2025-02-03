import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/ArticlesPage';
import LessonsPage from './pages/LessonsPage/LessonsPage';
import MaterialsPage from './pages/MaterialsPage/MaterialPage';
import FinishPage from './pages/FinishPage/FinishPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/lessons' element={<LessonsPage />} />
          <Route path='/materials' element={<MaterialsPage />} />
          <Route path='/finish' element={<FinishPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
