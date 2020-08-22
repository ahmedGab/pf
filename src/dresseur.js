import React,{useState,useEffect} from 'react'
import axios from "axios"
import Navbar from "./navbar"
import CardDresseurs from './cardDresseurs'
import Footer from "./footer"
const Dresseur=()=>{
    const [data, setData] = useState("");

   

return (
<div>
    
<Navbar />
<CardDresseurs/>
<Footer/>
</div>  



)


}
export default Dresseur