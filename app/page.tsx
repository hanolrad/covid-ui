import CovidCasesChart from "./components/charts/CovidNewCasesChart";
import ChartCard from "./components/ChartCard";
import AppHeader from "./components/layout/AppHeader";
import PageHeaderWithActions from "./components/layout/PageHeaderWithActions";
import CovidCurrentVariantsChart from "./components/charts/CovidCurrentVariantsChart";

export default function Home() {
  return (
    <>
      <AppHeader />
      <main className="flex flex-col justify-center items-center min-h-screen p-16 pt-8 mx-auto max-w-screen-lg">
        <PageHeaderWithActions title="Covid-19 cases - live data" />
        <div className="flex flex-row justify-around space-x-4">
          <ChartCard title="New cases UK (last 14 days)">
            <CovidCasesChart />
          </ChartCard>
          <ChartCard title="Current variants UK (latest available data)">
            <CovidCurrentVariantsChart />
          </ChartCard>
        </div>
      </main>
    </>
  );
}
