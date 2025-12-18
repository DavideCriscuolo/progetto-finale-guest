import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { CardSkeletonGrid } from "../components/CardSkeleton";

export default function AllGames() {
  const [games, setGames] = useState([]);
  const [load, setLoad] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  function getGames() {
    const url = "http://127.0.0.1:8000/api/games";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Aggiungo un delay di 2 secondi per vedere lo skeleton
        setTimeout(() => {
          setGames(data.data);
          setLoad(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          setLoad(false);
        }, 1500);
      });
  }

  useEffect(() => {
    getGames();
  }, []);

  // Filtra i giochi in base alla ricerca e categoria
  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || game.category?.name === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Estrai categorie uniche
  const categories = [
    "all",
    ...new Set(games.map((game) => game.category?.name).filter(Boolean)),
  ];

  return (
    <main className="all-games-page min-vh-100 py-5">
      <div className="container">
        {/* Header Section */}
        <div className="page-header text-center mb-5">
          <div className="mb-3">
            <span className="badge bg-success fs-6 px-4 py-2">
              <i className="bi bi-collection me-2"></i>
              Catalogo Completo
            </span>
          </div>
          <h1 className="display-4 fw-bold text-light mb-3">
            Esplora Tutti i <span className="text-success">Giochi</span>
          </h1>
          <p
            className="lead text-light opacity-75 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Scopri la nostra collezione completa di videogiochi per tutte le
            piattaforme
          </p>
        </div>

        {load ? (
          <CardSkeletonGrid count={9} />
        ) : (
          <>
            {/* Filters Section */}
            <div className="filters-section mb-5">
              <div
                className="card border-0 shadow-sm"
                style={{ backgroundColor: "#1a1d24" }}
              >
                <div className="card-body p-4">
                  <div className="row g-3 align-items-end">
                    {/* Search Bar */}
                    <div className="col-lg-6">
                      <label className="form-label text-light mb-2">
                        <i className="bi bi-search me-2"></i>
                        Cerca Gioco
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg search-input"
                        placeholder="Cerca per titolo..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>

                    {/* Category Filter */}
                    <div className="col-lg-4">
                      <label className="form-label text-light mb-2">
                        <i className="bi bi-funnel me-2"></i>
                        Categoria
                      </label>
                      <select
                        className="form-select form-select-lg category-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      >
                        <option value="all">Tutte le categorie</option>
                        {categories.slice(1).map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Reset Button */}
                    <div className="col-lg-2">
                      <button
                        className="btn btn-outline-success w-100 btn-lg"
                        onClick={() => {
                          setSearchTerm("");
                          setSelectedCategory("all");
                        }}
                      >
                        <i className="bi bi-arrow-clockwise me-2"></i>
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Info */}
            <div className="results-info d-flex justify-content-between align-items-center mb-4">
              <div>
                <h2 className="h5 text-light mb-0">
                  <i className="bi bi-grid-3x3-gap text-success me-2"></i>
                  {filteredGames.length}{" "}
                  {filteredGames.length === 1 ? "Gioco" : "Giochi"}
                  {searchTerm && ` per "${searchTerm}"`}
                  {selectedCategory !== "all" && ` in ${selectedCategory}`}
                </h2>
              </div>
              <div className="text-light opacity-75 small">
                Totale catalogo: {games.length} giochi
              </div>
            </div>

            {/* Games Grid */}
            {filteredGames.length > 0 ? (
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {filteredGames.map((game) => (
                  <Card key={game.id} game={game} />
                ))}
              </div>
            ) : (
              <div className="empty-state text-center py-5">
                <div
                  className="card border-0 shadow-sm mx-auto"
                  style={{ maxWidth: "500px", backgroundColor: "#1a1d24" }}
                >
                  <div className="card-body p-5">
                    <i className="bi bi-search display-1 text-success opacity-50 mb-3"></i>
                    <h3 className="h4 text-light mb-3">Nessun gioco trovato</h3>
                    <p className="text-light opacity-75 mb-4">
                      Prova a modificare i filtri di ricerca o esplora tutte le
                      categorie
                    </p>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("all");
                      }}
                    >
                      <i className="bi bi-arrow-clockwise me-2"></i>
                      Mostra tutti i giochi
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Back to Home */}
            <div className="text-center mt-5 pt-4">
              <Link className="btn btn-outline-light btn-lg px-5" to="/">
                <i className="bi bi-house-door me-2"></i>
                Torna alla Home
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
