import 'server-only'

import NavbarLogo from "./navbarLogo"
import { AiOutlineLogout } from 'react-icons/ai'

export default async function NavbarProfile(props) {
    return (
        <>
            <div className='bg-grey flex justify-between items-center h-24 mx-auto px-4 text-white'>
                <NavbarLogo />
                <div className='flex space-x-3 '>
                <p className='welcome'>
                    Hello,<br/> { props.name }
                </p>
                <a href='/api/logout'>
                    <AiOutlineLogout size={50} color='#fbc720' />
                </a>
            </div>
            </div>
        </>
    )
}