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
        <div className="text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            quis molestias aut quo obcaecati optio cumque atque, incidunt
            beatae! Nisi reiciendis dignissimos rerum, assumenda a harum natus
            tempora quia. Magni! Quisquam optio neque itaque rem similique sunt
            deserunt maxime corrupti. Explicabo incidunt deserunt provident
            veritatis quos expedita quo porro ipsam aspernatur officiis? Soluta
            repudiandae eum amet ullam nam distinctio doloremque.
          </p>
        </div>
        <section>
          <div>
            <h4>Best Buy {new Date().getFullYear()}</h4>
            <div>
              <div className="row row-cols-6">
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
