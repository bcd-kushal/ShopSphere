// Importing Neccessary Packages
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
// Importing Icons
import { DashboardIcon, BarsIcon, AnalyticsProfitIcon, AnalyticsOrdersIcon, AnalyticsSalesIcon, VendorStoreIcon, VendorProductsIcon, VendorSalesIcon, CutomersManageIcon, CutomersInterestIcon, CutomersStatisticsIcon, ProfileIcon, MyAcoountIcon, LogoutIcon } from "@/components/admin/Icons"



// Items for navigation
interface ItemProps { title:string, to:string, icon:JSX.Element, selected:boolean }
const Item = ({ title, to, icon, selected }: ItemProps) => {
    return (
        <Link href={to} className="group flex items-center text-black gap-4 my-1 ml-3 rotate-once hover:text-[#0070f3] hover:fill-[#0070f3] adminSidebarAnimation" style={selected ? { fill: "#0070f3", color: "#0070f3" } : {}}>
            <div>{icon}</div><span style={selected ? { fontWeight: "600" } : {}}>{title}</span>
        </Link>
    )
}



// Exporting Default function for Sidebar
interface SidebarProps { sidebarReference:any, changeSidebarState:any }
export default function Sidebar({ sidebarReference, changeSidebarState }: SidebarProps) {
    // Getting current path
    const path = usePathname()


    // Returning JSX
    return (
        <aside id="hideScrollbar" ref={sidebarReference} className="md:static md:translate-x-[0%] absolute translate-x-[-100%] top-0 left-0 flex max-w-64 min-w-60 min-h-dvh max-h-dvh flex-col bg-gray-200 overflow-x-hidden overflow-y-auto transition duration-500 z-10">
            {/* LOGO AND MENU ICON Starts Here */}
            <h3 className="flex w-full text-2xl justify-between items-center gap-2 mt-3 mb-5 px-5">
                ShopSphere
                <div onClick={changeSidebarState} className="inline md:hidden"><BarsIcon width="25px" height="25px" /></div>
            </h3>

            <div className="flex w-full flex-col justify-center items-center mt-3">
                <Image style={{ width: "100px", height: "100px", borderRadius: "50%" }} src="/profile.jpg" alt="ShopSphere" width={100} height={100} />
                <h1 className="text-3xl font-bold mt-4">Ed. Roh</h1>
                <h3 className="text-lg text-emerald-500">Senoir Admin</h3>
            </div>
            {/* LOGO AND MENU ICON Ends Here */}


            {/* Navigation Starts Here */}
            <div className="flex w-full flex-col mt-5" style={{ paddingLeft: "15%" }}>
                <Item title="Dashboard" to="/admin/dashboard" icon={<DashboardIcon width={20} height={20} />} selected={path === "/admin/dashboard" ? true : false} />

                {/* Analytics Section Starts Here */}
                <div className="text-sm text-gray-600 font-medium mt-5 mb-3">Analytics</div>
                <Item title="Profits" to="/admin/analytics/profits" icon={<AnalyticsProfitIcon width={20} height={20} />} selected={path === "/admin/analytics/profits" ? true : false} />
                <Item title="Orders" to="/admin/analytics/orders" icon={<AnalyticsOrdersIcon width={20} height={20} />} selected={path === "/admin/analytics/orders" ? true : false} />
                <Item title="Sales" to="/admin/analytics/sales" icon={<AnalyticsSalesIcon width={20} height={20} />} selected={path === "/admin/analytics/sales" ? true : false} />
                {/* Analytics Section Ends Here */}

                {/* Vendors Section Starts Here */}
                <div className="text-sm text-gray-600 font-medium mt-5 mb-3">Vendors</div>
                <Item title="Store" to="/admin/vendors/store" icon={<VendorStoreIcon width={20} height={20} />} selected={path === "/admin/vendors/store" ? true : false} />
                <Item title="Products" to="/admin/vendors/products" icon={<VendorProductsIcon width={20} height={20} />} selected={path === "/admin/vendors/products" ? true : false} />
                <Item title="Sales" to="/admin/vendors/sales" icon={<VendorSalesIcon width={20} height={20} />} selected={path === "/admin/vendors/sales" ? true : false} />
                {/* Vendors Section Ends Here */}

                {/* Vendors Section Starts Here */}
                <div className="text-sm text-gray-600 font-medium mt-5 mb-3">Customers</div>
                <Item title="Manage" to="/admin/customers/manage" icon={<CutomersManageIcon width={20} height={20} />} selected={path === "/admin/customers/manage" ? true : false} />
                <Item title="Interest" to="/admin/customers/interest" icon={<CutomersInterestIcon width={20} height={20} />} selected={path === "/admin/customers/interest" ? true : false} />
                <Item title="Statistics" to="/admin/customers/statistics" icon={<CutomersStatisticsIcon width={20} height={20} />} selected={path === "/admin/customers/statistics" ? true : false} />
                {/* Vendors Section Ends Here */}

                {/* Vendors Section Starts Here */}
                <div className="text-sm text-gray-600 font-medium mt-5 mb-3">Settings</div>
                <Item title="Profile" to="/admin/settings/profile" icon={<ProfileIcon width={20} height={20} />} selected={path === "/admin/settings/profile" ? true : false} />
                <Item title="My Account" to="/admin/settings/account" icon={<MyAcoountIcon width={20} height={20} />} selected={path === "/admin/settings/account" ? true : false} />
                <Item title="Logout" to="/api/logout" icon={<LogoutIcon width={20} height={20} />} selected={false} />
                {/* Vendors Section Ends Here */}
                <br /><br />
            </div>
            {/* Navigation Ends Here */}
        </aside>
    )
}