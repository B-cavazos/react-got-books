import {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';

const App = () => {

/* States */
  //API state
  const [data,setData] = useState([]);
  //Search state
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

/* Get data from API */
  useEffect(() => {
    axios('https://www.anapioficeandfire.com/api/books')
    .then(response => {
      console.log(response.data)
      setData(response.data);
      setFilteredData(response.data);
    })
    .catch(error => {
      console.log('Error getting fake data: ' + error);
    })
  }, []);


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
        <h2>Game of Thrones, but not the show Header</h2>
      </div>
      <div  id="display-button" className="row">
        <h2>display button</h2>
      </div>
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
      <div id="cards" className="row">
        <h2>cards</h2>
        {filteredData.map((data,i)=>{
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

