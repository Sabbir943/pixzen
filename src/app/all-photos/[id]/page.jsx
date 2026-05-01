import { getPhotos } from '@/lib/data';
import { Button, Card, Chip, CloseButton } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const PhotoDerails =async ({params}) => {
    const{id}=await params;
    const photos=await getPhotos();
    const expectedPhoto=photos.find(p=>p.id==id);
    
    return (
        <Card className="w-full items-stretch md:flex-row">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
        <div className='relative w-full aspect-square '>
        
                        <Image src={expectedPhoto.imageUrl}  alt={expectedPhoto.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className='object-cover rounded-xl'
                        />
                        <Chip className='absolute right-2 top-2'>{expectedPhoto.category}</Chip>
                        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8">{expectedPhoto.title}</Card.Title>
          <Card.Description>
           {expectedPhoto.prompt}
          </Card.Description>
          <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">{expectedPhoto.model}</span>
            <span className="text-xs text-muted">{expectedPhoto.resolution}</span>
          </div>
          <Button className="w-full sm:w-auto">Apply Now</Button>
        </Card.Footer>
      </div>
    </Card>
    );
};

export default PhotoDerails;