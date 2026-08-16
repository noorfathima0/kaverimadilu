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
              <span>
                Chamalapura, Keragodu Hobli, Mandya Taluk and District,
                Karnataka
              </span>
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
            href="https://www.google.com/maps/search/?api=1&query=Kaveri+Madilu+products"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            <iframe
              title="Kaveri Madilu Products Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.833839378611!2d76.9179801!3d12.593200300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa3085063e84b%3A0x48880f242544e74!2sKaveri%20Madilu%20products!5e0!3m2!1sen!2sin!4v1786891275553!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
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