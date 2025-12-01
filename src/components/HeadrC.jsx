import { NavLink } from "react-router-dom";
export default function HeaderC() {
  return (
    <header>
      <nav className="nav justify-content-center  ">
        <NavLink className="nav-link " to="/allGames" aria-current="page">
          Tutti i Giochi
        </NavLink>
        <a className="nav-link" href="#">
          Link
        </a>
        <a className="nav-link " href="http://127.0.0.1:8000/">
          Accedi
        </a>
      </nav>
    </header>
  );
}
