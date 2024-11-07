import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styling/App.scss';
import Vestigingen from './vestigingen';
import FilmRecensie from './filmRecensie';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <div className="navbar">
            {/* Logo */}
            <img src="src/photos/istockphoto-1642381175-612x612.jpg" alt="Logo" className="logo" />

            {/* Hamburger menu */}
            <div className="hamburger-menu" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </div>

            <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/recensies" className="nav-link" onClick={toggleMenu}>Film recensie</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={toggleMenu}>Nieuwe Films</Link>
              </li>
              <li className="nav-item">
                <Link to="/vestigingen" className="nav-link" onClick={toggleMenu}>Vestigingen</Link>
              </li>
            </ul>

            <div className="search-bar">
              <input
                list="film-titles"
                type="text"
                placeholder="Zoek een film..."
                aria-label="Zoek een film"
              />
              <datalist id="film-titles">
                <option value="Atlas" />
                <option value="Joker Folie Deux" />
                <option value="Planet of the Apes" />
                <option value="Oppenheimer" />
                <option value="Dune" />
                <option value="The Novince" />
                <option value="Blue Beetle" />
                <option value="The Batman" />
                <option value="Bad Boys" />
                <option value="Black Adam" />
              </datalist>
              <button type="submit">Zoek</button>
            </div>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/vestigingen" element={<Vestigingen />} />
            <Route path="/recensies" element={<FilmRecensie />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 MovieTime </p>

            {/* placeholder not functional maybe later... */}
            <div className="footer-links">
              <Link to="/privacy">Privacybeleid</Link>
              <Link to="/terms">Gebruiksvoorwaarden</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
