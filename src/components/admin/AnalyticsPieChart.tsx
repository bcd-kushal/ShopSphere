// Declaring Client Component
"use client"

// Importing Packages
import { ResponsivePie } from "@nivo/pie"

const data = [
    {
        "id": "stylus",
        "label": "stylus",
        "value": 246,
        "color": "hsl(121, 70%, 50%)"
    },
    {
        "id": "scala",
        "label": "scala",
        "value": 92,
        "color": "hsl(202, 70%, 50%)"
    },
    {
        "id": "haskell",
        "label": "haskell",
        "value": 68,
        "color": "hsl(337, 70%, 50%)"
    },
    {
        "id": "ruby",
        "label": "ruby",
        "value": 156,
        "color": "hsl(177, 70%, 50%)"
    },
    {
        "id": "hack",
        "label": "hack",
        "value": 555,
        "color": "hsl(243, 70%, 50%)"
    }
]

export default function AnalyticsPieChart({ legendColor = "#999999", legendHoverColor = "#000000" }) {
    return (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.5]] }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
            // Important Starts Here
            defs={[
                { id: 'dots', type: 'patternDots', background: 'inherit', color: 'rgba(255, 255, 255, 0.3)', size: 3, padding: 1, stagger: true },
                { id: 'lines', type: 'patternLines', background: 'inherit', color: 'rgba(255, 255, 255, 0.3)', rotation: -45, lineWidth: 6, spacing: 10 }
            ]}
            fill={[
                { match: { id: 'ruby' }, id: 'dots' },
                { match: { id: 'c' }, id: 'dots' },
                { match: { id: 'go' }, id: 'dots' },
                { match: { id: 'python' }, id: 'dots' },
                { match: { id: 'scala' }, id: 'lines' },
                { match: { id: 'lisp' }, id: 'lines' },
                { match: { id: 'elixir' }, id: 'lines' },
                { match: { id: 'javascript' }, id: 'lines' }
            ]}
            // Important Ends Here
        />
    )
}