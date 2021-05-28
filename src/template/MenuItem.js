import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function MenuItem(props) {
  var active = props.active ? "active" : "";
  return (
    <li className="nav-item mb-2">
      <Link to={props.to} className={"nav-link px-0 cs-nav-link " + active} replace>
        <FontAwesomeIcon icon={["fas", props.icon]} className="d-none d-lg-inline"/>
        <FontAwesomeIcon icon={["fas", props.icon]} size="lg" className="d-inline d-lg-none"/>
        <span className="d-none d-lg-inline ms-2">{props.label}</span>
        {props.children}
      </Link>
    </li>
  );
}

export default MenuItem;
