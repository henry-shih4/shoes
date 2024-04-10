import React  from 'react'
import { useContext } from "react";
import { LoginContext } from  '../Context/LoginContext';



export default function Orders() {
const [activeUser] =
  useContext(LoginContext);

  return (
    <div className='pt-40'>Orders for {activeUser.username} </div>
    
  )
}
