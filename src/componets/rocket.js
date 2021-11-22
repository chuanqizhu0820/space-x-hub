import { useEffect, useState } from "react";

function Rocket({idx}){

    const [img_url, setImgUrl] = useState('');
    const [name, setName] = useState('');
    const [description, setDes] = useState('');
    let [reserved, setReserved] = useState(false);

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/rockets')
          .then(response => response.json())
          .then(data => {
              console.log(data);
              setImgUrl(data[idx].flickr_images[0])
              setName(data[idx].rocket_name)
              setDes(data[idx].description);
            })
    })
  return (
      <div>
          <div>
              <img src={img_url} alt="rocket_image" />
          </div>
      <div>
          {name}
      </div>
      <div>
          <span>{!reserved ? <p></p> : <p>Reserved</p>}</span>
          {description}
      </div>
      <div>
          {!reserved ? 
           <button type="button" onClick={()=>setReserved(true)}>Reserve Rocket</button> : 
           <button type="button" onClick={()=>setReserved(false)}>Cancel Reservation</button>}
          </div>
      </div>
  )  
}

export default Rocket