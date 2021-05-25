import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="flex-fill"></div>
      <div className="navbar nav">
        <li className="nav-item dropdown">
          <a
            href="!#"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            id="userDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={["fas", "user-circle"]} />
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
            <li>
              <a href="!#" className="dropdown-item">
                User Profile
              </a>
            </li>
            <li>
              <a href="!#" className="dropdown-item">
                Logout
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="!#" className="nav-link">
            <FontAwesomeIcon icon={["fas", "cog"]} />
          </a>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
