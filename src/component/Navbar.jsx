"use client";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/images/logo.png"

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";




const Navbar =() => {
  const userData=authClient.useSession();
  const users=userData.data?.user;
  console.log(users)
  const handleSignout=async()=>{
  await authClient.signOut();
  }
 
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={logoImg}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        { !users&&
          <div className="flex gap-4">
          <ul className="flex items-center gap-5 text-sm">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>
        </div>}

           { users&&
          <div className="flex gap-4 items-center">
            <h1>{users?.name}</h1>
            <Avatar>
        <Avatar.Image  alt="John Doe" src={users?.image} 
        referrerPolicy="no-referrer"
        />
        <Avatar.Fallback>{users.name.charAt(0)}</Avatar.Fallback>
      </Avatar>
       <Button onClick={handleSignout} variant="danger">SignOut</Button>
        </div>
        
        }
      </nav>
    </div>
  );
};

export default Navbar;