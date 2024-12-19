// 'use client'

import React from 'react';
import { AiOutlineUser, AiOutlinePlus, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import Logo from '@/app/assets/buzzbids.png'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

    return (
        <div className='bg-grey flex justify-between items-center h-24 mx-auto px-4 text-white'>
            <Link href="/">
                <Image
                src={Logo}
                height='auto'
                width='auto'
                alt='Buzzbids logo'
                priority='true'
                />
            </Link>

            <div>
                <input type='text' placeholder='Search' className='focus:outline-none focus:ring-yellow focus:ring-2 rounded-full px-10 py-1 absolute text-black'></input>
                <AiOutlineSearch className='absolute mt-1 ml-2' size={25} color='black'/>
                <input type='text' disabled className='rounded-full px-10 py-2 bg-yellow'></input>
            </div>

            <div className='flex space-x-3'>
                <AiOutlinePlus size={50} color='#fbc720' />
                <AiOutlineUser size={50} color='#fbc720' />
                <AiOutlineMenu size={50} color='#fbc720' />
            </div>
        </div>
    )
}

export default Navbar