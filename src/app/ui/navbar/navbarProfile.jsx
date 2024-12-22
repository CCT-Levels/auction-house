import 'server-only'

import { logout } from "@/app/actions/auth"
import NavbarLogo from "./navbarLogo"
import Link from "next/link"
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai'

export default async function NavbarProfile() {
    return (
        <>
            <div className='bg-grey flex justify-between items-center h-24 mx-auto px-4 text-white'>
                <NavbarLogo />
                <div className='flex space-x-3'>
                <Link href='/profile'>
                    <AiOutlineUser size={50} color='#fbc720' />
                </Link>
                <a href='/api/logout'>
                    <AiOutlineLogout size={50} color='#fbc720' />
                </a>
            </div>
            </div>
        </>
    )
}