import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function MenuItem(props) {
  var active = props.active ? "active" : "";
  return (
    <a href="!#" className={"list-group-item list-group-item-action " + active}>
      <FontAwesomeIcon icon={["fas", props.icon]} />
      <span className="d-none d-lg-inline ms-1">{props.label}</span>
      {props.children}
    </a>
  );
}