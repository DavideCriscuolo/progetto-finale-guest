import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function MainHome() {
  const [bestBuy, setBestBuy] = useState([]);
  const [loading, setLoading] = useState(true);

  function getBestBuy() {
    const url = "http://127.0.0.1:8000/api/games/best-buy";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBestBuy(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    getBestBuy();
  }, []);

  return (
    <main className="main-home min-vh-100 py-5">
      {/* Hero Section */}
      <div className="container mb-5">
        <div className="hero-section text-center py-5 position-relative">
          <div className="mb-4">
            <span className="badge bg-success fs-6 px-4 py-2 mb-3">
              <i className="bi bi-star-fill me-2"></i>
              Best Buy {new Date().getFullYear()}
            </span>
          </div>
          <h1 className="display-3 fw-bold text-light mb-3">
            I Migliori Giochi
            <span className="text-success d-block">Sotto i 20€</span>
          </h1>
          <p className="hero-subtitle lead text-light opacity-75 mb-4 mx-auto">
            Scopri la nostra selezione dei migliori videogiochi con il miglior
            rapporto qualità-prezzo
          </p>

          {/* Decorative elements */}
          <div className="hero-decorations position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
            <div className="decoration-circle decoration-left"></div>
            <div className="decoration-circle decoration-right"></div>
          </div>
        </div>
      </div>

      {/* Games Section */}
      <div className="container">
        <section>
          {loading ? (
            <div className="loading-container d-flex justify-content-center align-items-center py-5">
              <div className="text-center">
                <div className="spinner-border text-success mb-3" role="status">
                  <span className="visually-hidden">Caricamento...</span>
                </div>
                <p className="text-light opacity-75">Caricamento giochi...</p>
              </div>
            </div>
          ) : bestBuy.length > 0 ? (
            <>
              <div className="section-header d-flex align-items-center mb-4">
                <div className="section-bar bg-success"></div>
                <h2 className="h3 fw-bold mb-0 text-light">
                  <i className="bi bi-trophy-fill text-success me-2"></i>
                  Selezione Best Buy
                </h2>
                <span className="badge bg-success ms-3">
                  {bestBuy.length} giochi
                </span>
              </div>

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
                {bestBuy.map((game) => (
                  <Card key={game.id} game={game} />
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state text-center py-5">
              <i className="bi bi-inbox display-1 text-light opacity-25 mb-3"></i>
              <p className="text-light opacity-75">
                Nessun gioco disponibile al momento.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="cta-section text-center py-5">
            <div className="cta-card card border-0 shadow-lg mx-auto">
              <div className="card-body p-5">
                <i className="bi bi-controller display-4 text-success mb-3"></i>
                <h3 className="h4 fw-bold text-light mb-3">
                  Esplora il Catalogo Completo
                </h3>
                <p className="text-light opacity-75 mb-4">
                  Scopri tutti i videogiochi disponibili nel nostro catalogo
                </p>
                <Link
                  className="cta-button btn btn-success btn-lg px-5 py-3 fw-semibold shadow-sm"
                  to="/allGames"
                >
                  <i className="bi bi-grid-3x3-gap-fill me-2"></i>
                  Visita il Catalogo Completo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <div className="features-section container py-5">
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="feature-card p-4">
              <div className="feature-icon bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                <i className="bi bi-lightning-fill text-success display-5"></i>
              </div>
              <h4 className="h5 fw-bold text-light mb-2">Veloce</h4>
              <p className="text-light opacity-75 small">
                Trova i tuoi giochi preferiti in un attimo
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card p-4">
              <div className="feature-icon bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                <i className="bi bi-wallet2 text-success display-5"></i>
              </div>
              <h4 className="h5 fw-bold text-light mb-2">Conveniente</h4>
              <p className="text-light opacity-75 small">
                Prezzi competitivi e offerte esclusive
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card p-4">
              <div className="feature-icon bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                <i className="bi bi-stars text-success display-5"></i>
              </div>
              <h4 className="h5 fw-bold text-light mb-2">Qualità</h4>
              <p className="text-light opacity-75 small">
                Solo i migliori titoli selezionati per te
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
