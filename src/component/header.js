import React from "react";
import './header.css'

//함수형 컴포넌트 선언
function Header(text){
    return(
        <div className="header">
            header{text}
        </div>
    )
}export default Header;