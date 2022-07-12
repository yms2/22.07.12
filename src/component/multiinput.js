import React, { useState, useRef } from "react";

function MultiInput(){
    const [inputs, setInputs] = useState({ 
        //여러개의 값이 바뀌는 변수를 선언하기 위해 객체형식
        userid:'',
        name:''
    });

    const useridInput = useRef() //특정 DOM선택
    const {userid,name} = inputs; //비구조화 할당을 값을 전달

    const onChange = (e) =>{
        const {value,name} = e.target; //e.target에서 name과 value값을 가져옴
        setInputs({
            ...inputs, //객체를 복사
            [name]:value//name키를 가진 값을 value로 설정.
        });
    }

    const onReset = () =>{
        setInputs({
            userid:'',
            name:''
        })
        useridInput.current.focus();
    }
    return(
        <div>
            <input name='userid' onChange={onChange} placeholder = "아이디" value={userid} ref={useridInput}/>
            <input name='name' onChange={onChange} placeholder="이름" value={name}/>
            <button onClick={onReset}>지우기</button>
            <div>
                <b>아이디:{userid}</b>, <b>이름:{name}</b>
            </div>
        </div>
    )
}export default MultiInput;