import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket, loadRockets} from '../Redux/rockets/Rockets';

export default function Rockets(){
    const dispatch = useDispatch();
    useEffect( ()=> {
        fetch("https://api.spacexdata.com/v3/rockets")
        .then(response => response.json())
        .then(data => {
            for (const item of data){
                item.reserved = false;
            };
            dispatch(loadRockets({info: data}))
        }, 
        error => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const rockInfo = useSelector(state => state.rockets);
    return (
        rockInfo.map(((item,idx, arr)=>(
            <div style={{marginBottom:'20px'}}>
                <div className="rocket-container row align-items-center">

                <div className="col-2 offset-1">
                    <img src={item.flickr_images[0]} style={{width:'100%', height:'auto'}} alt="rocket" />
                </div>

                <div className="col-8 d-flex flex-column">
                <div>
                    <h3>{item.rocket_name}</h3>
                </div>

                <div>
                    <p style={{fontSize: '18px'}}>{item.description}</p>
                </div>

                <div>
                    {item.reserved ? <button type="button" className="btn btn-secondary" id={item.id} onClick={()=>dispatch(cancelRocket({id:item.id}))}>Cancel Reservation</button>
                               : <button type="button" className="btn btn-primary" id={item.id} onClick={()=>dispatch(reserveRocket({id:item.id}))}>Reserve Rocket</button>}
                </div>  
                </div>


                </div>
            </div>
        )))
    )
}