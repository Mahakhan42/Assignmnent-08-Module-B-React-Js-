import React from 'react';
import './App.css';
import {Navbar}  from './Components/Navbar';
import { Second_Nav } from './Components/Second_Nav';
// import { SwipeableTextMobileStepperr } from './Components/BottomSilder';
import { CardRender } from "./Components/CardRender";
import { CardsProducts} from './Components/CardsProducts';
import { Cards_Data } from './Components/Cards_Data';
import { BottomSilder } from './Components/BottomSilder';
import { ImagesCard } from './Components/imagesCard';
import {Footer_Components } from './Components/Footer';
// import { Products } from "./Components/CardRender";


const App = () => {
  return (
    <div>
   <Navbar/>
   <Second_Nav/>
   <CardRender/>
   <CardsProducts/>
   <Cards_Data/>
   <BottomSilder/>
   <ImagesCard/>
   <Footer_Components/>
   {/* <Products /> */}
   {/* <SwipeableTextMobileStepper/> */}
    </div>
  )
}

export default App
