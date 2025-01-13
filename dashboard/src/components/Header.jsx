
import { Link } from "react-router-dom";
import "../Header.css";

function Header() {
  return (
    <header className="header">
      <h1>EV Population Dashboard</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/insights">Insights</Link>
      </nav>
    </header>
  );
}

export default Header;
