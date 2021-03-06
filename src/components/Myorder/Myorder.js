import React, { useEffect, useState } from 'react';
import RegisteredOrder from './RegisteredOrder/RegisteredOrder';
import './RegisteredOrder/RegisteredOrder.css'

const Myorder = () => {
    const [myorders,setmyorders]=useState([])

    useEffect(()=>{
        fetch('https://aqueous-island-70963.herokuapp.com/myorder')
        .then(res=>res.json())
        .then(data=>setmyorders(data))
    },[])

    return (
        <div  className='container' >
           {
               myorders.map(order=><RegisteredOrder order={order}></RegisteredOrder>)
           }
        </div>
    );
};

export default Myorder;