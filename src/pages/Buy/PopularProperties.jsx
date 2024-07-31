import React from 'react';
import Container from '../../component/Container';
import { cardImage1 } from '../../assets/images';
import { TfiGallery } from 'react-icons/tfi';
import { CiLocationOn } from 'react-icons/ci';
import SlideCards from './SlideCards';

const PopularProperties = () => {
    return (
        <Container>
           <div className='my-10'>
            <div className='flex space-x-80'>
                <h1 className='text-3xl text-darkText font-bodyFont font-semibold'>Popular Properties</h1>
                <p className='text-primaryColor btn-link font-bodyFont'>See all propeety</p>
            </div>

            {/* card section  */}
            <div className='flex flex-row gap-10'>
            
<SlideCards/>
            
            
            </div>

           </div>
        </Container>
    );
};

export default PopularProperties;