import { useState, useEffect } from "react";
import "./style/Navbar.css";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close mobile menu
  };

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div 
        className="nav-logo"
        onClick={() => scrollToSection("home")}
      >
        Mandya Jaggery
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("products")}>Products</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      <div 
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}