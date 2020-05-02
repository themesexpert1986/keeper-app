import React from "react";

function Footer (){
    const currentYear = new Date();
    return <footer><p> copyright Ⓒ {currentYear.getFullYear()} by Vinhnx </p></footer>;
}

export default Footer;