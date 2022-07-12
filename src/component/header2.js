import React from "react";
import './header.css'

//함수형 컴포넌트 선언
function Header2(props){
    return(
        <div className="header" style={{color:props.color}}>
            header{props.text}
        </div>
    )
}export default Header2;