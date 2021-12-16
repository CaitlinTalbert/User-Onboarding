import * as yup from 'yup'; 

const formSchema = yup.object().shape({
    first_name: yup 
        .string()
        .trim()
        .required('Name is required!'),
    email: yup
        .string()
        .trim()
        .required('Must enter a valid email address'), 
    password: yup 
        .string()
        .trim()
        .required('Password must be 10 characters in length'), 
    termsOfService: yup 
        .boolean()
        .oneOf([true], 'You must accept the Terms of Service'),
}); 

export default formSchema; 