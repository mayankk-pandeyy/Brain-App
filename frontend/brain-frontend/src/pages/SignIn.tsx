import { useRef } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
    const passwordRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();
    
    async function signInHandler(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value; 

        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
                username : username,
                password : password
            
        })
        const token = response.data.jwt;
        await localStorage.setItem("token", token);
        navigate("/dashboard");
    }

  return (
    <div className="w-full h-full bg-[#1E1E1E] flex items-center justify-center">
        <div className="w-[30%] mx-auto py-6 bg-[#02020E] font-mont">
            <div className="w-[90%] h-full mx-auto overflow-scroll">
                {/* Topbar */}
                <div className="w-full flex items-center justify-center">
                    <div className="text-xl font-bold text-white">
                        SignIn
                    </div>
                </div>

                {/* Input Boxes */}
                <div className="w-full flex flex-col text-[#6E6E78] gap-3 mt-4">
                    <Input inputHead={"Username:"} placeholder={"devspy"} reference={usernameRef}/>
                    <Input inputHead={"Password:"} placeholder={"Password"} reference={passwordRef}/>
                </div>

                <div className="mt-6" onClick={signInHandler}>
                    <Button size="sm" varient="primary-signup" text="Sign up"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn