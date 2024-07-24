import { avatar, Button, Input } from '@material-tailwind/react';
import axios from 'axios';
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [search, setSearch] = useState('spider');
  const [data, setData] = useState();

  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (val) => {

      setSearch(val.search);

    }
  });

  const getData = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com?apikey=aed6909c&s=${search}`);
      setData(response.data.Search);
    } catch (err) {
      
    }
  }

  useEffect(() => {
    getData();
  }, [search])

  console.log(data);

  return (
    <div className='p-5'>
      <div className="search-info max-w-[200px]">
        <form onSubmit={formik.handleSubmit} className='flex gap-3'>
          <div>
          <Input name='search'
          value={formik.values.search}
          onChange={formik.handleChange} label='search movie' />
          </div>

          <Button type='submit' size='sm'>Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default App