"use client"
import UpdateUser from '@/component/UpdateUser';
import { authClient } from '@/lib/auth-client';
import { Avatar, AvatarImage, Card } from '@heroui/react';
import React from 'react';

const profilePage = () => {
    const userData=authClient.useSession();
      const user=userData.data?.user;
   
    return (
   <Card className='text-center flex items-center border w-8/12 mx-auto my-10'>
     <Avatar className='w-30 h-30'>
        <Avatar.Image  alt="John Doe" src={user?.image} 
        referrerPolicy="no-referrer"
        />
       
      </Avatar>
      <h1 className='text-2xl font-bold'>{user?.name}</h1>
      <h1 className='text-muted'>{user?.email}</h1>
      <UpdateUser/>
   </Card>
    );
};

export default profilePage;