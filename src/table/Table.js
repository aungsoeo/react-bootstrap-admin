import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataRow from "./DataRow";

function Table() {
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-header py-3 text-primary fw-bold">
            Tables Example
          </div>
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

            <table className="table table-bordered mt-3">
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
            <nav className="d-flex">
              <ul className="pagination ms-auto">
                <li className="page-item">
                  <a href="!#" className="page-link">Previous</a>
                </li>
                <li className="page-item">
                  <a href="!#" className="page-link">1</a>
                </li>
                <li className="page-item active">
                  <a href="!#" className="page-link">2</a>
                </li>
                <li className="page-item">
                  <a href="!#" className="page-link">3</a>
                </li>
                <li className="page-item">
                  <a href="!#" className="page-link">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
