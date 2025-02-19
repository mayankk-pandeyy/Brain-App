
import logo from "../assets/logo.png"
import AddIcon from "../icons/AddIcon"
import LogoutIcon from "../icons/LogoutIcon"
import ShareIcon from "../icons/ShareIcon"
import Button from "./Button"

interface ModalType {
    open : boolean,
    setOpen : (a : boolean) => void
}

const Navbar = ({open, setOpen} : ModalType) => {

    function buttonHandler(){
        console.log("clicked");
        setOpen(!open);
        console.log(open);
    }

    function logoutHandler(){

        
    }

  return (
    <div className="w-[100%] my-auto">
        <div className="grid grid-cols-10">
            {/* Logo */}
            <div className="w-[150px] col-span-6">
                <img src={logo}/>
            </div>

            {/* Add Content & Logout */}
            <div className="col-span-4 grid grid-cols-3">
                {/* Add Content */}
                <div onClick={buttonHandler} className="col-span-1 place-items-end">
                    <Button varient={"primary"} size={"sm"} text={"Add Content"} preIcon={<AddIcon/>}/>
                </div>

                {/* Share Brain */}
                <div onClick={buttonHandler} className="col-span-1 place-items-end">
                    <Button varient={"primary"} size={"sm"} text={"Share Brain"} preIcon={<ShareIcon/>}/>
                </div>

                {/* Logout */}
                <div onClick={logoutHandler} className="col-span-1 place-items-end">
                    <Button varient={"secondary"} size={"sm"} text={"Logout"} preIcon={<LogoutIcon/>}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar