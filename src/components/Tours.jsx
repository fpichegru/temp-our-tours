import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tour from "./Tour";

const url = "https://course-api.com/react-tours-project";
// const url = "/data/data.json";

export default function Tours({tours, removeTour}) {



  console.log(tours)

  return (
    <>

      <ul className="tours">
        {tours && tours.map((tour) => (
            <Tour
              key={tour.id}
              id={tour.id}
              name={tour.name}
              info={tour.info}
              price={tour.price}
              image={tour.image}
              removeTour={removeTour}
              
            />
          ))}
      </ul>
    
    </>
  );
}
