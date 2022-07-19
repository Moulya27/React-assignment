import { Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

function EditProducts() {
   const {id} = useParams();
  const history = useHistory();
  const [edit,setEdit] = useState({
    title : "",
    price: "",
    description: "",
  });

  useEffect(()=>{
    const editproducts = async() => {
        const response = await axios.get(`http://localhost:1234/data/${id}`)
console.log(response.data);
setEdit(response.data)
    }
    editproducts();
  },[id])

  const onTextFieldChange = (e) =>{
    setEdit({
        ...edit,
        [e.target.name]:e.target.value
    })
  }

  const onFormSubmit = async(e) => {
    e.preventDefault();
    await axios.put(`http://localhost:1234/data/${id}`,edit)
    history.push('/products')
  }


  const backBtnHandler = () =>{
    history.push('/products')
  }
  return (
    <div>
            <Grid container direction='column' alignItems='center' justifyContent='center' sx={{minHeight:'100vh',marginRight:'250px'}}>
            <Typography variant='h5'>Add Products</Typography>
<TextField sx={{marginBottom:'20px'}} variant='outlined' label='Title' name='title' value={edit.title} onChange={e=>onTextFieldChange(e)} fullWidth />
<TextField sx={{marginBottom:'20px'}} variant='outlined' label='Price' name='price' value={edit.price} fullWidth onChange={e=>onTextFieldChange(e)} />
<TextField sx={{marginBottom:'20px'}} variant='outlined' label='Description' name='description' value = {edit.description}fullWidth onChange={e=>onTextFieldChange(e)} />
<Button size='large' variant='contained' onClick={e=>onFormSubmit(e)}>Update</Button>
          </Grid>
          <Button onClick={backBtnHandler}>Back</Button>
    </div>
  )
}

export default EditProducts