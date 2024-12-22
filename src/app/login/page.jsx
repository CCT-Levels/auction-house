import { redirect } from "next/navigation"
import { verifySession } from "../lib/dal"
import { LoginForm } from "../ui/login-form"
import NavbarMain from "../ui/navbar/navbarMain"

export default async function Login() {

    const sessionID = await verifySession()

    if (sessionID) {
        redirect('/profile')
    }

    return (
        <>
        <NavbarMain />
        <LoginForm />
        </>
    )
}