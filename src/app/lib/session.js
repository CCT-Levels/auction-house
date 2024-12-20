import 'server-only';
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';
const db = require('@/app/lib/db');

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);
let sessionID
let newSessionID

export async function encrypt(payload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey)
}

export async function decrypt(session) {
    try {
      const { payload } = await jwtVerify(session, encodedKey, {
        algorithms: ['HS256'],
      })
      return payload
    } catch (error) {
      console.log('Failed to verify session')
    }
  }

export async function createSession(userID) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    try {
      const insertQuery = "INSERT INTO sessions (userID, expiresAt) VALUES (?,?)";
    
      const result = await db.pool.query(insertQuery, [userID, expiresAt])
    
      sessionID = await result.insertId;

      newSessionID = sessionID.toString().replace("n", "");
    
    } catch (err) {
      console.log(err)
    }
    const session = await encrypt({ newSessionID, expiresAt });
    const cookieStore = await cookies()

    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    })
}