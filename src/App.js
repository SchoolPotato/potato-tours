import Tour from "./Components/Tour";
import { useState, useEffect } from 'react'
const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState({});

  const removeTour = (id) => {
        setTours(tours.filter((tour) => tour.id !== id));
  }

  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((tours)=>{
      setTours(tours);
      setIsLoading(false);
    })
    .catch((error)=>{
      console.log(error)
      (error) ? setIsError(true) : setIsError(false);
    });
  }, []);
  //console.log(typeof tours);

  if(!isError && !isLoading){return (
    <div className="App">
      <h1 id="centered">Our Tours</h1>
      <hr id="centered"></hr>
      {(isLoading === false) ? tours.map((tour) => {
        //console.log(tour);
        return <Tour key={tour.id} id={tour.id} name={tour.name} info={tour.info} image={tour.image} price={tour.price} removeTour={removeTour} />
      }): console.log("loading...")}
    </div>
  )}

  else{
    return (
      <h1>Whoops</h1>
    )
  }
}

export default App;