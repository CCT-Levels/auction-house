import 'server-only'

import { cookies } from 'next/headers'
import { decrypt } from './session'
import { redirect } from 'next/navigation'
import { cache } from 'react'
import { NextRequest } from 'next/server'

export const verifySession = cache(async () => {
    const cookie = (await cookies()).get('session')?.value

    if (cookie === undefined) {
        return undefined
    }

    const session = await decrypt(cookie)

    return session
})