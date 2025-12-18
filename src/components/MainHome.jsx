import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
export default function MainHome() {
  const [bestBuy, setBestBuy] = useState([]);

  function getBestBuy() {
    const url = "http://127.0.0.1:8000/api/games/best-buy";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBestBuy(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getBestBuy();
  }, []);
  return (
    <main>
      <div className="container">
        <section>
          <div>
            <h4>Best Buy {new Date().getFullYear()} meno di 20 euro</h4>
            <div>
              <div className="row row-cols-3">
                {bestBuy.map((game) => {
                  return <Card key={game.id} game={game}></Card>;
                })}
              </div>
            </div>
          </div>
          <div className="my-3 ">
            <Link className="btn btn-success" to={"/allGames"}>
              Visita il catalogo Giochi
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
