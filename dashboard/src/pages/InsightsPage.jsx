import { useEffect, useState } from "react";
import Chart from "../components/Chart";
import { processData } from '../utils/dataprocessing'
// import "./InsightsPage.css";

function InsightsPage() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/data-to-visualize/Electric_Vehicle_Population_Data.csv")
        .then((response) => response.text())
        .then((csv) => processData(csv));
      setChartData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="insights-page">
      <h2>Insights</h2>
      {chartData.map((chart, index) => (
        <Chart key={index} chartData={chart} />
      ))}
    </div>
  );
}

export default InsightsPage;
