import "./style/Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* Left content */}
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            Reach out to Mandya Jaggery for bulk orders, partnerships, or
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
          <iframe
            title="Mandya Map"
            src="https://www.google.com/maps?q=Chamalapura,+Keragodu+Hobli,+Mandya+Taluk,+Karnataka&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}