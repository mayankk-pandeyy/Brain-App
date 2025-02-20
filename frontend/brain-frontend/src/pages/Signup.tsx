import { useRef } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


const Signup = () => {

    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();
    
    async function signupHandler(){
        try{
            const username = usernameRef.current?.value;
            const firstName = firstNameRef.current?.value; 
            const lastName = lastNameRef.current?.value; 
            const email = emailRef.current?.value; 
            const password = passwordRef.current?.value; 

            const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                    firstName : firstName,
                    lastName : lastName,
                    username : username,
                    email : email,
                    password : password
            });
            console.log(response);
            navigate("/signin");
            alert("Signed Up!")
        }catch(e){
            console.log(e);
        }
    }

  return (
    <div className="w-full h-full bg-[#1E1E1E] flex items-center justify-center">
        <div className="w-[30%] mx-auto py-6 bg-[#02020E] font-mont">
            <div className="w-[90%] h-full mx-auto overflow-scroll">
                {/* Topbar */}
                <div className="w-full flex items-center justify-center">
                    <div className="text-xl font-bold text-[#fff]">
                        Welcome
                    </div>
                </div>

                {/* Input Boxes */}
                <div className="w-full text-[#6E6E78] flex flex-col gap-4 mt-4">
                    <Input inputHead={"First Name:"} placeholder={"Mayank"} reference={firstNameRef}/>
                    <Input inputHead={"Last Name:"} placeholder={"Pandey"} reference={lastNameRef}/>
                    <Input inputHead={"Username:"} placeholder={"devspy"} reference={usernameRef}/>
                    <Input inputHead={"Email:"} placeholder={"mayankp7781@gmail.com"} reference={emailRef}/>
                    <Input inputHead={"Password:"} placeholder={"Password"} reference={passwordRef}/>
                </div>

                <div className="mt-6" onClick={signupHandler}>
                    <Button size="sm" varient="primary-signup" text="Sign up"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup