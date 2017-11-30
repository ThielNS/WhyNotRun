import { LOGIN_USER, VALID_LOGIN } from "./constants";


export const RegisterUser = (name, email, profession, password, confirmPassword) => {
   const bodyParams = {
       name:name,
       email:email, 
       profession:profession,
       password:password,
       confirmPassword:confirmPassword
   }
}