import {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';

const App = () => {

  const [data,setData] = useState([]);

/* Get data from API */
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        'https://www.anapioficeandfire.com/api/books'
      );
    setData(response.data);
    console.log(data);
    }
    fetchData();
  },[])

  return (
    <div id="header" className="App container">
      <div className="row">
        <h2>Game of Thrones, but not the show Header</h2>
      </div>
      <div  id="display-button" className="row">
        <h2>display button</h2>
      </div>
      <div id="search-bar" className="row">
        <h2>search bar</h2>
      </div>
      <div id="cards" className="row">
        <h2>cards</h2>
        {data.map((data,i)=>{
          return(
            <div key={i}>
              <p>book:{i+1}</p>
              <p>{data.name}</p>
              <p>book:{data.authors}</p>
              <p>{data.numberOfPages} pages</p>
              <p>from:{data.country}</p>
              <p>released:{data.released}</p><br/><br/>            
            </div>            
          )
        })}
      </div>
    </div>
  );
}

export default App;

