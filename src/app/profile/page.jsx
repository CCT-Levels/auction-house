import { redirect } from "next/navigation"
import { verifySession } from "../lib/dal"
import NavbarProfile from "../ui/navbar/navbarProfile"

export default async function Profile() {
    
    const session = await verifySession()

    if (session === undefined) {
        redirect('/login')
    }
    
    return (
        <>
            <NavbarProfile name={session.firstNameV} />
        </>
    )
}