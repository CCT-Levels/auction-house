'use client'
 
import { useFormStatus } from 'react-dom'
import { signup } from '@/app/actions/auth'
import { useActionState } from 'react'
 
export function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined)
 
  return (
    <div className='md:container md:mx-auto md:flex md:h-screen md:justify-center md:items-center'>
    <form className='grid border-2 border-hoverGrey p-10 rounded-lg' action={action}>
      <div className='pt-3 flex flex-col'>
        <label htmlFor="firstName" className='inline-block'>First Name</label>
        <input className='bg-gray-300 placeholder-gray-500 rounded-full px-0.5 focus:outline-none focus:ring-yellow focus:ring-2 placeholder:pl-3 placeholder:italic' id="firstName" name="firstName" placeholder="e.g John" />
      </div>
      {state?.errors?.name && <p>{state.errors.name}</p>}

      <div className='pt-3 flex flex-col'>
        <label htmlFor="lastName">Last Name</label>
        <input className='bg-gray-300 placeholder-gray-500 rounded-full px-0.5 focus:outline-none focus:ring-yellow focus:ring-2 placeholder:pl-3 placeholder:italic' id="lastName" name="lastName" placeholder="e.g Smith" />
      </div>
      {state?.errors?.name && <p>{state.errors.name}</p>}
 
      <div className='pt-3 flex flex-col'>
        <label htmlFor="email">Email</label>
        <input className='bg-gray-300 placeholder-gray-500 rounded-full px-0.5 focus:outline-none focus:ring-yellow focus:ring-2 placeholder:pl-3 placeholder:italic' id="email" name="email" placeholder="e.g john@example.com" />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}

      <div className='pt-3 flex flex-col'>
        <label htmlFor="phone">Phone Number</label>
        <input className='bg-gray-300 placeholder-gray-500 rounded-full px-0.5 focus:outline-none focus:ring-yellow focus:ring-2 placeholder:pl-3 placeholder:italic' id="phone" name="phone" placeholder="e.g 07515 922316" type='text'/>
      </div>
      {state?.errors?.phone && <p>{state.errors.phone}</p>}

      <div className='pt-3 flex flex-col'>
        <label htmlFor="dob">Date of Birth (DD/MM/YYYY)</label>
        <input className='bg-gray-300 placeholder-gray-500 rounded-full px-0.5 focus:outline-none focus:ring-yellow focus:ring-2 placeholder:pl-3 placeholder:italic' id="dob" name="dob" placeholder="e.g 01/11/2004" />
      </div>
      {state?.errors?.dob && <p>{state.errors.dob}</p>}

      <div className='pt-3 flex flex-col'>
        <label htmlFor="address">House Address</label>
        <input className='bg-gray-300 placeholder-gray-500 rounded-full px-0.5 focus:outline-none focus:ring-yellow focus:ring-2 placeholder:pl-3 placeholder:italic' id="address" name="address" placeholder="e.g 15 Stockton Avenue" />
      </div>
      {state?.errors?.address && <p>{state.errors.address}</p>}

      <div className='pt-3 flex flex-col'>
        <label htmlFor="postcode">Postcode</label>
        <input className='bg-gray-300 placeholder-gray-500 rounded-full px-0.5 focus:outline-none focus:ring-yellow focus:ring-2 placeholder:pl-3 placeholder:italic' id="postcode" name="postcode" placeholder="e.g PL1 4AA" />
      </div>
      {state?.errors?.postcode && <p>{state.errors.postcode}</p>}
 
      <div className='pt-3 flex flex-col'>
        <label htmlFor="password">Password</label>
        <input className='bg-gray-300 placeholder-gray-500 rounded-full px-0.5 focus:outline-none focus:ring-yellow focus:ring-2 placeholder:pl-3 placeholder:italic' id="password" name="password" type="password" placeholder='**********' />
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
      <div className='pt-5 mx-auto'>
        <SubmitButton />
      </div>

      {/* <div className='py-1 mx-auto'>
        <a href='/login' className='bg-grey text-yellow p-1.5 rounded-lg hover:bg-hoverGrey'>Already have an account?</a>
      </div> */}
    </form>
    </div>
  )
}
 
function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button className='p-1.5 px-7 py-2 items-center rounded-full bg-grey text-yellow hover:bg-hoverGrey' disabled={pending} type="submit">
      Sign Up
    </button>
  )
}