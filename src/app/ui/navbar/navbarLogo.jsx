// 'use client'

import React from 'react';
import { AiOutlineUser, AiOutlinePlus, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import Logo from '@/app/assets/buzzbids.png'
import Image from 'next/image';
import Link from 'next/link';

export default function NavbarLogo() {
    return (
        <>
            <Link href="/">
                <Image
                src={Logo}
                height='auto'
                width='auto'
                alt='Buzzbids logo'
                priority='true'
                />
            </Link>
        </>
    )
}

