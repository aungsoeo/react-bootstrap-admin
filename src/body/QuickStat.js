import StatCard from "./StatCard";

function QuickStat() {
  return (
    <div className="row flex-column flex-lg-row">
      <h2 className="h6 text-white-50">QUICK STATS</h2>
      <StatCard stat="1,250" label="Daily visitors" />
      <StatCard stat="8,120" label="Weekly visitors" />
      <StatCard stat="12,560" label="Monthly visitors" />
      <StatCard stat="102,250" label="Yearly visitors" />
    </div>
  );
}

export default QuickStat;
