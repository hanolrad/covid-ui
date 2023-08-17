"use client";

import React, { useRef, useEffect, useMemo } from "react";
import { Chart } from "@antv/g2";
import { useQueryCovidVariantCases } from "@/app/requests/useQueryCovidVariantCases";

const CovidCurrentVariantsChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, isError } = useQueryCovidVariantCases();

  // Format the data for the chart.
  const chartData = useMemo(() => {
    if (!data) return undefined;
    if (data.data.length < 1) return undefined;
    const latestDate = data.data[0];
    if (!latestDate.variants) return undefined;
    return latestDate.variants
      .map((variant) => ({
        variantName: variant.variant,
        percentage: variant.newWeeklyPercentage,
      }))
      .filter((v) => v.percentage >= 1);
  }, [data]);

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
        width: 450,
        paddingLeft: 40,
        paddingRight: 40,
      });

      chart.coordinate({ type: "theta", outerRadius: 0.8 });
      chart.theme("dark");

      chart
        .interval()
        .data(chartData)
        .transform({ type: "stackY" })
        .encode("y", "percentage")
        .encode("color", "variantName")
        .scale("color", {
          range: ["#e8c1a0", "#f47560", "#f1e15b", "#e8a838", "#61cdbb"],
        })
        .label({
          text: (d: any) => d.percentage + "%",
          style: {
            fontWeight: "bold",
            offset: 14,
          },
        })
        .label({
          text: (d: any) => d.variantName,
          position: "spider",
          connectorDistance: 0,
          style: {
            fontWeight: "bold",
            textBaseline: "bottom",
            dy: -4,
          },
        })
        .style("radius", 8)
        .style("stroke", "#fff")
        .style("lineWidth", 2)
        .animate("enter", { type: "waveIn" })
        .legend(false);

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

export default CovidCurrentVariantsChart;
