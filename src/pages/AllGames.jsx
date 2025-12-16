import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
export default function AllGames() {
  const [games, setGames] = useState([]);
  const [load, setLoad] = useState(true);
  function getGames() {
    const url = "http://127.0.0.1:8000/api/games";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setGames(data.data);
        setLoad(false);
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
      {load ? (
        <div class="d-flex justify-content-center align-items-center my-5">
          <div
            class="spinner-border text-success spinner-border-sm"
            role="status"
          ></div>
        </div>
      ) : (
        <div className="container">
          <div className="row row-cols-3">
            {games.map((game) => {
              return <Card key={game.id} game={game}></Card>;
            })}
          </div>
        </div>
      )}
    </main>
  );
}
