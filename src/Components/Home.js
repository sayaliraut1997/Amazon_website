import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
    <div className='home_container'>
         
         <img className='home_image'
         src="https://m.media-amazon.com/images/S/sonata-images-prod/UK_Superhero_Acquisition_FT_April_2021_V2/ec12117a-ee48-453c-9a64-4453031d477a._UR3000,600_.jpeg"

         />
         
         <div className='home_row'>
            <Product 
               id= "12345"
               title='Echo Dot Smart speaker with Alexa (Blue)'
               price={3999.}
               image="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY327_FMwebp_QL65_.jpg"
               rating={5}
            />

            <Product 
               id= "12346"
               title='Smart Speaker Brand in India Alexa'
               price={3499}
               image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg"
               rating={4}
            />

         </div>
         <div className='home_row'>
         <Product 
               id= "12347"
               title='Noise ColorFit Pro 2 Full Touch Control Smart Watch '
               price={3015}
               image="https://m.media-amazon.com/images/I/61SHd-oen7L._SX679_.jpg"
               rating={4}
            />

              <Product 
              id= "12348"
               title='boAt Bassheads 900 Wired On Ear Headphones with Mic (Carbon Black)'
               price={999}
               image="https://m.media-amazon.com/images/I/61xeIT6UHrL._AC_UY327_FMwebp_QL65_.jpg"
               rating={4}
            />
              <Product 
              id= "12349"
               title='Natural Jute Plant Bag Pot'
               price={399}
               image="https://m.media-amazon.com/images/I/410GpU+Cc4L.jpg"
               rating={4}
            />
         
         </div>
         <div className='home_row'>
         <Product
               id= "12340"
               title='OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)'
               price={16999}
               image="https://m.media-amazon.com/images/I/71vZypjNkPS._AC_UY327_FMwebp_QL65_.jpg"
               rating={4}
            />
        </div>
    </div>
   </div>
  );
}
export default Home;
