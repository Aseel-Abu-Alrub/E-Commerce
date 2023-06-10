import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext=createContext("")
export function UserContextProvider({children}){
   let[user,setUser]=useState(null)
   function SaveUserData(){
    let token=localStorage.getItem("userToken")
    let decode=jwtDecode(token)
    // console.log(decode);
    setUser(decode)
   
  
   }
   
  useEffect(()=>{
    if(localStorage.getItem("userToken")){
        SaveUserData();
    }
  },[])

 

  return <UserContext.Provider value={{SaveUserData,user,setUser}}>
     {children}
   </UserContext.Provider>
}