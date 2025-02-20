import { useEffect, useState } from "react";
import { useContent } from "../hooks/useContent";
import Card from "./Card"



const Hero = () => {

  const contents = useContent();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    if(contents.length > 0){
      setLoading(false);
    }
  }, [contents])


  return (
    <div className="h-full flex items-center justify-center border border-[#555555]">
      <div className="h-[100%] w-[100%] overflow-y-scroll">
        <div className="py-5 px-2">
          {
            loading ? "Loading..." : (<div className="grid grid-cols-3 auto-rows-[400px] gap-4">
              {
                contents.map(({title})=>{
                  return <div className="col-span-1 shadow-2xl bg-[#CAC6BC] hover:scale-95 cursor-pointer transition-all duration-100">
                  <Card title={title} link={"https://www.youtube.com/embed/29yYlVm171c?si=smogJ5mWsDt0Bsoc"} type={"youtube"}/>
                </div>
                })
              }
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Hero
