import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-white"
      style={{
        height: "70px",
      }}
    >
      <div className="h5 my-1">
        <FontAwesomeIcon icon={["fab", "react"]} size="lg" spin/>
        <span className="d-none d-lg-inline ms-2">{props.title}</span>
      </div>
    </div>
  );
}

export default Header;
