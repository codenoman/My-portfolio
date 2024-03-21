import * as React from 'react';

import "./main.css"
import  File from "./compnent/women"
import Self from "./compnent/dom"
import Rate from "./compnent/rate"
import {BrowserRouter, Route, Routes } from 'react-router-dom';
// import Contact from "./compnent/contact"
export default function BasicButtons() {
  return (
<>



{/* <Routes>
  <Route path='/' element= {<women />}/>
  {/* <Route path='/' element={<dom />}></Route> 
</Routes> */}




<BrowserRouter>
<Routes>
  <Route path='/' element= {<Self />}/>
  <Route path='/product' element={<File />}></Route>
  <Route path='/product/login' element={<Rate />}></Route>

</Routes>
</BrowserRouter>

    {/* <div className='button'>

    <Stack spacing={2} direction="row">
      <Button variant="contained" href='/'>Add to Card</Button>
      <Button variant="contained" href='/main' >Back</Button>
     
    </Stack>
    </div>  */}
    </>
  );
}