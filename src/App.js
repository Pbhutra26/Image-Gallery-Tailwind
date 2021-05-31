import {useState,useEffect,useRef} from 'react';
import Card from './Components/Card.js';

function App() {
  const [searchText,setSearchText]=useState('');
  const [images, setImages] = useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [searchTerm,setSearchTerm]=useState('Dubai');
  const API_KEY = '21859717-21e3d9b5f65008858ce40e047';
  const URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(searchTerm);
  const searchBarStyle="shadow appearance-none border rounded w-1/2 m-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ";
useEffect(() => {
     fetch(URL)
    .then((res)=>res.json())
    .then((data)=>{
      setImages(()=>data);
      setIsLoading(false);
    })
    .catch((error)=>console.log(error))
  }, [searchTerm]);

  const handler=()=>{
    setSearchTerm(searchText);
    setImages([]);
    setIsLoading(true);
  }
  console.log(images.hits);
  return (
    <div>  
    <div className="transition duration-200 ease-in-out w-full bg-yellow-200 h-24 flex justify-between items-center shadow-lg">
      <h1 className='transition duration-200 ease-in-out font-bold m-6 text-5xl text-yellow-700'>Image Gallery</h1>
      <div className='m-2 p-5 w-2/5 flex justify-end'> <input onChange={(e)=>{setSearchText(e.target.value)}} type="text" placeholder="Enter query" className={searchBarStyle}></input>
      <button onClick={handler} className="transition duration-200 ease-in-out hover:text-white font-bold text-yellow-900 shadow-sm hover:bg-yellow-700 m-2 px-5 py-2 rounded border-2 border-yellow-700 ">Search</button></div>
     
    </div>
    
    <div className='bg-yellow-50 w-full p-5 h-full min-h-screen flex justify-center flex-wrap'>
    {isLoading?<h1 className="transition duration-200 ease-in-out text-6xl mt-11">Loading...</h1>:images.hits.length==0?<h1 className="transition duration-200 ease-in-out text-6xl mt-11">Nothing Found...</h1>:images.hits.map((image)=> <Card payload={image}/>)}
    </div></div>
  
  );
}

export default App;
