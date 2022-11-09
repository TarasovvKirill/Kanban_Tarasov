import React from 'react';
import "./UserMenu.css";
import { useState } from 'react';
import userLogo from "./userLogo.svg";
import arrow from "./arrow.svg"

function DropDownMenu(props) {
    return ( 
        <div className={props.className}>
            <div className='dropdownSquare'></div>
            <nav className='dropdownMenu'>
                <ul>
                    <li>Profile</li>
                    <li>Log out</li>
                </ul>
            </nav>
        </div>
     );
}

function UserMenu() {

    const [open, setOpen] = useState(false)
    
    return ( 
        <div className="userMenu">
            <div className="menuLogo" onClick={() => {setOpen(!open)}}>
                <img className="userLogo" src={userLogo} alt="userLogo"></img>
                <img src={arrow} alt="arrow" className={`userArrow ${open? 'up' : 'down'}`}></img>
            </div>
            <DropDownMenu className={`userDropdownMenu ${open? 'active' : 'inactive'}`}/>
        </div>
     );
}

export default UserMenu;