import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./Products.css";
import ConfirmDialog from "../Layout/ConfirmDialog/ConfirmDialog";
function Products() {
  const history = useHistory();

  const [data, setData] = useState([]);

  const [confirmDialog,setConfirmDialog] = useState({isOpen:false,title:'',subTitle:''})
  //Fetch products
  const getProducts = async () => {
    const result = await axios.get("http://localhost:1234/data");
    //console.log(result.data);
    setData(result.data);
  };

  useEffect(() => {
   getProducts();
  }, []);

  const productDetail = (item, i) => {
    history.push({
      pathname: `product-detail/${i}`,
      state: item,
    });
  };

  //Delete products

  const deleteHandler = async(id) => {
await axios.delete(`http://localhost:1234/data/${id}`)
let newProducts = data.filter((item)=>{
  return item.id !== id;
})
setData(newProducts)
setConfirmDialog({...confirmDialog,isOpen:false})
 }

  return (
    <>
    <Button sx={{marginTop:'20px'}} variant="contained" onClick={() => history.push("/addproducts")}>Add Products</Button>
    <div className="product">
      {data?.map((item, i) => {
        return (
          <div key={item.id}>
            <Card sx={{ maxWidth: 300,height:'300',marginBottom:'20px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="194"
          image={item.Image.path}
          alt={item.Image.alt}
        sx={{objectFit:'contain'}}/>
        <CardContent>
          <Typography  variant="h6" component="div">
          {item.title}
          </Typography>
          <Typography mt={2}  variant="h7" component="div">
          {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
<div style={{display:'flex',alignItems:'center'}}>
      <Button
              sx={{ color: "black"}}
              variant="outlined"
              size="small"
              onClick={() => productDetail(item, i)}
            >
              View More
        </Button>
       <EditIcon sx={{marginLeft:'120px',cursor:'pointer'}} onClick={() => history.push(`/edit/${item.id}`)}/>
       <DeleteIcon sx={{marginLeft:'20px',cursor:'pointer'}} onClick = {()=>{
        setConfirmDialog({isOpen:true,title: 'Do you really want to delete this product?',subTitle:`You can't bring back the product once deleted!!`,onConfirm:()=>{deleteHandler(item.id)}})
//deleteHandler(item.id)
       }}/>
       <ConfirmDialog confirmDialog={confirmDialog}
       setConfirmDialog={setConfirmDialog}/>
       </div>
      </CardActions>
    </Card>
            {/*<img src={item.Image.path} alt={item.Image.alt} />
            <p>{item.title}</p>
            <Button
              sx={{ color: "black" }}
              variant="outlined"
              size="small"
              onClick={() => productDetail(item, i)}
            >
              View More
        </Button>*/}
          </div>
        );
      })}
    </div>
    </>
  );
}

export default Products;
