import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export function useContent () {
    const [contents, setContents] = useState([]);

     useEffect(()=> {
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers : {
                "token" : localStorage.getItem("token")
            }
        }).then((response)=> {
            setContents(response.data.contents);
            console.log(response.data.contents);
        })
    }, [])

    return contents
}