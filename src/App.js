import {useState, useEffect} from 'react'
import axios from 'axios';
import CardComponent from "./components/Card"
import './App.css';

const App = () => {

/* States */
  //API state
  const [data,setData] = useState([]);
  //Search state
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

/* Get data from API */
  const RevealBooks = () =>{
    axios('https://www.anapioficeandfire.com/api/books')
    .then(response => {
      console.log(response.data)
      setData(response.data);
      setFilteredData(response.data);
    })
    .catch(error => {
      console.log('Error getting fake data: ' + error);
    })    
  }

/* Filter useEffect */
  useEffect(() => {
    //pt.1
    const searchData = data.filter(data => {
      return (
        data.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    //pt.2
    searchTerm === ''
      ? setFilteredData(data)
      : setFilteredData(searchData);
  }, [searchTerm, data]);

 /* Handle Change */ 
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div id="header" className="App container">
      <div className="row">
        <h2>Game of Thrones (but not the show) Header</h2>
      </div>
{/* Button */}
      <div  id="display-button" className="row">
        <button className="btn col-6 offset-3 btn-warning text-white my-3" onClick={()=>RevealBooks()}>Click this button to reveal the series of books</button>
      </div>
{/* Searchbar */}
      <form id="search-bar" className="row">
        <div className="form-group col-md-8 offset-2">
          <input 
            type="text" 
            className="form-control" 
            placeholder="search the books"
            value={searchTerm}
            onChange={(event)=>handleChange(event)}
            />
        </div>
      </form>
{/* cards */}
      <div id="cards" className="row">
        {filteredData.map(d =>{
         return(
           <div className="col-3" key={d.name}>
             <CardComponent data={d}/>
           </div>
         )}
        )}
      </div>
    </div>
  );
}

export default App;

