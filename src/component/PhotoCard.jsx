import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaDownload, FaHeart } from "react-icons/fa";
const PhotoCard = ({photo}) => {
    return (
        <div className='rounded-2xl'>
            <Card>
                <div className='relative w-full aspect-square '>

                <Image src={photo.imageUrl}  alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover rounded-xl'
                />
                <Chip className='absolute right-2 top-2'>{photo.category}</Chip>
                </div>
                <p>{photo.title}</p>
               
                <div className='flex gap-5 items-center'>
                 <div className='flex gap-2 items-center'>

                <FaHeart className='text-red-600' />
                <p>{photo.likes}</p>
                </div>
                <div className='flex gap-2 items-center'>

                <FaDownload></FaDownload>
                <p>{photo.downloads}</p>
                </div>
                </div>

       
        <Link href={`/all-photos/${photo.id}`} > <Button className='w-full' variant='outline'>View</Button></Link>
            </Card>
        </div>
    );
};

export default PhotoCard;