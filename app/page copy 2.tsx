'use client'
import {  Input, Spacer } from '@nextui-org/react';
import {Button, ButtonGroup} from "@nextui-org/button";
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className='w-full md:flex-[80%] lg:w-[70%] mx-auto my-8 p-4 md:p-[20px] shadow-md'>
      <div className="flex  gap-4 border-2" >
        <div className='hidden md:block w-full tw-bg-primary text-white md:w-1/4'>
          A
        </div>
        <div className='w-full md:w-3/4'>
          <Button color='primary'>Click me</Button>
        </div>
      </div>
    </div>
  );
};


export default LoginPage;
