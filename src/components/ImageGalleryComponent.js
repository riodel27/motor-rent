import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import imgOne  from '../images/img1.jpg'
import imgTwo  from '../images/img2.jpg'
import imgThree  from '../images/img3.jpg'


class ImageGalleryComponent extends Component {
    render() {
      const images = [
        {
          original: 'imgOne',
          thumbnail: 'imgOne',
        },
        {
          original: 'imgTwo',
          thumbnail: 'imgTwo'
        },
        {
          original: 'imgThree',
          thumbnail: 'imgThree.'
        },
        // {
        //     original: 'http://lorempixel.com/1000/600/nature/3/',
        //     thumbnail: 'http://lorempixel.com/250/150/nature/3/'
        //   }
      ]
      return (
        <div>
            <ImageGallery items={images} />
            {/* <p>Image gallery</p> */}
            {/* <img src={imgTest} alt="Canvas Logo" /> */}
        </div>
      );
    }
  
  }

  export default ImageGalleryComponent