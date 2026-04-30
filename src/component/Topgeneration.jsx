import { getPhotos } from '@/lib/data';
import React from 'react';
import PhotoCard from './PhotoCard';

const Topgeneration =async() => {
    const photos=await getPhotos();
    const topPhotos=photos.slice(0,8);
    
    
    return (
        <>
        <h1 className='text-2xl font-bold my-6'>Top Generated photo</h1>
        <div className='grid grid-cols-4 gap-4 mx-10/12 mx-auto'>
            
            {
                topPhotos.map((photo,index)=><PhotoCard photo={photo} key={index}/>)
            }
        </div>
        </>
    );
};

export default Topgeneration;