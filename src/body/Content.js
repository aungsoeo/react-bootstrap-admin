import Banner from "./Banner";
import QuickStat from "./QuickStat";
import Location from "./Location";
import DataTable from "./DataTable";

function Content() {
  return (
    <div className="container-fluid mt-3 p-4">
      <Banner />
      <QuickStat />
      <div className="row row-cols-1 row-cols-lg-2 mt-2 g-4">
        <Location />
        <DataTable />
      </div>
    </div>
  );
}

export default Content;
