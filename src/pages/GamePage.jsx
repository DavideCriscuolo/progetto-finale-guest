import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GamePage() {
  const [game, setGame] = useState([]);
  const { id } = useParams();

  function getGame() {
    const url = `http://127.0.0.1:8000/api/game/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGame(data.data);
      })
      .catch((err) => {
        console.err(err);
      });
  }
  useEffect(() => {
    getGame();
  }, []);

  return (
    <main>
      <h1>{game.title}</h1>
    </main>
  );
}
