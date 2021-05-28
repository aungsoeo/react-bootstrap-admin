import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MenuItem from "./MenuItem";
import Header from "./Header";

export function SideMenu() {
  //const [path, setPath] = useState(null);
  const location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <div className="d-flex flex-column flex-shrink-0 h-100 text-white px-lg-3">
      <Header title="REACT ADMIN" />
      <ul className="nav flex-column text-center text-lg-start mb-auto cs-border-top pt-2">
        <MenuItem
          to="/dashboard"
          icon="tachometer-alt"
          label="Dashboard"
          active={location.pathname === "/dashboard" ? "true" : null}
        />
        <div className="cs-border-bottom"></div>
        <span className="text-white-50 d-none d-lg-block my-3 small fw-bold">
          ACTIONS
        </span>
        <MenuItem to="/" icon="users" label="Users" />
        <MenuItem
          to="/tables"
          icon="table"
          label="Tables"
          active={location.pathname === "/tables" ? "true" : null}
        />
        <MenuItem to="/" icon="flag" label="Reports" />
        <div className="cs-border-bottom"></div>
      </ul>
      <div className="dropdown py-4 cs-border-top">
        <a
          className=" dropdown-toggle cs-nav-link"
          href="!#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Link
        </a>

        <ul className="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
          <li>
            <a className="dropdown-item" href="!#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="!#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="!#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
