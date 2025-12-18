import { useState } from "react";
import { Link } from "react-router-dom";
export default function Card({ game }) {
  const [hover, setHover] = useState(null);

  return (
    <>
      <div className="col my-2">
        <div
          key={game.id}
          onMouseEnter={() => setHover(game.id)}
          onMouseLeave={() => setHover(null)}
          className="card text-bg-dark w-100 cardCustom"
        >
          <img
            src={game.medias.map((media) => media.url)}
            className="card-img  object-fit-cover h-100"
            alt="..."
          />

          <div
            className={
              hover === game.id
                ? "card-img-overlay opacity-1"
                : "card-img-overlay opacity-0"
            }
          >
            <h5 className="card-title">{game.title}</h5>
            <p className="card-text"> {game.plot.slice(0, 150)}...</p>
            <Link
              className="btn btn-danger"
              to={`/game/${game.id}/${game.title}`}
            >
              Vail al Gioco
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
