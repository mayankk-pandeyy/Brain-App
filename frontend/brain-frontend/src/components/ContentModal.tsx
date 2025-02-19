import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";
import Input from "./Input";

interface ModalType {
    open : boolean,
    setOpen : any
}

const ContentModal = ({open, setOpen} : ModalType) => {

    function closeModalHandler(){
        setOpen(!open);
    }

  return (
    <div className="w-[30%] h-[80%] py-6 bg-[#FFEDC9] font-mono">
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
                {/* <Input inputHead={"First Name:"} placeholder={"Mayank"}/>
                <Input inputHead={"Last Name:"} placeholder={"Pandey"}/>
                <Input inputHead={"Username:"} placeholder={"devspy"}/>
                <Input inputHead={"Email:"} placeholder={"mayankp7781@gmail.com"}/>
                <Input inputHead={"Password:"} placeholder={"Password"}/> */}
            </div>

            <div className="mt-6">
                <Button size="sm" varient="primary" text="Add Item"/>
            </div>
        </div>
    </div>
  )
}

export default ContentModal