import {object,ref,string} from 'yup'

export const registerSchema = object({
    confirmPassword:string()
    .required("required")
    .oneOf([ref("password"),null],"Passwords do not match"),
    password:string()
                .required("Password required")
                .min(8,"Minimum 8 characters")
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,"Must contain uppercase, lowercase and number"),
    email:string()
            .required("Email required")
            .email("No valid format"),
    
})