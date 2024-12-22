'use client'
 
import { useFormStatus } from 'react-dom'
import { login } from '@/app/actions/auth'
import { useActionState } from 'react'
 
export function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined)
 
  return (
    <div className='md:container md:mx-auto md:pt-5 md:flex md:justify-center md:items-center'>
    <form className='grid' action={action}>
      <div className='pt-3 flex flex-col'>
        <label htmlFor="email">Email</label>
        <input id="email" className='bg-gray-300 placeholder-gray-500' name="email" placeholder="john@example.com" />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}
 
      <div className='pt-3 flex flex-col'>
        <label htmlFor="password">Password</label>
        <input id="password" className='bg-gray-300 placeholder-gray-500' name="password" type="password" />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <div className='py-3 mx-auto'>
      <SubmitButton />
      </div>
      <div className='mx-auto pt-2'>
        <a href='/signup' className='bg-grey text-yellow p-1.5 rounded-lg hover:bg-hoverGrey'>Don't have an account?</a>
      </div>
    </form>
    </div>
  )
}
 
function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button className='p-1.5 items-center rounded-lg bg-grey text-yellow hover:bg-hoverGrey ' disabled={pending} type="submit">
      Login
    </button>
  )
}