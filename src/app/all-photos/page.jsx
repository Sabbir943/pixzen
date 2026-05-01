import PhotoCard from '@/component/PhotoCard';
import { getPhotos } from '@/lib/data';
import React from 'react';

const AllPhotoPage =async () => {
    const allPhotos=await getPhotos();
    return (
        <div className='grid grid-cols-4 gap-5'>
            {
                allPhotos.map((photo,index)=><PhotoCard photo={photo} key={index}/>)
            }
        </div>
    );
};

export default AllPhotoPage;