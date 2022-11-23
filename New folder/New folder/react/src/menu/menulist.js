import React, { useState, useEffect } from "react";
import Item from "./item";
import './menulist.css';
import ButtonCartCount from '../ButtonCartCount';
import Profile from "../components/profile.component";


const Menulist=(list)=> {

  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getcategory = async () => {
      const res = await fetch("http://localhost:8080/api/auth/product/fetch_product");
      const getdata = await res.json();
      setCategory(getdata);
    };
    getcategory();
    
  },[]);
  return (
    <div>
    <React.Fragment>
      <main>
              {category.map((getcate) => (
                <Item  getcate={getcate} key={getcate.id}/>
              ))}
      </main>
   </React.Fragment>
   <ButtonCartCount />
  </div>
  );}

export default Menulist;

