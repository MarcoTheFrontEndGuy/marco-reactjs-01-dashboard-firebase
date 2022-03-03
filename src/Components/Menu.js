import React, { useEffect } from 'react'
import "./Menu.css"
import Logo from "../img/logo.png"
import { 
  FaDelicious, 
  FaShoppingCart, 
  FaWallet, 
  FaChartLine, 
  FaRegClock, 
  FaCog, 
  FaSignOutAlt 
} from 'react-icons/fa'

function Menu() {

  useEffect(() => {

    const mainMenuLi = document.getElementById("mainMenu").querySelectorAll("li");
    // left sidebar change icon color on click 
    
    // ----------------------------------------
    // select all li elements remove active class
    // select <<this>> and add active class
    // function changeActive() {
    //   mainMenuLi.forEach( (n) => n.classList.remove("active"));
    //   this.classList.add("active");
    // }
    // ----------------------------------------

    // ----------------------------------------
    // This is my solution to 
    // remove class from a group and add to the clicked element 
    function changeActive(ev) {
      mainMenuLi.forEach( (n) => n.classList.remove("active"));
      ev.currentTarget.classList.add("active");
    }
    // ----------------------------------------


    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
    
  },[]);


  return (
  <menu>
     <img src={Logo} alt="" />
     
     <ul id="mainMenu">
       <Icon icon={<FaDelicious />} />
       <Icon icon={<FaShoppingCart />} />
       <Icon icon={<FaWallet />} />
       <Icon icon={<FaChartLine />} />
       <Icon icon={<FaRegClock />} />
     </ul>
     
     <ul className="lastMenu">
       <Icon icon={<FaCog />} />
       <Icon icon={<FaSignOutAlt />} />
     </ul>
  </menu>
  );

  
}


// component to create each icon of the left sidebar inside the #mainMenu
const Icon = ({icon}) => (
  <li>
    <a href="#">{icon}</a>
  </li>
)

export default Menu