import { redirect } from "next/navigation"
import { verifySession } from "../lib/dal"
import { LoginForm } from "../ui/login-form"
import NavbarMain from "../ui/navbar/navbarMain"
import ToastHandler from "./ToastHandler"

export default async function Login(props) {
    const searchParams = await props.searchParams;

    if ((await verifySession()) != undefined) {
        redirect('/profile')
    }
    const message = searchParams?.message

    return (
        <>
        <NavbarMain />
        <LoginForm />
        <ToastHandler message={await message} />
        </>
    )
}