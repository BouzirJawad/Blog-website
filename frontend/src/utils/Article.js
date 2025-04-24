import * as yup from 'yup';

export const Article = yup.object({
    title: yup.string().required('Title is required'),
    image: yup.string().url('Must be a valid URL').required('Image URL is required'),
    content: yup.string().required('Content is required'),
    category: yup.string().required('Category is required'),
  })