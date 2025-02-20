import Hero from "./Hero"
import SideBar from "./SideBar"



const Content = () => {

  return (
    <div className="w-[100%] h-full">
        <div className="w-[100%] h-[100%] flex justify-between overflow-hidden">
            <div className="w-[20%] col-span-2">
                <SideBar/>
            </div>
            <div className="w-[75%] h-[100%] col-span-8">
                <Hero/>
            </div>
        </div>
    </div>
  )
}

export default Content