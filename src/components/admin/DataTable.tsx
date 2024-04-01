// Exporting Default function for DataTable
export default function DataTable({ header, data }: { header:string[], data:string[][] }) {

    // Returning JSX
    return (
        <div id="data-table-sidebar" className="relative w-full h-full overflow-x-auto overflow-y-auto">
            <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs bg-gray-400 uppercase">
                    <tr className="text-white">
                        {header.map((element, key) => { 
                            return (<th key={key} scope="col" className="px-6 py-3"> {element}</th>) 
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((element, keyy) => { 
                        return (<tr key={keyy} className="border-b">{element.map((value, key) => { 
                            return (<td key={key} className="px-6 py-4 font-medium whitespace-nowrap">{value}</td>) })
                        }</tr>) })
                    }
                </tbody>
            </table>
        </div>
    )
}