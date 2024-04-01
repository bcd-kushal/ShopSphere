// Delcaring Client Component
"use client"

interface ChartDataProps {
    XAxis: string, 
    technology: number,
    technologyColor: string,
    wearables: number,
    wearablesColor: string,
    sandwich: number,
    sandwichColor: string,
    kebab: number,
    kebabColor: string,
    fries: number,
    friesColor: string,
    donut: number,
    donutColor: string,
    [key:string]: string|number
}


// Importing Neccessary Packages
import { ResponsiveBar } from '@nivo/bar'

// Exporting Default function RevenueProfitChart
export default function RevenueProfitChart({ Chartdata=[] }: { Chartdata:ChartDataProps[] }) {
    return (
        <ResponsiveBar
            data={Chartdata}
            keys={[
                'technology',
                'wearables',
                'sandwich',
                'kebab',
                'fries',
                'donut'
            ]}
            indexBy="XAxis"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [['darker', 2]] }}
            // Important Starts Here
            defs={[
                { id: 'dots', type: 'patternDots', background: 'inherit', color: '#06b6d4', size: 4, padding: 1, stagger: true }, // Important
                { id: 'lines', type: 'patternLines', background: 'inherit', color: '#0ea5e9', rotation: -45, lineWidth: 6, spacing: 10 } // Important
            ]}
            fill={[{ match: { id: 'technology' }, id: 'dots' }, { match: { id: 'wearables' }, id: 'lines' }]}
            axisTop={null}
            axisRight={null}
            axisBottom={{ tickSize: 5, tickPadding: 5, tickRotation: 0, legend: "Months", legendPosition: 'middle', legendOffset: 32, truncateTickAt: 0 }}
            axisLeft={{ tickSize: 6, tickPadding: 5, tickRotation: 0, legend: "Profits", legendPosition: 'middle', legendOffset: -40, truncateTickAt: 0 }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            legends={[{ dataFrom: 'keys', anchor: 'bottom-right', direction: 'column', justify: false, translateX: 80, translateY: 0, itemsSpacing: 2, itemWidth: 50, itemHeight: 20, itemDirection: 'left-to-right', itemOpacity: 0.85, symbolSize: 10, effects: [{ on: 'hover', style: { itemOpacity: 1 } }] }]}
            role="application"
            ariaLabel="Bar Chart"
        />
    )
}