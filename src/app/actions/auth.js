import { createSession } from "@/app/lib/session";
import { SignupFormSchema } from "@/app/lib/definitions";
import { redirect } from "next/dist/server/api-utils";

export async function signup(state, formData) {
    // validate forms
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
      })

      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
      }

    await createSession(/*user id */)
    // redirect
    redirect('/')
} 