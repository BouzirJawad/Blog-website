import React from 'react'
import { useFormik } from 'formik'
import { Article } from '../schemas/Article'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'

function ArticleForm() {

    const formik = useFormik({
        initialValues: {
            title: '',
            image: '',
            content: '',
            category: ''
        },
        validationSchema: Article,
        onSubmit: async (values, {resetForm}) => {
            try {
                await axios.post('http://localhost:7460/articles', values)
                toast.success("Article Created successfully", { duration: 3000 })
                resetForm()
            } catch (error) {
                console.error("Error creating article:", error)
                toast.error("Error creating article", {duration: 2000})
            }
        }
    })

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 max-w-md mx-auto' >
        <Toaster position='top-center' />
        <div>
            <label>Title</label>
            <input type="text" name='title' onChange={formik.handleChange} value={formik.values.title} />
            {formik.touched.title && formik.errors.title && (
                <p className='text-red-500 text-sm'>{formik.errors.title}</p>
            )}
        </div>

        <div>
            <label>Image URL</label>
            <input type="text" name='image' onChange={formik.handleChange} value={formik.values.image} />
            {formik.touched.image && formik.errors.image && (
                <p className='text-red-500 text-sm'>{formik.errors.image}</p>
            )}
        </div>

        <div>
            <label>Content</label>
            <input type="text" name='content' onChange={formik.handleChange} value={formik.values.content} />
            {formik.touched.content && formik.errors.content && (
                <p className='text-red-500 text-sm'>{formik.errors.content}</p>
            )}
        </div>

        <div>
            <label>Category</label>
            <input type="text" name='category' onChange={formik.handleChange} value={formik.values.category} />
            {formik.touched.category && formik.errors.category && (
                <p className='text-red-500 text-sm'>{formik.errors.category}</p>
            )}
        </div>

        <button type='submit' className='primary-btn' >
            Create Article
        </button>

    </form>
  )
}

export default ArticleForm
