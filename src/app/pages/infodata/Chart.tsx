import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

import { InfoDataProps } from "./Props";

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

export const InfoChart = ({ data }: { data: InfoData["chart"] }) => {
  const dataset = data;
  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "top",
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
      <div>
        line
        <Line options={options as ChartOptions<"line">} data={data_chart} />
      </div>
    );
  }
  if (data.type === "Bar") {
    return (
      <>
        <Bar options={options as ChartOptions<"bar">} data={data_chart} />
      </>
    );
  }
  return (
    <div>
      <Line options={options as ChartOptions<"line">} data={data_chart} />
    </div>
  );
};

export default InfoChart;
