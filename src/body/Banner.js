import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Banner() {
  return (
    <div className="row mb-3">
      <div className="col">
        <div className="alert alert-info">
          <FontAwesomeIcon icon={["fas", "download"]} className="me-2"/>A new version of admin
          dashboard is released.
          <a href="!#" className="text-decoration-none"> Download Now!</a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
