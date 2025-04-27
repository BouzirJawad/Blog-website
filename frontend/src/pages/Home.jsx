import React, { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import axios from "axios";
import ArticleForm from "../components/ArticleForm";
import ArticleCard from "../components/ArticleCard";
import { Add } from "../icons/Add";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isAdding, setIsAdding] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get("http://localhost:7460/articles");
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const filteredArticles = articles.filter((article) => {
    const titleMatch = article.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const keywordMatch = article.keywords?.some((kw) =>
      kw.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const categoryMatch = category === "" || article.category === category;

    return (titleMatch || keywordMatch) && categoryMatch;
  });

  return (
    <div className="relative">
      <div>
        <div>
          <div className="flex gap-3 items-center justify-center">
          <FilterBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            category={category}
            setCategory={setCategory}
          />
            <button
              onClick={() => setIsAdding(true)}
              className=" h-fit text-center place-content-around flex items-center gap-2 primary-btn my-5"
            >
              <Add />
              <p>Add an article</p>
            </button>
          </div>
          {/* <div className="space-y-4">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="p-4 border rounded shadow bg-white"
              >
                <h2 className="text-xl font-bold">{article.title}</h2>
                <p className="text-sm text-gray-500">{article.category}</p>
                <p>{article.content}</p>
              </div>
            ))}
          </div> */}
        </div>

        <div className="">
          {articles.length > 0 ? (
            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 gap-7 m-5 mx-auto">
              {articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  category={article.category}
                  content={article.content}
                  image={article.image}
                />
              ))}
            </div>
          ) : (
            <>
              <p className="text-center">No Articles To Display</p>
              <button
                onClick={() => setIsAdding(true)}
                className="w-[30%] mx-auto h-fit text-center place-content-around flex items-center gap-2 primary-btn my-5"
              >
                <Add />
                <p>Add an article</p>
              </button>
            </>
          )}
        </div>
      </div>

      {isAdding && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
          <ArticleForm onClose={()=>setIsAdding(false)} />
        </div>
      )}
    </div>
  );
};

export default Home;
