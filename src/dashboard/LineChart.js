import { useRef, useState, useEffect } from "react";
import { Chart } from "chart.js";

const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: "rgba(56, 168, 108, 0.1)",
      borderColor: "rgb(56, 168, 108)",
      pointBackgroundColor: "rgb(56, 168, 108)",
      data: [0, 10, 5, 2, 20, 30, 45],
      tension: 0.3,
      fill: true,
    },
  ],
};

const chartConfig = {
  type: "line",
  data: data,
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawTicks: false,
        },
      },
    },
  },
};

function LineChart() {
  const chartContainer = useRef(null);
  const [, setChart] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const chartInstance = new Chart(chartContainer.current, chartConfig);
      chartInstance.canvas.parentNode.style.height = "380px";
      setChart(chartInstance);
    }
    return () => {
      chartContainer.current = null;
      setChart(null);
    };
  }, [chartContainer]);

  return (
    <div className="col-lg-8">
      <div className="card shadow">
        <div className="card-header py-3 text-primary fw-bold">Line Chart</div>
        <div className="card-body">
          <canvas ref={chartContainer} />
        </div>
      </div>
    </div>
  );
}

export default LineChart;
