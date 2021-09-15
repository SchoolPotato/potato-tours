import Tour from "./Components/Tour";
import { useState, useEffect } from 'react'
const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [person, setPerson] = useState({});

  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((user)=>{
      const {login, avatar_url} = user 
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