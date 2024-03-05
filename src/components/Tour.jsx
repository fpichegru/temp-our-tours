import { useState } from "react";

export default function Tour({id, name, info, price, image, tours, removeTour}) {

  const[toggleInfo, setToggleInfo] = useState(false)  


  return (
    <li>
      <div className="single-tour">
        <div>
          <img className="img" src={image} alt="" />
          <span className="tour-price">{price}$</span>
        </div>
        <div className="tour-info">
          <h5>{name}</h5>
          <p>
            {toggleInfo ? info : `${info.slice(0, 200)}... `}
            <button 
            className="info-btn"
            onClick={ () => setToggleInfo(!toggleInfo)}>{toggleInfo? " Show less" : "Read more"}</button>
          </p>  
          <button 
          onClick={ () => removeTour(id)}
          type="btn" className="btn delete-btn btn-block ">
            Not Interested
          </button>
        </div>
      </div>
    </li>
  );
}