import { Outlet } from "react-router"
import { Navbar } from "../components/navigation/Navbar"


const MainLayout = () => {
    return (
        <div className="w-full min-h-screen bg-black text-white flex-1 flex items-start">
            <aside className="w-[25%] bg-blue-300/60 h-screen">
                hello
            </aside>

            <div className="w-[80%] bg-purple-900 overflow-y-auto flex flex-col gap-5 p-5">
                <Navbar/>
                <Outlet/>
            </div>
            
        </div>
    )
}

export default MainLayout
