import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
// import { ChartOptions } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const InfoChart = ({ data }) => {
  const dataset = data;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: { display: true, text: dataset.title },
    },
  };
  const data_chart = {
    labels: dataset.labels,
    datasets: dataset.series.map((x) => {
      return {
        label: x.labels,
        data: x.data,
        backgroundColor: x.backgroundColor,
      };
    }),
  };

if (data.type === "line") {
    return (

            <Line options={options} data={data_chart} />
    );
}
if (data.type === "Bar") {
    return (
        <>
            <Bar options={options} data={data_chart} />
        </>
    );
}
return (
    <div>
        <Line options={options} data={data_chart} />
    </div>
);

};

export default InfoChart;