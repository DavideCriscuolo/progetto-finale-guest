export default function JumboC() {
  return (
    <div className="jumbo-wrapper">
      <div className="jumbo-container p-5 mb-4 rounded-3 position-relative overflow-hidden">
        <div className="jumbo-overlay" aria-hidden="true"></div>

        {/* Animated background elements */}
        <div className="jumbo-bg-effects">
          <div className="bg-shape shape-1"></div>
          <div className="bg-shape shape-2"></div>
          <div className="bg-shape shape-3"></div>
        </div>

        <div className="container-fluid py-5 jumbo-content position-relative">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="jumbo-badge mb-3">
                <i className="bi bi-stars me-2"></i>
                La Tua Guida ai Videogiochi
              </div>

              <h1 className="jumbo-title display-3 fw-bold text-white mb-4">
                Game<span className="text-success">Hub</span>
              </h1>

              <p className="jumbo-description fs-5 text-white mb-4">
                La piattaforma che ti consiglia i migliori videogiochi e offre
                un catalogo completo. Scopri suggerimenti personalizzati,
                offerte selezionate e trova nuove proposte per arricchire la tua
                collezione.
              </p>

              <div className="jumbo-features d-flex flex-wrap gap-3 mb-4">
                <div className="feature-tag">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Suggerimenti Personalizzati
                </div>
                <div className="feature-tag">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Catalogo Completo
                </div>
                <div className="feature-tag">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Offerte Esclusive
                </div>
              </div>

              <div className="jumbo-stats d-flex gap-4 mt-4">
                <div className="stat-item">
                  <div className="stat-number text-success fw-bold">1000+</div>
                  <div className="stat-label text-white opacity-75 small">
                    Giochi
                  </div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number text-success fw-bold">50+</div>
                  <div className="stat-label text-white opacity-75 small">
                    Piattaforme
                  </div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number text-success fw-bold">24/7</div>
                  <div className="stat-label text-white opacity-75 small">
                    Supporto
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 d-none d-lg-block">
              <div className="jumbo-illustration">
                <i className="bi bi-joystick jumbo-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
