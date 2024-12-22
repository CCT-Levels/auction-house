import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export async function GET(req) {
    await (await cookies()).delete('session')
    redirect('/')
}