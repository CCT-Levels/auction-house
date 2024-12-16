'use server'
import { createSession } from "@/app/lib/session";
import { SignupFormSchema } from "@/app/lib/definitions";
import { redirect } from "next/navigation";
const bcrypt = require('bcrypt')
const db = require('@/app/lib/db')

export async function signup(state, formData) {
    // validate forms
    const validatedFields = SignupFormSchema.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        dob: formData.get('dob').split("/").reverse().join("-"),
        address: formData.get('address'),
        postcode: formData.get('postcode'),
        password: formData.get('password'),
      })

      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
      }


    const { firstName, lastName, email, phone, dob, address, postcode, password } = validatedFields.data

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
      const insertQuery = "INSERT INTO users (firstName, lastName, emailAddress, phoneNumber, dateOfBirth, houseAddress, postcode, password) VALUES (?,?,?,?,?,?,?,?)";

      const result = await db.pool.query(insertQuery, [firstName, lastName, email, phone, dob, address, postcode, hashedPassword])

      await createSession(result.userID)

    } catch (err) {
      console.log(err)
    } finally {
      redirect('/profile')
    }
} 