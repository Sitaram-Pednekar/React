import { Outlet, NavLink } from "react-router-dom";
import './Layout.css';

function Layout() {
  return (
    <div className="app-container">
      <header className="header-section">
        <h1>TODO-List</h1>
      </header>

      <nav className="island-wrapper">
        <div className="dynamic-island">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/Favorite">Favorite</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer-section">
        <p>© 2024 Shopping-Cart. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;