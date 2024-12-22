import { redirect } from "next/navigation"
import { verifySession } from "../lib/dal"
import NavbarProfile from "../ui/navbar/navbarProfile"

export default async function Profile() {
    const loggedIn = await verifySession()

    if (!loggedIn) {
        await redirect('/login')
    }
    
    return (
        <>
            <NavbarProfile />
        </>
    )
}