import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StatCard(props) {
  return (
    <div className="col">
      <div className="card mb-3">
        <div className="card-body">
          <h3 className="card-title h2">{props.stat}</h3>
          <span className="text-success">
            <FontAwesomeIcon icon={["fas", "chart-line"]} />
            {props.label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
