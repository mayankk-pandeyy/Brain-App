import DeleteIcon from "../icons/DeleteIcon"
import Ideas from "../icons/Ideas"
import ShareIcon from "../icons/ShareIcon"

interface CardProps {
    title : string,
    link : string,
    type : string
}

const Card = ({title, link, type} : CardProps) => {
  return (
    <div className="w-full h-[100%] px-3 py-3 overflow-scroll">
        <div className="w-full mx-auto flex justify-between">
            {/* left */}
            <div className="w-[70%] flex gap-3">
                <div>
                    <Ideas/>
                </div>
                <div className="text-xl w-[90%] overflow-auto">
                    {title}
                </div>
            </div>

            {/* Right */}
            <div className="flex gap-4">
                <div>
                    <ShareIcon/>
                </div>
                <div>
                    <DeleteIcon/>
                </div>
            </div>
        </div>

        {/* Video Embed */}
        <div className="h-[60%] w-full object-contain mx-auto mt-5 overflow-y-auto cursor-pointer">
            {
                type === "youtube" && 
                <iframe width="560" height="315" src={link} title="YouTube video player" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> 
            }

            {
                type === "twitter" && 
                <blockquote className="twitter-tweet">
                    <a href={link} className="max-w-[100%]"></a> 
                </blockquote>
            }
        </div>

        <div>
            Hii
        </div>
    </div>
  )
}

export default Card