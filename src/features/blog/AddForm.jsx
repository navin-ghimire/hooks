import React, { useState } from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
  Radio,
  Select,
  Option,
  Rating,
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addToBlog } from './blogSlice';
import { useNavigate } from 'react-router';

const radioData = [
  {value: 'news', color: 'red', label: 'News'},
  {value: 'travel', color: 'green', label: 'Travel'}
];
const CheckBoxData = [
  {color: 'red', value: 'red', label: 'Red'},
  {color: 'blue', value: 'blue', label: 'Blue'},
  {color: 'green', value: 'green', label: 'Green'}
];



  

const AddForm = () => {

  const dispatch = useDispatch();

  const nav = useNavigate();

  const blogSchema = Yup.object({
    // title: Yup.string().min(5).max(100).required(),
    // author: Yup.string().required(),
    // blogType: Yup.string().required(),
    // someEx: Yup.array().min(1).required(),
    // country: Yup.string().required(),
    // rating: Yup.number().required(),
    // description: Yup.string().min(10).max(200).required(),
    image: Yup.mixed().test('fileType', 'invalid image', (e) => {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        return e && validTypes.includes(e.type);
    })
  });


  const { handleChange, handleSubmit, setFieldValue, values, errors, touched } = useFormik({
    initialValues:{
        title: '',
        author: '',
        blogType: '',
        someEx: [],
        country: '',
        rating: null,
        description: '',
        image: null,
        baseImage: null
    },
    onSubmit: (val, {resetForm}) => {
      delete val.image;
      dispatch(addToBlog({ ...val, id: nanoid() }));
      nav(-1);
    },
    validationSchema: blogSchema
  });

  return ( 
    <div className='px-7 pt-3 max-w-lg'>
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Add Blog
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter Your Blogs Details.
      </Typography>
      <form onSubmit={handleSubmit} className="mt-4 mb-2">
        <div className="mb-1 flex flex-col gap-6">
            
            <div>
          <Input
            name='title'
            onChange={handleChange}
            value={values.title}
            size="lg"
            label='Blog Title'
          />

          {errors.title && touched.title && <h1 className='text-red-600'>{errors.title}</h1>}
          </div>

         <div>
          <Input
            size="lg"
            name='author'
            onChange={handleChange}
            value={values.author}
            label='Author'
          />
          {errors.author && touched.author && <h1 className='text-red-600'>{errors.author}</h1>}
          </div>


          <div className='type'>
          <Typography>Blog Type</Typography>

         <div className='flex gap-10'>
         
           {radioData.map((rad, i) => {
            return <Radio
            key={i}
            color={rad.color}
            name='blogType'
            onChange={handleChange}
            value={rad.value}
            label={rad.label} />;

           })}
          
          

         </div>

         {errors.blogType && touched.blogType && <h1 className='text-red-600'>{errors.blogType}</h1>}
         </div>

         <div className=''>
          <Typography>Some Example</Typography>
          <div className="flex w-max gap-4">
                 {CheckBoxData.map((check, i) => {
                    return <Checkbox
                    key={i}
                    name='someEx'
                    onChange={handleChange}
                    color={check.color}
                    value={check.value}
                    label={check.label} />
                 })} 
         </div>

         {errors.someEx && touched.someEx && <h1 className='text-red-600'>{errors.someEx}</h1>}
         </div>

          <div>
         <div className="w-72">
      <Select onChange={(e) => setFieldValue('country', e)} 
         label="Select Country">
        <Option value='Nepal'>Nepal</Option>
        <Option value='USA'>USA</Option>
        <Option value='UK'>UK</Option>
        <Option value='Ireland'>Ireland</Option>
        <Option value='Denmark'>Denmark</Option>
      </Select>
       </div>
       {errors.country && touched.country && <h1 className='text-red-600'>{errors.country}</h1>}
       </div>
          
         
        
           <div>
            <Typography>Rating</Typography>
            <Rating onChange={(e) => setFieldValue('rating', e)} />
            {errors.rating && touched.rating && <h1 className='text-red-600'>{errors.rating}</h1>}
           </div>
           




           <div>
             <Input onChange={(e) => {
              const file = e.target.files[0];
              // const url = URL.createObjectURL(file);
              setFieldValue('image', file);
               const reader = new FileReader();
              reader.readAsDataURL(file);
              
              reader.addEventListener('load', (e) => {
                setFieldValue('baseImage', e.target.result);
               });
             }} type='file' 
             name='image'
             label='select image' />

             {values.baseImage && !errors.image &&  <img src={values.baseImage} alt='' className='h-[220px] w-full mt-5 object-cover' />}
             {errors.image && touched.image && <h1 className='text-red-600'>{errors.image}</h1>}
           </div>

          <div>
            <Textarea 
            name='description' 
            value={values.description}
            onChange={handleChange}
            label='Description' />
          </div>
          {errors.description && touched.description && <h1 className='text-red-600'>{errors.description}</h1>}
          </div>
          <div>
         
        </div>

        <Button type='submit' className="mt-6" fullWidth>
          Submit
        </Button>
        
      </form>
    </Card>
    </div>
  )
}

export default AddForm