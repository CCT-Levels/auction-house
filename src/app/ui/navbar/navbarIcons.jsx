import { AiOutlineUser, AiOutlinePlus, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import Link from 'next/link'

export default function NavbarIcons() {
    return (
        <>
            <div>
                <input type='text' placeholder='Search' className='focus:outline-none focus:ring-yellow focus:ring-2 rounded-full px-10 py-1 absolute text-black'></input>
                <AiOutlineSearch className='absolute mt-1 ml-2' size={25} color='black'/>
                <input type='text' disabled className='rounded-full px-10 py-2 bg-yellow'></input>
            </div>

            <div className='flex space-x-3'>
                <AiOutlinePlus size={50} color='#fbc720' />
                <Link href='/profile'>
                    <AiOutlineUser size={50} color='#fbc720' />
                </Link>
                <AiOutlineMenu size={50} color='#fbc720' />
            </div>
        </>
    )
}