import { useEffect, useRef, useState } from "react";
import "./style/About.css";

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className={`about ${visible ? "show" : ""}`}>
      <div className="about-container">

        <h2>Why Choose Mandya Jaggery?</h2>

        <div className="about-points">

          <div className="point">
            <div className="icon-circle">🌿</div>
            <h4>Naturally Sourced</h4>
            <p>
              Directly from farms practicing traditional and sustainable
              agriculture for purity and quality.
            </p>
          </div>

          <div className="point">
            <div className="icon-circle">🛡️</div>
            <h4>Quality Assured</h4>
            <p>
              Every batch meets high standards of taste and nutritional value.
            </p>
          </div>

          <div className="point">
            <div className="icon-circle">🍯</div>
            <h4>Authentic Taste</h4>
            <p>
              Traditional boiling methods preserve rich flavor and nutrients.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}