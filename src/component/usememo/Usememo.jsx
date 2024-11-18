import React, { useMemo, useState } from 'react'


export const Usememo = () => {
    const [myNum, setMyNum]=useState(0);
    const [show, setShow]=useState(false);
    const [color, setColor]=useState("Red")

    const getValue = () => {
        return setMyNum(myNum+1);
    };

    const countNumber = (num) => {
        console.log("myNum : ", num);       // till here no time taken 
        for (let i = 0; i <= 1000000000; i++) {}
        return num;
    };

    const changeColor = () => {
        setColor("Blue")
    }

    // const checkData= countNumber(myNum)
    const checkData = useMemo(() => {
        return countNumber(myNum);
    },[myNum])

  return (
    <div align="center">
        <div className='my_title'>Usememo</div>
        <button onClick={getValue} className='btn btn-dark'>Counter</button>
        <p>My new number: {checkData}</p>
        <hr />
        <button className='btn btn-primary mb-3' onClick={()=>setShow(!show)}>{show ? "you click me" : "click me plz"}</button>
        <p>{color}</p>
        <button className='btn btn-danger' onClick={changeColor}>Change Color</button>
    </div>  
    )
}
