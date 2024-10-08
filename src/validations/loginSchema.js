// import {object,string} from 'yup'

// export const loginSchema = object({
//     password:string()
//                 .required("Password required")
//                 .min(8,"Minimum 8 characters")
//                 .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,"Must contain uppercase, lowercase and number"),
//     email:string()
//             .required("Email required")
//             .email("No Valid format"),
    
// })

import { object, string } from 'yup';

export const loginSchema = object({
    password: string()
        .required("Password required")
        .min(8, "Minimum 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            "Password must contain uppercase, lowercase, and a number"
        ),
    email: string()
        .required("Email required")
        .email("Invalid email format"),
});
