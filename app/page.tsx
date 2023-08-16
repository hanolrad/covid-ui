import CovidCasesChart from "./components/charts/CovidCasesChart"
import ChartCard from "./components/ChartCard"
import AppHeader from "./components/layout/AppHeader"
import PageHeaderWithActions from "./components/layout/PageHeaderWithActions"

export default function Home() {
  return (<>
    <AppHeader />
    <main className="flex flex-col justify-start p-16 pt-8">
      <PageHeaderWithActions title="Covid-19 cases - live data" />
      <ChartCard title="New cases UK (last 14 days)">
        <CovidCasesChart />
      </ChartCard>
    </main>
    </>
  )
}
