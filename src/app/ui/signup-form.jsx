'use client'
 
import { useFormStatus } from 'react-dom'
import { signup } from '@/app/actions/auth'
import { useActionState } from 'react'
 
export function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined)
 
  return (
    <div className='md:container md:mx-auto md:pt-5 md:flex md:justify-center md:items-center'>
    <form className='grid' action={action}>
      <div className='pt-3 flex flex-col'>
        <label htmlFor="firstName" className='inline-block'>First Name</label>
        <input className='bg-gray-300 placeholder-gray-500' id="firstName" name="firstName" placeholder="John" />
      </div>
      {state?.errors?.name && <p>{state.errors.name}</p>}

      <div className='pt-3 flex flex-col'>
        <label htmlFor="lastName">Last Name</label>
        <input className='bg-gray-300 placeholder-gray-500' id="lastName" name="lastName" placeholder="Smith" />
      </div>
      {state?.errors?.name && <p>{state.errors.name}</p>}
 
      <div className='pt-3 flex flex-col'>
        <label htmlFor="email">Email</label>
        <input className='bg-gray-300 placeholder-gray-500' id="email" name="email" placeholder="john@example.com" />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}

      <div className='pt-3 flex flex-col'>
        <label htmlFor="phone">Phone Number</label>
        <input className='bg-gray-300 placeholder-gray-500' id="phone" name="phone" placeholder="07515 922316" type='text'/>
      </div>
      {state?.errors?.phone && <p>{state.errors.phone}</p>}

      <div className='pt-3 flex flex-col'>
        <label htmlFor="dob">Date of Birth</label>
        <input className='bg-gray-300 placeholder-gray-500' id="dob" name="dob" placeholder="DD/MM/YYYY" />
      </div>
      {state?.errors?.dob && <p>{state.errors.dob}</p>}

      <div className='pt-3 flex flex-col'>
        <label htmlFor="address">House Address</label>
        <input className='bg-gray-300 placeholder-gray-500' id="address" name="address" placeholder="15 Stockton Avenue" />
      </div>
      {state?.errors?.address && <p>{state.errors.address}</p>}

      <div className='pt-3 flex flex-col'>
        <label htmlFor="postcode">Postcode</label>
        <input className='bg-gray-300 placeholder-gray-500' id="postcode" name="postcode" placeholder="PL1 4AA" />
      </div>
      {state?.errors?.postcode && <p>{state.errors.postcode}</p>}
 
      <div className='pt-3 flex flex-col'>
        <label htmlFor="password">Password</label>
        <input className='bg-gray-300 placeholder-gray-500' id="password" name="password" type="password" />
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
      <div className='py-2.5 mx-auto'>
        <SubmitButton />
      </div>

      <div className='py-1 mx-auto'>
        <a href='/login' className='bg-grey text-yellow p-1.5 rounded-lg hover:bg-hoverGrey'>Already have an account?</a>
      </div>
    </form>
    </div>
  )
}
 
function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button className='p-1.5 items-center bg-grey text-yellow rounded-lg hover:bg-hoverGrey' disabled={pending} type="submit">
      Sign Up
    </button>
  )
}