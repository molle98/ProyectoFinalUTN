import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ComicsPage from './pages/ComicsPage';
import ContactoPage from './pages/ContactoPage';
import Footer from './components/Footer';
import EditComicsPage from './pages/EditComicsPage';
import CreateComicsPage from './pages/CreateComicsPage';
import DeleteComicsPage from './pages/DeleteComicsPage';
import './App.css';


function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/comics/create" element={<CreateComicsPage />} />
            <Route path="/comics/edit/:id" element={<EditComicsPage />} />
            <Route path="/comics/delete/:id" element={<DeleteComicsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
