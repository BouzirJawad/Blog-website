import React, { useState, useEffect} from 'react'
import { useFormik } from 'formik'
import { Article } from '../utils/Article'
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
    <div>
     <Toaster position='top-center' />
    </div>
  )
}

export default ArticleForm