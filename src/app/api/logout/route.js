import db from '@/app/lib/db';
import { decrypt } from '@/app/lib/session';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export async function GET(req) {
    const cookieStore = await cookies();
    const session = await decrypt(cookieStore.get('session')?.value)
    const sessionID = session.newSessionID

    let conn;
    try {
        conn = await db.pool.getConnection()
        const deleteQuery = "DELETE FROM sessions WHERE sessionID = ?";
            
        await conn.query(deleteQuery, [sessionID])
        
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
        cookieStore.delete('session')
        redirect('/')
    }

}