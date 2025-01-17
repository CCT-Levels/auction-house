'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"

export default function ToastHandler({ message }) {
    
    useEffect(() => {
        if (message === 'no_auth') {
            toast.warning('You need to be authenticated to access that page!')
        }
    }, [message])

    return <ToastContainer />
}