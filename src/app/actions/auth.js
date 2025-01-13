'use server'
import { createSession, deleteSession } from "@/app/lib/session";
import { SignupFormSchema, LoginFormSchema } from "@/app/lib/definitions";
import { redirect } from "next/navigation";
const bcrypt = require('bcrypt')
const db = require('@/app/lib/db')

let newUserID

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

    let conn
    try {
      conn = await db.pool.getConnection()
      const insertQuery = "INSERT INTO users (firstName, lastName, emailAddress, phoneNumber, dateOfBirth, houseAddress, postcode, password) VALUES (?,?,?,?,?,?,?,?)";

      const result = await conn.query(insertQuery, [firstName, lastName, email, phone, dob, address, postcode, hashedPassword])

      let userID = await result.insertId

      newUserID = userID.toString().replace("n", "")

      await createSession(newUserID)
    } catch (err) {
      console.log(err)
    } finally {
      conn.release()
      redirect('/profile')
    }
}

export async function login(state, formData) {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { email, password } = validatedFields.data
  let conn;
  try {
    conn = await db.pool.getConnection()
    const userQuery = "SELECT password, userID FROM users WHERE emailAddress = ?";

    const result = await conn.query(userQuery, [email])

    const user = result[0]

    if (!user) {
      return {
        errors: {
          email: 'User not found'
        }
      }
    }

    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword) {
      return {
        errors: {
          password: 'Invalid password'
        }
      }
    }

    await createSession(user.userID)
  } catch (err) {
    console.log(err)
  } finally {
    conn.release()
  }
}