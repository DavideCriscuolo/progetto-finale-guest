import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function AllGames() {
  const [games, setGames] = useState([]);

  function getGames() {
    const url = "http://127.0.0.1:8000/api/games";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setGames(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <main>
      <div className="container">
        <div className="row row-cols-3">
          {games.map((game) => {
            return (
              <div key={game.id} className="col my-2">
                <div className="card text-black rounded-3 bg-transparent border-1 h-100">
                  <img
                    className="card-img-top"
                    src={game.medias.map((media) => media.url)}
                    alt="Title"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{game.title}</h4>
                    <p className="card-text">{game.plot.slice(0, 150)}...</p>
                    <Link to={`/game/${game.id}/${game.title}`}>
                      Vail al Gioco
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
