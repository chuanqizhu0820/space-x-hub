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
            <div>
                <h1>{item.rocket_name}</h1>
                <img src={item.flickr_images[0]} alt="rocket" />
                <p>{item.description}</p>
                {item.reserved ? <button type="button" id={item.id} onClick={()=>dispatch(cancelRocket({id:item.id}))}>Cancel</button>
                               : <button type="button" id={item.id} onClick={()=>dispatch(reserveRocket({id:item.id}))}>Reserve</button>}
            </div>
        )))
    )
}