import { useSelector } from "react-redux";
import React from "react"
import { MyProfile } from "./MyProfile"

export function Profile(){
    const rockInfo = useSelector(state=>state.rockets);
    let count = 0
    return (
        <div className='row'>
        <div className='col-5 offset-1'>
         <MyProfile />
        </div>
        <div className='col-5'>
        <h1>My Rockets</h1>
        <div>
            {/* eslint-disable-next-line */}
            {rockInfo.map((item => {
                if (item.reserved && count===0){
                    count ++;
                    return <p style={{padding:'10px', margin:'0', fontSize:'25px', border:'solid 1px #8a8b8b'}}>{item.rocket_name}</p>
                }else if (item.reserved && count>0){
                    return <p style={{padding:'10px', margin:'0', fontSize:'25px', border:'solid 1px #8a8b8b', borderTop: 'none'}}>{item.rocket_name}</p>
                }
            }))}
        </div> 
        </div>
        </div>
    )
}