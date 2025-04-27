import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Delete } from "../icons/Delete";
import { Update } from "../icons/Update";
import { useFormik } from "formik";
import { Article } from "../schemas/Article";

function ArtclDtlCrd(props) {
  const [article, setArticle] = useState(null);
  const [articleId, setArticleId] = useState(props.articleId);
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const updateFormik = useFormik({
    initialValues: {
      updatedTitle: article?.title,
      updatedImage: preview,
      updatedContent: article?.content,
      updatedCategory: article?.category,
    },
    validationSchema: Article,
  });

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7460/articles/${articleId}`
        );
        console.log(response.data);
        setArticle(response.data);
        setPreview(response.data.image)
      } catch (error) {
        console.error("Error fetching article:", error);
        toast.error("Error fetching article", { duration: 4000 });
        navigate("/");
      }
    };

    fetchArticle();
  }, [props.articleId, navigate]);

  const deleteArticle = async (articleId) => {
    try {
      const response = await axios.delete(
        `http://localhost:7460/articles/${articleId}`
      );

      if (response.status === 200) {
        toast.success("Article deleted successfully !", { duration: 4000 });
        setTimeout(() => {
          navigate("/");
        }, 6000);
      } else {
        toast.error("Failed to delete article", { duration: 4000 });
        console.error("Failed to delete article");
      }
    } catch (error) {
      toast.error("Error Delete article", { duration: 4000 });
      console.error("Error Deleting article", error);
    }
  };

  const updateArticle = async () => {
    try {
      const response = await axios.put(
        `http://localhost:7460/articles/${articleId}`,
        {
          title: updateFormik.values.updatedTitle,
          image: preview,
          content: updateFormik.values.updatedContent,
          category: updateFormik.values.updatedCategory,
        }
      );

      toast.success("Article Updated Successfully!", { duration: 4000 });
      setArticle(response.data);

      setTimeout(() => {
        updateFormik.resetForm();
        setIsEditing(false);
      }, 1000);
    } catch (error) {
      toast.error("Error Updating Article", { duration: 4000 });
      console.error("Error Updating Article", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateFormik.setFieldValue("image", reader.result);
        setPreview(reader.result); // for image preview
      };
      reader.readAsDataURL(file);
    }
  };

  if (!article) {
    return <div className="text-center p-10">Loading...</div>;
  }

  return (
    <div className=" relative">
      <Toaster position="top-center" />
      <div className="mainDiv rounded-2xl mt-5 max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto rounded-lg mb-6"
          />
        )}

        <div className="text-gray-600 text-sm mb-4">
          Category: {article.category}
        </div>
        <p className="text-lg leading-7">{article.content}</p>

        <div className="flex justify-between items-center mt-7">
          <button
            onClick={() => navigate("/")}
            className=" bg-blue-500 h-fit hover:bg-blue-600 text-white rounded"
          >
            Go Back
          </button>
          <div className="flex gap-5">
            <button
              onClick={() => setIsEditing(true)}
              className=" mx-auto bg-amber-600 h-fit text-center place-content-around flex items-center gap-2 primary-btn"
            >
              <Update />
              <p>Modify</p>
            </button>

            <button
              onClick={() => deleteArticle(articleId)}
              className=" mx-auto bg-red-600 h-fit text-center place-content-around flex items-center gap-2 primary-btn"
            >
              <Delete />
              <p>Delete</p>
            </button>
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
          <div className="mainDiv p-5 w-[70%] mx-auto rounded-2xl">
            <div className=" gap-4">
              <div className="flex gap-5">
                <div className="w-1/2">
                  <div className="flex flex-col">
                    <label>Article Title</label>
                    <input
                      type="text"
                      name="updatedTitle"
                      onChange={updateFormik.handleChange}
                      value={updateFormik.values.updatedTitle}
                    />
                    {updateFormik.touched.updatedTitle &&
                      updateFormik.errors.updatedTitle && (
                        <p className="text-red-500 text-sm">
                          {updateFormik.errors.updatedTitle}
                        </p>
                      )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="updatedContent">Article Content</label>
                    <textarea
                      name="updatedContent"
                      rows="3"
                      onChange={updateFormik.handleChange}
                      value={updateFormik.values.updatedContent}
                    />
                    {updateFormik.touched.updatedContent &&
                      updateFormik.errors.updatedContent && (
                        <p className="text-red-500 text-sm">
                          {updateFormik.errors.updatedContent}
                        </p>
                      )}
                  </div>
                </div>

                <div className="w-1/2">
                  <div className="flex flex-col mx-auto">
                    <label htmlFor="category">Article Category</label>
                    <select
                      name="updatedCategory"
                      id="updatedCategory"
                      onChange={updateFormik.handleChange}
                      onBlur={updateFormik.handleBlur}
                      value={updateFormik.values.updatedCategory}
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
                    {updateFormik.touched.updatedCategory &&
                      updateFormik.errors.updatedCategory && (
                        <div className="text-red-500 text-sm">
                          {updateFormik.errors.updatedCategory}
                        </div>
                      )}
                  </div>

                  <div className=" flex flex-col mx-auto">
                    <label>Article Image</label>
                    <input
                      type="file"
                      name="image/*"
                      onChange={handleImageChange}
                      onBlur={updateFormik.onBlur}
                      className="w-[100%] border rounded"
                    />
                    {updateFormik.touched.updatedImage &&
                      updateFormik.errors.updatedImage && (
                        <p className="text-red-500 text-sm">
                          {updateFormik.errors.updatedImage}
                        </p>
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

              <div className="flex justify-around gap-5 mt-5">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 text-white dark:text-black w-[50%]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => updateArticle()}
                  disabled={updateFormik.isSubmitting}
                  className="primary-btn w-[50%]"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArtclDtlCrd;
