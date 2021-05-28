import StatCard from "./StatCard";

function QuickStat() {
  return (
    <div className="row">
      <StatCard stat="1,250" label="Daily visitors" color="primary" />
      <StatCard stat="8,120" label="Weekly visitors" color="warning" />
      <StatCard stat="12,560" label="Monthly visitors" color="info" />
      <StatCard stat="102,250" label="Yearly visitors" color="danger" />
    </div>
  );
}

export default QuickStat;
