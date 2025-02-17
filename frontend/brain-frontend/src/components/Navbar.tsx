import logo from "../assets/logo.png"
import AddIcon from "../icons/AddIcon"
import LogoutIcon from "../icons/LogoutIcon"
import Button from "./Button"

const Navbar = () => {

    function buttonHandler(){

    }

  return (
    <div className="w-[100%]">
        <div className="flex items-center justify-between py-3 px-5">
            {/* Logo */}
            <div className="w-[150px]">
                <img src={logo}/>
            </div>

            {/* Add Content & Logout */}
            <div className="w-[25%] flex justify-between">
                {/* Add Content */}
                <div>
                    <Button varient={"primary"} size={"sm"} text={"Add Content"} preIcon={<AddIcon/>} onClick={buttonHandler}/>
                </div>

                {/* Logout */}
                <div>
                    <Button varient={"secondary"} size={"sm"} text={"Logout"} preIcon={<LogoutIcon/>} onClick={buttonHandler}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar