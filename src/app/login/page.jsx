import { redirect } from "next/navigation"
import { verifySession } from "../lib/dal"
import { LoginForm } from "../ui/login-form"
import NavbarMain from "../ui/navbar/navbarMain"
import ToastHandler from "./ToastHandler"

export default async function Login({ searchParams }) {

    if (await verifySession() != undefined) {
        redirect('/profile')
    }
    const message = searchParams?.message

    console.log(message)

    return (
        <>
        <NavbarMain />
        <LoginForm />
        <ToastHandler message={await message} />
        </>
    )
}