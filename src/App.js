import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>WeNumerics</h1>
        <p>Market Intelligence & Analytics for the Next-Gen Investor</p>
        <a href="#contact" className="cta-button">Book a Free Consultation</a>
      </header>

      <section className="section">
        <h2>About Us</h2>
        <p>
          WeNumerics is a market intelligence and analytics company. We extract insights from raw market data,
          develop proprietary trading strategies, and guide investors and traders across mutual funds, stocks,
          commodities, and the crypto market. We are NISM certified and committed to shaping the future of financial decision-making.
        </p>
      </section>

      <section className="section">
        <h2>Our Services</h2>
        <ul>
          <li>Proprietary Trading Strategies</li>
          <li>Stock Market & Mutual Fund Guidance</li>
          <li>Commodities & Crypto Advisory</li>
          <li>Market Data Intelligence</li>
        </ul>
      </section>

      <section className="section" id="contact">
        <h2>Contact Us</h2>
        <p>Email: mangesh@wenumerics.com</p>
        <p>Phone: +91-83906 47774</p>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} WeNumerics. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
