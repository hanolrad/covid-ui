"use client";

import React, { useRef, useEffect } from "react";
import { Chart } from "@antv/g2";
import { useQueryCovidNewCases } from "@/app/requests/useQueryCovidNewCases";

const CovidNewCasesChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, isError } = useQueryCovidNewCases();

  // Format the data for the chart.
  const chartData = data?.data
    .filter((d, i) => i < 14)
    .map((caseData) => ({
      date: caseData.date,
      newCases: caseData.newCases,
    }));

  useEffect(() => {
    console.log("chartData", chartData);
    if (chartRef.current && chartData) {
      console.log("chartRef.current exists", chartRef.current);

      // remove previous chart instance
      while (chartRef.current.firstChild) {
        chartRef.current.removeChild(chartRef.current.firstChild);
      }
      const chart = new Chart({
        container: chartRef.current,
        autoFit: false,
        height: 300,
        width: 400,
      });

      chart
        .interval()
        .data(chartData)
        .encode("x", "date")
        .encode("y", "newCases")
        .axis("x", { labelFontSize: 0, title: false })
        .axis("y", { labelFontSize: 10, title: false });
      chart.theme("light");
      chart.render();
    }
  }, [chartData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  return (
    <div>
      <div ref={chartRef}></div>
    </div>
  );
};

export default CovidNewCasesChart;
