import React from "react";
import Logo from "../../assets/icons/hostgator-logo.svg";

import "../header/header.css";
export default function Header() {
    return (
        <div className="container-header">
        <div>
            <img alt="logo" src={Logo} />
        </div>
        <div></div>
    </div>
   );
}