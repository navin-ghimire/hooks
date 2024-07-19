import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [ page, setPage ] = useState(1);
  const [ data, setData ] = useState();

   
    
    const getData = async () => {
      
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: '50b29a9dc6fab3e783ec4a8f2565124e',
          page: page
        }
        });
        setData(response.data);
      } catch (err) {
        
      }
      
    }


   useEffect(() => {
   getData();
   console.log('hello see');
   }, [page]);
      console.log(data);
      console.log('render');
  return (
    <div>
   
   <button onClick={() => setPage((prev) => prev + 1)} className='bg-black text-white'>{page} Change Page</button>


    </div>
  )
}

export default Home