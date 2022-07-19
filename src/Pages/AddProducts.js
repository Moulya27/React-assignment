import { Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';


import React, { useState } from 'react'

function AddProducts() {

  const [addProduct,setAddProduct] = useState({
    title: "",
    Image:{
      alt:"",
      path:"",
    },
    price:"",
    description:"",
    
  });

  const textFieldHandler = (e) => {
    setAddProduct({
      ...addProduct,
      [e.target.name]:e.target.value
    })
    //console.log(addProduct);
  }

  const onFormSubmit = async(e) => {
    e.preventDefault()
   await axios.post("http://localhost:1234/data",addProduct);
      console.log(addProduct);
      //setAddProduct(addProduct.data)
  }

  return ( 
    
          <Grid container direction='column' alignItems='center' justifyContent='center' sx={{minHeight:'100vh',marginRight:'250px'}}>
            <Typography variant='h5'>Add Products</Typography>
<TextField sx={{marginBottom:'20px'}} variant='outlined' label='Title' name='title' fullWidth onChange={e=>textFieldHandler(e)}/>
<TextField sx={{marginBottom:'20px'}} variant='outlined' label='alt' name= 'alt' fullWidth onChange={e=>textFieldHandler(e)}/>
<TextField sx={{marginBottom:'20px'}} variant='outlined' label='path' name='path'fullWidth onChange={e=>textFieldHandler(e)}/>
<TextField sx={{marginBottom:'20px'}} variant='outlined' label='Price' name='price' fullWidth onChange={e=>textFieldHandler(e)}/>
<TextField sx={{marginBottom:'20px'}} variant='outlined' label='Description' name='description' fullWidth onChange={e=>textFieldHandler(e)}/>
<Button onClick={e =>onFormSubmit(e)} size='large' variant='contained'>Add</Button>
          </Grid>
       
  )
}

export default AddProducts