import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface Props {
  data: { date: string; value: string; y: number }[];
}

export const DetailedChart = ({ data }: Props) => {
  const options = {
    title: {
      text: "",
    },
    series: [
      {
        name: "Price",
        data: data,
      },
    ],
    plotOptions: {
      series: {
        lineColor: "#f48024",
        height: "100px",
      },
    },
    chart: {
      backgroundColor: "transparent",
    },
    xAxis: {
      tickLength: 0,
      title: {
        text: null,
      },
      lineColor: "transparent",
      labels: {
        style: {
          color: "transparent",
        },
      },
      gridLineColor: "transparent",
    },
    yAxis: {
      tickLength: 0,
      title: {
        text: null,
      },
      labels: {
        style: {
          color: "transparent",
        },
      },
      gridLineColor: "transparent",
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      headerFormat: "",
      pointFormat: "<b>{point.date}</b><br><b>Price:</b> US$ {point.value}",
    },
  };

  return (
    <div className="flex justify-center">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        allowChartUpdate
      />
    </div>
  );
};
