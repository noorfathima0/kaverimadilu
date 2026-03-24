import "./style/Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* Left content */}
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            Reach out to Kaveri Madilu for bulk orders, partnerships, or
            general inquiries. We’re happy to serve you with pure and
            traditional sweetness.
          </p>

          <div className="contact-details">
            <div>
              <strong>📍 Location</strong>
              <span>Chamalapura, keragodu hobli, Mandya taluk and district, Karnataka</span>
            </div>

            <div>
              <strong>📞 Phone</strong>
              <span>+91 9380703998</span>
            </div>

            <div>
              <strong>📧 Email</strong>
              <span>mandyakgrus@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right map */}
        <div className="contact-map">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Chamalapura,+Keragodu+Hobli,+Mandya+Taluk,+Karnataka"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            <iframe
              title="Mandya Location"
              src="https://www.google.com/maps?q=Chamalapura,+Keragodu+Hobli,+Mandya+Taluk,+Karnataka&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="map-overlay">
              Click to get directions
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}