
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
import PropTypes from "prop-types";
ChartJS.register(BarElement, CategoryScale, LinearScale);

function Chart({ chartData }) {
  return (
    <div>
      <h3>{chartData.title}</h3>
      <Bar data={chartData.data} options={chartData.options} />
    </div>
  );
}
Chart.propTypes = {
  chartData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    options: PropTypes.object,
  }).isRequired,
};
export default Chart;
