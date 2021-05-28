import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const titles = {
  "/dashboard": "Dashboard",
  "/tables": "Tables",
};

function Navbar() {
  const location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <nav
      className="navbar sticky-top navbar-expand navbar-light bg-white border-bottom"
      style={{ height: "70px" }}
    >
      <div className="container-fluid px-3">
        <div className="h3 text-black-50">
          {titles[location.pathname] || "Dashboard"}
        </div>
        <ul className="navbar-nav ms-auto">
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
              <FontAwesomeIcon icon={["fas", "user-alt"]} />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="userDropdown"
            >
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
