import db from '@/app/lib/db';
import { decrypt } from '@/app/lib/session';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export async function GET(req) {
    const cookieStore = await cookies();
    const session = await decrypt(cookieStore.get('session')?.value)
    const sessionID = session.newSessionID

    try {
        const deleteQuery = "DELETE FROM sessions WHERE sessionID = ?";
            
        await db.pool.query(deleteQuery, [sessionID])
        
    } catch (err) {
        console.log(err)
    } finally {
        cookieStore.delete('session')
        redirect('/')
    }

}