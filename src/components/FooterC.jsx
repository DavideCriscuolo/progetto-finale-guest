export default function FooterC() {
  return (
    <footer className="footer-main">
      <div className="footer-content">
        <div className="container">
          <div className="row g-4 py-5">
            {/* Brand Section */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand mb-4">
                <i className="bi bi-controller brand-icon"></i>
                <span className="brand-text">GameHub</span>
              </div>
              <p className="text-light opacity-75 mb-3">
                La tua piattaforma di riferimento per scoprire, esplorare e
                rimanere aggiornato sul mondo dei videogiochi.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="social-link" aria-label="Discord">
                  <i className="bi bi-discord"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <h5 className="footer-title text-light mb-3">Link Rapidi</h5>
              <ul className="footer-links list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/allGames">Catalogo</a>
                </li>
                <li>
                  <a href="#about">Chi Siamo</a>
                </li>
                <li>
                  <a href="#contact">Contatti</a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="col-lg-2 col-md-6">
              <h5 className="footer-title text-light mb-3">Categorie</h5>
              <ul className="footer-links list-unstyled">
                <li>
                  <a href="#action">Azione</a>
                </li>
                <li>
                  <a href="#adventure">Avventura</a>
                </li>
                <li>
                  <a href="#rpg">RPG</a>
                </li>
                <li>
                  <a href="#sport">Sport</a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-4 col-md-6">
              <h5 className="footer-title text-light mb-3">
                <i className="bi bi-envelope me-2"></i>
                Resta Aggiornato
              </h5>
              <p className="text-light opacity-75 small mb-3">
                Iscriviti per ricevere novità e aggiornamenti sui nuovi giochi.
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  className="form-control"
                  placeholder="La tua email"
                  aria-label="Email per newsletter"
                />
                <button className="btn btn-success" type="button">
                  <i className="bi bi-send"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom py-4 border-top border-secondary">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <small className="text-light opacity-75">
                  © {new Date().getFullYear()} GameHub. Tutti i diritti
                  riservati.
                </small>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <ul className="footer-legal list-inline mb-0">
                  <li className="list-inline-item">
                    <a href="#privacy" className="text-light opacity-75 small">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <span className="text-light opacity-50">•</span>
                  </li>
                  <li className="list-inline-item">
                    <a href="#terms" className="text-light opacity-75 small">
                      Termini d'Uso
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <span className="text-light opacity-50">•</span>
                  </li>
                  <li className="list-inline-item">
                    <a href="#cookies" className="text-light opacity-75 small">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="footer-decoration"></div>
    </footer>
  );
}
