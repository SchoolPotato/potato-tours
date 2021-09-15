import Tour from "./Components/Tour";
import { useState, useEffect } from 'react'

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tour, setTour] = useState({});
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
  return (
    <div className="App">
      <h1 id="centered">Our Tours</h1>
      <hr id="centered"></hr>
      <Tour />
    </div>
  );
}

export default App;