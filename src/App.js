import Tour from "./Components/Tour";
import { useState, useEffect } from 'react'
const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState({});

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
  console.log(typeof tours);

  return (
    <div className="App">
      <h1 id="centered">Our Tours</h1>
      <hr id="centered"></hr>
      {(isLoading == false) ? tours.map((tour) => {
        //console.log(tour);
        return <Tour key={tour.id} name={tour.name} info={tour.info} image={tour.image} />
      }): console.log("whoops")}
    </div>
  );
}

export default App;