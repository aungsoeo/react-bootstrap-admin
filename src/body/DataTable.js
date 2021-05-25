import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataRow from "./DataRow";

function DataTable() {
  return (
    <div className="col">
      <h2 className="h6 text-white-50">DATA</h2>
      <div className="card" style={{ height: "280px" }}>
        <div className="card-body">
          <div className="text-end">
            <button className="btn btn-sm btn-outline-secondary">
              <FontAwesomeIcon icon={["fas", "search"]} />
            </button>
            <button className="btn btn-sm btn-outline-secondary ms-1">
              <FontAwesomeIcon icon={["fas", "sort-amount-up"]} />
            </button>
            <button className="btn btn-sm btn-outline-secondary ms-1">
              <FontAwesomeIcon icon={["fas", "filter"]} />
            </button>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Age Group</th>
                <th>Data</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              <DataRow id="1" ageGroup="20-30" data="19%" icon="chart-pie" />
              <DataRow id="2" ageGroup="30-40" data="40%" icon="chart-bar" />
              <DataRow id="3" ageGroup="40-50" data="20%" icon="chart-line" />
              <DataRow id="4" ageGroup="50" data="11%" icon="chart-pie" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
