import React from 'react';
import Carousel from '../Carousel';
import { images } from '../../../image/Carousel-images';
import './CarouselView.css';


function CarouselView (){
    return (
         <div className="carousel-view">
               <Carousel data={images}  />
         </div>
    );
}




export default CarouselView;