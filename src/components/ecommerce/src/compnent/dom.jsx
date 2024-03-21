import React from 'react';
import "./App.css"

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';


import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


import {Link} from "react-router-dom"


function Navbar() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      // top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      // padding: '0 4px',
    },
  }));


  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];




  return (
    <>
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
      <span>C</span>
  <span>A</span>
  <span>P</span>
  <span>i</span>
  <span>T</span>
  <span>A</span>  
  <span>L</span>  
  <span>E</span>  

   

      </div>

      {/* Menu */}
      <ul className="menu">
        <li><Link to= "/" >Home</Link></li>

       
        
      
        
        <li><a href="#">Page</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      {/* Icons */}
      <div className="icons">
      <Link to= "/product" ><Button variant="contained">Shop Now<ShoppingCartIcon></ShoppingCartIcon> </Button></Link>
      <Link to= "/product/login" ><Button href="#text-buttons">Login/signup <LoginIcon></LoginIcon></Button></Link>
      </div>
    </nav>

{/* //part two// */}
<div className="animate">
  <div className="foranimate">
<div className='main'>
 <div className="textone">
  <h2>fashion style</h2><h1>Minimal Menz Style </h1><p className='panimate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab nemo ipsum odit doloribus atque beatae deserunt recusandae eaque facilis libero</p>
  <Button variant="contained" href='/01'>Shop NOw --</Button>
  </div>
  </div>

  <div className='textflow'>
 <div className="textone">
  <h2>fashion style</h2><h1>Minimal Menz Style </h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab nemo ipsum odit doloribus atque beatae deserunt recusandae eaque facilis libero</p>
  <Button variant="contained" href='/01'>Shop NOw --</Button>
  </div>

</div>
</div>
</div>

<div className="maintwo">
<div className="fashion1">
<div className="men"><Button variant="contained" >Sale</Button><h3>Men's Fashion <br/>Shop Now</h3>

<p className='pone'>Basic Lather coat<br/>
<i><Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="small" /></Stack></i>
      <span>$31.37</span></p><Button variant="contained" color="success" >
  Shop Now<IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton>
</Button>
</div>
</div>
<div className="fashion2">
<div className="men"><Button variant="contained" >Sale</Button><h3>Men's Fashion <br/>Shop Now</h3>

<p className='pone'>Basic T-Shirt Pent<br/>
<i><Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="small" /></Stack></i>
      <span>$21.37</span></p><Button variant="contained" color="success" >
  Shop Now<IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton>
</Button>
</div>
</div>

<div className="fashion3">
<div className="men"><Button variant="contained"  >Sale</Button><h3>Men's Fashion <br/>Shop Now</h3>

<p className='pone'>Basic Coat Pent<br/>
<i><Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="small" /></Stack></i>
      <span>$44.37</span></p><Button variant="contained" color="success" >
  Shop Now<IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton>
</Button>
</div>
</div>
  
</div>






{/* part3 */}
<div className="maintwo">
  <div className="textthree">
    <h5>YOU MAY ALSO LIKE</h5>
    <p className='pthree'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi nemo voluptate accusantium? Nobis perspiciatis excepturi rerum ex accusantium, aperiam ipsam explicabo earum natus odio doloribus dolor deserunt! Deleniti, obcaecati.</p>
  </div>
<ImageList sx={{ width: 500, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
</div>
<div className="mainthree">
  <div className="mainthreetext">
  <h4>Customer Testimonial</h4>
  <p className='ptwo'>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
  </div>
  <div className="profile">
    <div className="pimage"></div>
    <div className="ptext"><h6>Noman Alam </h6>
    <p className='pp'>Designer at Ayen Tech</p></div>
  </div>

  {/* <BrowserRouter>
      <Routes>
        <Route path='/01' element={<women />}>Women </Route>
      </Routes>
      </BrowserRouter> */}
</div>



</>
  );
}

export default Navbar;

