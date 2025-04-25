import React, { useState } from "react";
import { useFormik } from "formik";
import { Article } from "../schemas/Article";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function ArticleForm() {
  const [preview, setPreview] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      content: "",
      category: "",
    },
    validationSchema: Article,
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post("http://localhost:7460/articles", values);
        toast.success("Article Created successfully", { duration: 3000 });
        resetForm();
        setPreview(null);
      } catch (error) {
        console.error("Error creating article:", error);
        toast.error("Error creating article", { duration: 2000 });
      }
    },
  });

  const handleImageChange = (e) => {
    const file = e.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue("image", reader.result);
        setPreview(reader.result); // for image preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mainDiv p-5 w-[70%] mx-auto rounded-2xl">
      <form onSubmit={formik.handleSubmit} className=" gap-4">
        <Toaster position="top-center" />
        <div className="flex gap-5">
          <div className="w-1/2">
            <div className="flex flex-col">
              <label>Title</label>
              <input
                type="text"
                name="title"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              {formik.touched.title && formik.errors.title && (
                <p className="text-red-500 text-sm">{formik.errors.title}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                rows="3"
                onChange={formik.handleChange}
                value={formik.values.content}
              />
              {formik.touched.content && formik.errors.content && (
                <p className="text-red-500 text-sm">{formik.errors.content}</p>
              )}
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex flex-col mx-auto">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                id="category"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
                className="w-[100%] border rounded p-2 "
              >
                <option value="" disabled>
                  -- Select a category --
                </option>
                <option value="sports">Sports</option>
                <option value="food">Food</option>
                <option value="study">Study</option>
                <option value="travel">Travel</option>
                <option value="fashion">Fashion</option>
              </select>
              {formik.touched.category && formik.errors.category && (
                <div className="text-red-500 text-sm">
                  {formik.errors.category}
                </div>
              )}
            </div>

            <div className=" flex flex-col mx-auto">
              <label>Image</label>
              <input
                type="file"
                name="image/*"
                onChange={handleImageChange}
                onBlur={formik.onBlur}
                className="w-[100%] border rounded"
              />
              {formik.touched.image && formik.errors.image && (
                <p className="text-red-500 text-sm">{formik.errors.image}</p>
              )}
              {preview && (
                <img
                  src={preview}
                  alt="preview"
                  className="w-32 mt-2 rounded mx-auto"
                />
              )}
            </div>
          </div>
        </div>

        <div className="mx-auto text-center mt-5">
          <button type="submit" className="primary-btn ">
            Create Article
          </button>
        </div>
      </form>
    </div>
  );
}

export default ArticleForm;
