import "./style/Hero.css";
import heroBg from "../assets/hero-bg.jpeg";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section 
    id="hero"
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Navbar />
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>Mandya Jaggery</h1>
        <p>Pure • Natural • Traditionally Made</p>

        <div className="hero-buttons">
          <button className="primary-btn">View Products</button>
          <button className="secondary-btn">Contact Us</button>
        </div>
      </div>
    </section>
  );
}