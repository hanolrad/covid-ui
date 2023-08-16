import CovidCasesChart from "./components/charts/CovidNewCasesChart"
import ChartCard from "./components/ChartCard"
import AppHeader from "./components/layout/AppHeader"
import PageHeaderWithActions from "./components/layout/PageHeaderWithActions"
import CovidCurrentVariantsChart from "./components/charts/CovidCurrentVariantsChart"

export default function Home() {
  return (<>
    <AppHeader />
    <main className="flex flex-col justify-start p-16 pt-8">
      <PageHeaderWithActions title="Covid-19 cases - live data" />
      <div className="flex flex-row justify-between">
        <ChartCard title="New cases UK (last 14 days)">
          <CovidCasesChart />
        </ChartCard>
        <ChartCard title="Current variants UK (latest available data)">
          <CovidCurrentVariantsChart />
        </ChartCard>
      </div>
    </main>
    </>
  )
}
