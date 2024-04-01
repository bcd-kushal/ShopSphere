// Importing Neccessary Packages and Charts and Components
import Link from "next/link"
import RevenueProfitChart from "@/components/admin/RevenueProfitChart"
import DataTable from "@/components/admin/DataTable"

// Importing Icons
import { NewMoneyIcon, NewSalesIcon, NewVendorsIcon, NewTrafficIcon } from "@/components/admin/Icons"


// Exporting Default function for Dashboard
export default async function Dashboard() {
  // Dummy Data get from backend
  const vendorDetailsTableHeader = ["VENDOR NAME", "CATEGORY", "($)SALES", "PROFITS"]
  const vendorDetailsTableData = [["Rudra Mishra", "Silver", "122,003", "12%"], ["Kushal Saha", "Gold", "979,003", "39%"], ["Rajesh Yadav", "Bronze", "279,003", "35%"], ["Ravi Vishwakarma", "Silver", "69,003", "46%"], ["Naveen Meta", "Silver", "67,003", "45%"], ["Ananat Ambani", "Bronze", "55,003", "67%"], ["Ananad Mahindra", "Gold", "652,535", "45%"], ["Shubham Sharma", "Silver", "342,023", "98%"], ["Jindal Panther", "Bronze", "23,102,203", "24%"], ["GOAT Rajesh", "Gold", "1,120,023", "64%"]]

  // Dummy Data get from backend when production here only beacuse using server component for StatsBox
  const profitGeneratedStatsBox   = { number: 3159244,    percentage: 15 }
  const salesGeneratedForStatsBox = { number: 213159244,  percentage: 12 }
  const newVendorsForStatsBox     = { number: 13159,      percentage: 56 }
  const trafficReceivedForStatsBox= { number: 141233023,  percentage: 87 }

  const data = [
    { "XAxis": "JAN", "technology": 103, "technologyColor": "hsl(277, 70%, 50%)", "wearables": 168, "wearablesColor": "hsl(140, 70%, 50%)", "sandwich": 38, "sandwichColor": "hsl(349, 70%, 50%)", "kebab": 22, "kebabColor": "hsl(304, 70%, 50%)", "fries": 187, "friesColor": "hsl(248, 70%, 50%)", "donut": 87, "donutColor": "hsl(51, 70%, 50%)" },
    { "XAxis": "FEB", "technology": 103, "technologyColor": "hsl(277, 70%, 50%)", "wearables": 168, "wearablesColor": "hsl(140, 70%, 50%)", "sandwich": 38, "sandwichColor": "hsl(349, 70%, 50%)", "kebab": 22, "kebabColor": "hsl(304, 70%, 50%)", "fries": 187, "friesColor": "hsl(248, 70%, 50%)", "donut": 87, "donutColor": "hsl(51, 70%, 50%)" },
    { "XAxis": "MAR", "technology": 103, "technologyColor": "hsl(277, 70%, 50%)", "wearables": 168, "wearablesColor": "hsl(140, 70%, 50%)", "sandwich": 38, "sandwichColor": "hsl(349, 70%, 50%)", "kebab": 22, "kebabColor": "hsl(304, 70%, 50%)", "fries": 187, "friesColor": "hsl(248, 70%, 50%)", "donut": 87, "donutColor": "hsl(51, 70%, 50%)" },
    { "XAxis": "APR", "technology": 103, "technologyColor": "hsl(277, 70%, 50%)", "wearables": 168, "wearablesColor": "hsl(140, 70%, 50%)", "sandwich": 38, "sandwichColor": "hsl(349, 70%, 50%)", "kebab": 22, "kebabColor": "hsl(304, 70%, 50%)", "fries": 187, "friesColor": "hsl(248, 70%, 50%)", "donut": 87, "donutColor": "hsl(51, 70%, 50%)" },
    { "XAxis": "MAY", "technology": 13, "technologyColor": "hsl(157, 70%, 50%)", "wearables": 1, "wearablesColor": "hsl(44, 70%, 50%)", "sandwich": 177, "sandwichColor": "hsl(285, 70%, 50%)", "kebab": 184, "kebabColor": "hsl(225, 70%, 50%)", "fries": 76, "friesColor": "hsl(127, 70%, 50%)", "donut": 113, "donutColor": "hsl(61, 70%, 50%)" }
  ]

  const newlyJoinedCutomers = [{ name: "Rudra Kumar Mishra", date: "12/09/2020" }, { name: "Kushal Kumar Saha", date: "12/09/2020" }, { name: "Rajesh Yadav", date: "13/09/2020" }, { name: "Naveen Singh", date: "13/09/2020" }, { name: "Gulshan Pratap", date: "14/09/2020" }, { name: "Shivam Pandey", date: "15/09/2020" }, { name: "Rudra Kumar Mishra", date: "12/09/2020" }, { name: "Kushal Kumar Saha", date: "12/09/2020" }, { name: "Rajesh Yadav", date: "13/09/2020" }, { name: "Naveen Singh", date: "13/09/2020" }, { name: "Gulshan Pratap", date: "14/09/2020" }, { name: "Shivam Pandey", date: "15/09/2020" }]

  // StatsBox Function
  interface StatsBoxProps { icon:JSX.Element, number:number, percentage:number, text:string, href:string }
  const StatsBox = ({ icon, number=0, percentage=0, text = "Text", href = "/admin/dashboard" }:StatsBoxProps) => {
    const angle = percentage * 3.6
    return (
      <Link href={href} className="flex w-full min-h-36 max-h-36 justify-between items-center gap-2">
        <div className="flex flex-col justify-between gap-1">
          <span className="fill-emerald-500">{icon}</span>
          <h5 className="text-2xl font-semibold">{(()=>{
            const str = String(number)
            let formattedNum = "", k=0
            if(str.length<=3) return str 
            for(let i=str.length-1;i>=0;i--) {
              formattedNum = str[i] + ( (k%3===0 && k!==0)? ",":"") + formattedNum
              k+=1
            }
            return formattedNum
          })()}</h5>
          <p className="text-emerald-500 font-medium">{text}</p>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center gap-1">
            <div style={{ width: "60px", height: "60px", background: `radial-gradient(#f2f0f0 55%, transparent 56%), conic-gradient(transparent 0deg ${angle}deg, #6870fa ${angle}deg 360deg), #4cceac`, borderRadius: "50%" }}></div>
            <div className="text-lg text-emerald-400 font-bold">{percentage}%</div>
          </div>
        </div>
      </Link>
    )
  }

  // Returning JSX
  return (
    <div className="w-full py-2 sm:py-4 px-2 md:px-4 lg:px-6">
      {/* StatsBox Section Starts Here */}
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        <div className="bg-gray-200 py-1 px-3 rounded-md overflow-hidden hover:bg-gray-100 transition duration-300"><StatsBox href="/admin/analytics/profits"     text="Profits"          percentage={profitGeneratedStatsBox.percentage}    number={profitGeneratedStatsBox.number}    icon={<NewMoneyIcon width="35px" height="35px" />} /></div>
        <div className="bg-gray-200 py-1 px-3 rounded-md overflow-hidden hover:bg-gray-100 transition duration-300"><StatsBox href="/admin/analytics/sales"       text="Sales"            percentage={salesGeneratedForStatsBox.percentage}  number={salesGeneratedForStatsBox.number}  icon={<NewSalesIcon width="35px" height="35px" />} /></div>
        <div className="bg-gray-200 py-1 px-3 rounded-md overflow-hidden hover:bg-gray-100 transition duration-300"><StatsBox href="/admin/vendors/store"         text="New Vendors"      percentage={newVendorsForStatsBox.percentage}      number={newVendorsForStatsBox.number}      icon={<NewVendorsIcon width="35px" height="35px" />} /></div>
        <div className="bg-gray-200 py-1 px-3 rounded-md overflow-hidden hover:bg-gray-100 transition duration-300"><StatsBox href="/admin/customers/statistics"  text="Traffic Received" percentage={trafficReceivedForStatsBox.percentage} number={trafficReceivedForStatsBox.number} icon={<NewTrafficIcon width="35px" height="35px" />} /></div>
      </div>
      {/* StatsBox Section Ends Here */}

      {/* Charts Section Starts Here */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-1 md:gap-2 my-5">

        <div className="relative min-h-96 max-h-96 bg-zinc-200 py-1 px-3 rounded-md overflow-hidden">
          <h1 className="absolute top-5 right-5 font-semibold text-emerald-500">Profit Chart</h1>
          <RevenueProfitChart Chartdata={data} />
        </div>

        <div className="flex min-h-96 max-h-96 flex-col bg-zinc-200 rounded-md gap-1">
          <DataTable header={vendorDetailsTableHeader} data={vendorDetailsTableData} />
        </div>
      </div>
      {/* Charts Section Ends Here */}
    </div>
  )
}