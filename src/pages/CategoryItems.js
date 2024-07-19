import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import EcommerceCard from '../components/EcommerceCard';

const CategoryItems = () => {
  const { cata } = useParams();
    

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

   
    
    const getData = async () => {
      setLoad(true);
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
          params: {
            c: cata
          }
        });
        setLoad(false);
        setData(response.data);

      } catch (err) {
        setLoad(false);
        setErr(err?.message);
        
        
      }
      
    }


    useEffect(() => {
      getData();
    }, []);

    if(load){
      return <h1>Loading..........</h1>
    }

    if(err){
      return <h1>{err}</h1>
    }

  return (
    <div className='p-3 grid grid-cols-3 gap-4'>

     {data?.meals.map((meal, i) => {
       return <EcommerceCard meal={meal} key={i} />
     })}
     </div>
  )
}

export default CategoryItems