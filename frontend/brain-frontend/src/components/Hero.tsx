import { useEffect } from "react"
import Card from "./Card"

const Hero = () => {

  useEffect(()=>{}, [])

  return (
    <div className="h-full flex items-center justify-center border border-[#555555]">
      <div className="h-[100%] w-[100%] overflow-y-scroll">
        <div className="grid grid-cols-3 auto-rows-[400px] gap-4 py-5 px-2">
          <div className="col-span-1 shadow-2xl bg-[#CAC6BC] hover:scale-95 cursor-pointer transition-all duration-100">
            <Card title={"Project Ideas"} link={"https://www.youtube.com/embed/29yYlVm171c?si=smogJ5mWsDt0Bsoc"} type={"youtube"}/>
          </div>
          <div className="col-span-1 shadow-2xl hover:scale-95 cursor-pointer transition-all duration-100">
            <Card title={"Hii"} link={"https://twitter.com/rishabhknows/status/1891714139849998621"} type={"twitter"}/>
          </div>
          <div className="col-span-1 shadow-2xl hover:scale-95 cursor-pointer transition-all duration-100">
            <Card title={"Hii"} link={"https://twitter.com/mdevspy/status/1891606971779879408"} type={"twitter"}/>
          </div>

          <div className="col-span-1 shadow-2xl hover:scale-95 cursor-pointer transition-all duration-100">
            <Card title={"Hii"} link={"https://twitter.com/mdevspy/status/1891606971779879408"} type={"twitter"}/>
          </div>

          <div className="col-span-1 shadow-2xl hover:scale-95 cursor-pointer transition-all duration-100">
            <Card title={"Hii"} link={"https://twitter.com/mdevspy/status/1891606971779879408"} type={"twitter"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
