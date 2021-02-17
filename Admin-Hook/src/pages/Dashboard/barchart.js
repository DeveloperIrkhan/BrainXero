import React from "react"
import ReactApexChart from "react-apexcharts"

const barchart = () => {
  const requests = [
    {
      data: [2000, 1800, 1500, 1250, 1000, 584, 780, 1100, 1220, 1365],
    },
  ]
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: true,
    },

    colors: ["#00843D"],
    grid: {
      borderColor: "#000000",
    },
    xaxis: {
      categories: [
        "Australia",
        "China",
        "Singapore",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  }

  return (
    <ReactApexChart options={options} series={requests} type="bar" height="350" />
  )
}

export default barchart
