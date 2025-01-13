import { verifySession } from "@/app/lib/dal"
import db from "@/app/lib/db"
import { EmailCheck } from "@/app/lib/definitions"
import { redirect } from "next/navigation"
import { NextResponse } from "next/server"

export async function GET(request) {
    const session = await verifySession()

    if (session === undefined) {
        const url = new URL('/login', request.url)
        url.searchParams.set('message', 'no_auth')
        return NextResponse.redirect(url)
    }

    const searchParams = request.nextUrl.searchParams
    const user = searchParams.get('user')
    
    const validatedEmail = EmailCheck.safeParse({
        email: user
    })

    if (!validatedEmail.success) {
        return new Response(validatedEmail.error.flatten().fieldErrors.email)
    }

    const { email } = validatedEmail.data

    let conn;
    
    try {
        conn = await db.pool.getConnection()

        const query = "SELECT userID, firstName, lastName, phoneNumber, dateOfBirth, houseAddress, postcode, role, score from users where emailAddress = ?"

        const result = await conn.query(query, [email])
    
        const user = result[0]
    
        if (!user) {
            return new Response('User not found')
        }

        return new Response(JSON.stringify(result[0], null, 4))
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }
}