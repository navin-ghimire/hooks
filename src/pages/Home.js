import { Button, Input } from '@material-tailwind/react'
import { useFormik } from 'formik'
import { faker } from '@faker-js/faker'
import React, { useState } from 'react'
import CustomDialog from '../components/CustomDialog'

const Home = () => {

  const [mails, setMails] = useState([]);
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);




   const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: (val) => {
     setMails((prev) => [...prev, faker.internet.email()]);
    }
   });


   const toggle = () => {
    setShow((prev) => !prev);
   }


  //  const ns = [11, 22, 44, 55];
  //  ns.splice(2, 1);
  //  console.log(ns);

   const removeMail = () => {
    mails.splice(index, 1);
    setMails((prev) => [...prev]);
   }

  return (
    <div className='p-4 max-w-[400px] space-y-5'>


      <form onSubmit={formik.handleSubmit} className='space-y-4'>
        <Input
          name='email'
          onChange= {formik.handleChange}
          size="lg"
          value={formik.values.email}
          label='Email' placeholder="name@mail.com"
        />
         
         <Button type='submit' size='sm'>Submit</Button>

      </form>

      {mails.map((mail, i) => {
          return <div key={i} className='flex gap-3 mb-3'>
          <h1>{mail}</h1>
          <Button onClick={() => {
            setIndex(() => i);
            toggle();
          }} size='sm' color='pink'>Delete</Button>
          </div>
          })}
          <CustomDialog show={show} setShow={toggle} removeMail={removeMail} />

    </div>
  )
}

export default Home