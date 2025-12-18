import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ game }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="col my-2">
      <div
        className="game-card"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="card-image-wrapper">
          {game.medias && game.medias.length > 0 ? (
            <img
              src={game.medias[0].url}
              className="card-image"
              alt={game.title}
            />
          ) : (
            <div className="card-image-placeholder">
              <i className="bi bi-controller"></i>
            </div>
          )}

          {/* Badge categoria */}
          {game.category?.name && (
            <div className="card-badge">
              <span className="badge bg-danger">{game.category.name}</span>
            </div>
          )}

          {/* Prezzo badge */}
          {game.price && (
            <div className="card-price-badge">
              <span className="badge bg-success">{game.price}€</span>
            </div>
          )}
        </div>

        <div className={`card-overlay ${hover ? "active" : ""}`}>
          <div className="overlay-content">
            <h5 className="card-title">{game.title}</h5>

            {game.plot && (
              <p className="card-description">
                {game.plot.length > 150
                  ? `${game.plot.slice(0, 150)}...`
                  : game.plot}
              </p>
            )}

            <div className="card-info">
              {game.editor && (
                <div className="info-item">
                  <i className="bi bi-building me-2"></i>
                  <small>{game.editor}</small>
                </div>
              )}
              {game.classification && (
                <div className="info-item">
                  <i className="bi bi-star me-2"></i>
                  <small>{game.classification}</small>
                </div>
              )}
            </div>

            <Link
              className="btn btn-success btn-card"
              to={`/game/${game.id}/${game.title}`}
            >
              <i className="bi bi-eye me-2"></i>
              Scopri di più
            </Link>
          </div>
        </div>

        {/* Gradient overlay sempre visibile */}
        <div className="card-gradient"></div>
      </div>
    </div>
  );
}
