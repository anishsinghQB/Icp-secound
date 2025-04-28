import React from 'react';

function App() {
  return (
    <div className="App outdoor-travel">
      <header className="header">
        <h1 className="logo">ExploreMore</h1>
        <nav>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Adventure Awaits</h2>
        <p>Explore the world. Discover new paths.</p>
        <a className="btn" href="#contact">Start Your Journey</a>
      </section>

      <section id="services" className="section">
        <h3>Our Outdoor Services</h3>
        <div className="card-container">
          <div className="card outdoor-card">Hiking Tours</div>
          <div className="card outdoor-card">Camping Adventures</div>
          <div className="card outdoor-card">Wildlife Safaris</div>
        </div>
      </section>

      <section id="testimonials" className="section alt-bg">
        <h3>What Our Adventurers Say</h3>
        <div className="card-container">
          <div className="card outdoor-dark">“The best outdoor experience ever!” – Emily R.</div>
          <div className="card outdoor-dark">“Unforgettable adventures, highly recommended.” – Mark T.</div>
        </div>
      </section>

      <section id="contact" className="section">
        <h3>Contact Us</h3>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} ExploreMore Adventures</p>
      </footer>
    </div>
  );
}

export default App;
