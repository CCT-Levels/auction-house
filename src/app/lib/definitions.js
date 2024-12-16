import { z } from 'zod'
import validator from 'validator'
 
export const SignupFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
  lastName: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
    phone: z.string().trim().refine(validator.isMobilePhone, { message: 'Phone number must follow format +447xxxxxxxxx' }),
    dob: z.string().date(),
    address: z.string().min(5, { message: 'Address must be at least 5 characters long.' }).trim(),
    postcode: z.string().trim().refine(
        (value) => validator.isPostalCode(value, 'GB'),
        'Invalid Post Code'
    )
})