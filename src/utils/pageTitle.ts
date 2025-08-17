import { useEffect } from "react"


export const pageTitle = (title:string)=>{
    useEffect(()=>{
        document.title = title
    },[title])
}