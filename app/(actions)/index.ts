"use server" 

import { signIn } from "../auth"


export async function doSocialLogin(formData: FormData) {

  
    const result = await signIn( "google", {
      redirectTo: "/redirect",
    });
  
    
}