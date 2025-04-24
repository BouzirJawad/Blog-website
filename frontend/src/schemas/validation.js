import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  username: Yup.string().required('Username is required').min(3),
  email: Yup.string().required('Email is required').email(),
  password: Yup.string().required('Password is required').min(6),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email(),
  password: Yup.string().required('Password is required'),
});
