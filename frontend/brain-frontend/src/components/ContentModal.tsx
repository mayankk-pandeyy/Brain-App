import { useRef } from "react";
import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";
import Input from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface ModalType {
    open : boolean,
    setOpen : any
}

const ContentModal = ({open, setOpen} : ModalType) => {

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);

    function closeModalHandler(){
        setOpen(!open);
    }

    async function addContentHandler(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        if(title == ""){
            return ;
        }else if(link == ""){
            return ;
        }

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            title : title,
            link : link
        }, {
            headers : {
                token : localStorage.getItem("token")
            }
        })
        console.log("Done");

        alert("Content Added!");
        setOpen(false);
    }

  return (
    <div className="w-[30%] py-6 bg-[#010400] font-mont text-white">
        <div className="w-[90%] h-full mx-auto overflow-scroll">
            {/* Topbar */}
            <div className="w-full flex items-center justify-between">
                <div className="text-xl">
                    Add Content
                </div>
                <div className="cursor-pointer" onClick={closeModalHandler}>
                    <CrossIcon/>
                </div>
            </div>

            {/* Input Boxes */}
            <div className="w-full flex flex-col gap-3 mt-4">
                <Input inputHead={"Title:"} placeholder={"Title"} reference={titleRef}/>
                <Input inputHead={"Link:"} placeholder={"https://www.youtube.com"} reference={linkRef}/>
            </div>

            <div className="mt-6" onClick={addContentHandler}>
                <Button size="sm" varient="primary" text="Add Item"/>
            </div>
        </div>
    </div>
  )
}

export default ContentModal