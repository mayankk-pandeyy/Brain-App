import Hero from "./Hero"
import SideBar from "./SideBar"

const Content = () => {
  return (
    <div className="w-[100%] h-[85vh]">
        <div className="grid grid-cols-10 gap-4 h-full">
            <div className="col-span-3 bg-green-500">
                <SideBar/>
            </div>
            <div className="col-span-7 bg-cyan-400">
                <Hero/>
            </div>
        </div>
    </div>
  )
}

export default Content