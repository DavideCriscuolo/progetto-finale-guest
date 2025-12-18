import { NavLink } from "react-router-dom";

export default function HeaderC() {
  return (
    <header className="header-main">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <i className="bi bi-controller brand-icon me-2"></i>
            <span className="brand-text">GameStore</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/">
                  <i className="bi bi-house-door me-2"></i>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/allGames">
                  <i className="bi bi-grid-3x3-gap me-2"></i>
                  Giochi
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-link-custom nav-link-login"
                  href="http://127.0.0.1:8000/"
                >
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Accedi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
