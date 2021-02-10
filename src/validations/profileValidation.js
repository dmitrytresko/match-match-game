import * as yup from 'yup';

export const profileSchema = yup.object().shape({
    firstName: yup.string().min(2, "*First name should be at least 2 characters").required("*Please enter your name"),
    lastName: yup.string().min(2, "*Surname should be at least 2 characters").required("*Please enter your surname"),
    email: yup.string().email("*Invalid email format. Try again").required("*Please enter your email"),
})