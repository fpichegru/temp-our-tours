import Tours from "./components/Tours";
import { useState,useEffect } from "react";
import Loading from "./components/Loading";
const url = "https://course-api.com/react-tours-project";

const App = () => {

  const [tours, setTours] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


       const fetchTours = async () => {
         setIsLoading(true);
         try {
           const resp = await fetch(url);
           console.log(resp);
           if (!resp.ok) {
             setIsError(true);
             setIsLoading(false);
             return;
           }

           const data = await resp.json();
           setTours(data);
         } catch (error) {
           setIsError(true);
           // console.log(error);
         }
         // hide loading
         setIsLoading(false);
       };

       useEffect(() => {
         fetchTours();
         console.log(tours);
       }, []);

       console.log(tours);


  function removeTour(id){

     setTours(tours.filter((tour) => tour.id != id));
  }

  if (isLoading && !isError){
   return <Loading />
  }


  if(isError){

    return <h2>Erreur!</h2>

  }

  if (tours.length === 0 && !isLoading && !isError){

     return <main>
        <h2 className="title"> No Tours Left</h2>
        <button onClick={() => fetchTours()} className="btn">
          Refresh
        </button>
      </main>;
  }
    return (
      <main>
        <h2 className="title">Our Tours</h2>
        <div className="title-underline"></div>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    );
};
export default App;
