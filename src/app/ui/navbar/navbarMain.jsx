import NavbarIcons from "./navbarIcons";
import NavbarLogo from "./navbarLogo";


export default function NavbarMain() {
    return (
        <>
            <div className='w-screen absolute bg-grey flex justify-between items-center h-24 mx-auto px-4 text-white'>
            <NavbarLogo />
            <NavbarIcons />
            </div>
        </>
    )
}