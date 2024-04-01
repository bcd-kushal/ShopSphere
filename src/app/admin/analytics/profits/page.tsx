"use server"

// Importing Neccessary Packages and Charts and Grids
import AnalyticsPieChart from "@/components/admin/AnalyticsPieChart"


// Exporting Default function for Dashboard
export default async function Porfits() {
    return (
        <div className="w-full py-2 sm:py-4 px-2 md:px-4 lg:px-6">
            <div style={{width: "500px", height: "500px"}}><AnalyticsPieChart /></div>
        </div>
    )
}