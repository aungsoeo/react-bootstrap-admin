import QuickStat from "./QuickStat";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function Dashboard() {
  return (
    <>
      {/* <h2 className="h3 text-muted mb-4">Dashboard</h2> */}
      <QuickStat />
      <div className="row mt-2 g-4">
          <LineChart />
          <PieChart />        
      </div>
    </>
  );
}
export default Dashboard;
