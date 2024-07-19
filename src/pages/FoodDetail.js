import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


const FoodDetail = () => {
  const { id } = useParams();
    

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

   
    
    const getData = async () => {
      setLoad(true);
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
          params: {
            i: id
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
   
   const meal = data?.meals[0];
    const url = meal?.strYoutube?.split('=');
  
  return (
    <div className='p-3 space-y-4'>

       {url && <iframe className="w-[50%] h-[40%] aspect-video" src={`https://www.youtube.com/embed/${url[1]}`}></iframe>}

      <div className="meal-info grid grid-cols-2 gap-5">
        <div className="meal-img">
           <img className='h-[400px]' src={meal?.strMealThumb} alt="" />
        </div>
        <div className="meal-instruction">
          <p>{meal?.strInstructions}</p>
        </div>
      </div>
      

      </div>

  )
}

export default FoodDetail