import React from 'react';
import './women.css';

import img1 from "./images/wfour.jpg"
import img2 from "./images/four.jpg"
import img3 from "./images/two.jpg"
import img4 from "./images/wtwo.jpg"
import img5 from "./images/glass1.jpg"
import img6 from "./images/glass2.jpg"
import img7 from "./images/glass3.jpg"
import img8 from "./images/glass4.jpg"
import img9 from "./images/shoe1.jpg"
import img10 from "./images/shoe2.jpg"
import img11 from "./images/shoe3.jpg"

import img12 from "./images/shoes.jpg"

// import img13 from "./images/shirt 4.jpg"
// import img14 from "./images/shirt1.jpg"
// import img15 from "./images/shirt2.jpg"
// import img16 from "./images/shirt5.jpg"
// import img17 from "./images/shirt5.jpg"







import Button from '@mui/material/Button';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import {Link} from "react-router-dom"

function App() {
  return (
    <>
    <div className="container">
      <div className="flex-item1">
        <img src={img1} alt="" className='imgone' />
      <p>Cropped Stay Groovy off<br/> white</p>
      <h5 className='rate'>$10.90</h5>
      <Link to="/product/login"><ShoppingBasketIcon fontSize='large'></ShoppingBasketIcon>
      <Button variant="contained" disableElevation className='shop'>
     Add to Cart
    </Button></Link>
      </div>
      <div className="flex-item2"><img src={img2} alt="" className='imgone' />
      <p>Cropped Stay Groovy off<br/> black</p>
      <h5 className='rate'>$10.90</h5>
      <Link to="/login"><ShoppingBasketIcon fontSize='large'></ShoppingBasketIcon>
      <Button variant="contained" disableElevation className='shop'>
     Add to Cart
    </Button></Link>


      </div>
      <div className="flex-item3"><img src={img3} alt="" className='imgone' />
      <p>Cropped Stay Groovy off<br/> brown</p>
      <h5 className='rate'>$10.90</h5>
      <Link to="/login"><ShoppingBasketIcon fontSize='large'></ShoppingBasketIcon>
      <Button variant="contained" disableElevation className='shop'>
     Add to Cart
    </Button></Link>
      </div>
      <div className="flex-item4"><img src={img4} alt="" className='imgone' />
      <p>Cropped Stay Groovy off<br/> white</p>
      <h5 className='rate'>$10.90</h5>
      <Link to="login"><ShoppingBasketIcon fontSize='large'></ShoppingBasketIcon>
      <Button variant="contained" disableElevation className='shop'>
     Add to Cart
    </Button></Link>
      </div>
    </div>
    
    <div className="container">
      <div className="flex-item1">
        <img src={img5} alt="" className='imgone' />
      <p>Cropped Stay Groovy off<br/> white</p>
      <h5 className='rate'>$10.90</h5>
      <Link to="/login"><ShoppingBasketIcon fontSize='large'></ShoppingBasketIcon>
      <Button variant="contained" disableElevation className='shop'>
     Add to Cart
    </Button></Link>
      </div>
      <div className="flex-item2"><img src={img6} alt="" className='imgone' />
      <p>Cropped Stay Groovy off<br/> white</p>
      <h5 className='rate'>$10.90</h5>
      <Link to="/login"><ShoppingBasketIcon fontSize='large'></ShoppingBasketIcon>
      <Button variant="contained" disableElevation className='shop'>
     Add to Cart
    </Button></Link>


      </div>
      <div className="flex-item3"><img src={img7} alt="" className='imgone' />
      <p>Cropped Stay Groovy off<br/> white</p>
      <h5 className='rate'>$10.90</h5>
      <Link to="/login"><ShoppingBasketIcon fontSize='large'></ShoppingBasketIcon>
      <Button variant="contained" disableElevation className='shop'>
     Add to Cart
    </Button></Link>
      </div>
      <div className="flex-item4"><img src={img8} alt="" className='imgone' />
      <p>Cropped Stay Groovy off<br/> white</p>
      <h5 className='rate'>$10.90</h5>
      <Link to="/login"><ShoppingBasketIcon fontSize='large'></ShoppingBasketIcon>
      <Button variant="contained" disableElevation className='shop'>
     Add to Cart
    </Button></Link>
      </div>
    </div>


    <div className="container">
      <div className="flex-item1">
        <img src={img9} alt="" className='imgone' />
      <p>Cropped Stay Groovy off<br/> white</p>
      <h5 className='rate'>$10.90</h5>
      <Link to="/login"><ShoppingBasketIcon fontSize='large'></ShoppingBasketIcon>
      <Button variant="contained" disableElevation className='shop'>
     Add to Cart
    </Button></Link>
      </div>
      <div className="flex-item2"><img src={img10} alt="" className='imgone' />
      <p>Cropped Stay Groovy off<br/> white</p>
      <h5 className='rate'>$10.90</h5>
      <Link to="/login"><ShoppingBasketIcon fontSize='large'></ShoppingBasketIcon>
      <Button variant="contained" disableElevation className='shop'>
     Add to Cart
    </Button></Link>


      </div>
      <div className="flex-item3"><img src={img11} alt="" className='imgone' />
      <p>Cropped Stay Groovy off<br/> white</p>
      <h5 className='rate'>$10.90</h5>
      <Link to="/login"><ShoppingBasketIcon fontSize='large'></ShoppingBasketIcon>
      <Button variant="contained" disableElevation className='shop'>
     Add to Cart
    </Button></Link>
      </div>
      <div className="flex-item4"><img src={img12} alt="" className='imgone' />
      <p>Cropped Stay Groovy off<br/> white</p>
      <h5 className='rate'>$10.90</h5>
      <Link to="/login"><ShoppingBasketIcon fontSize='large'></ShoppingBasketIcon>
      <Button variant="contained" disableElevation className='shop'>
     Add to Cart
    </Button></Link>
      </div>
    </div>
    </>
  );
}

export default App;
