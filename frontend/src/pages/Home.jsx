import React, { useEffect, useState } from 'react';
import { getAllArticles } from '../server/articleService';
import FilterBar from '../components/FilterBar';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {getAllArticles().then(data => setArticles(data));
  }, []);

  const filteredArticles = articles.filter(article => {
    const titleMatch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const keywordMatch = article.keywords?.some(kw =>
      kw.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const categoryMatch = category === '' || article.category === category;

    return (titleMatch || keywordMatch) && categoryMatch;
  });

  return (
    <div className="p-4">
      <FilterBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} category={category} setCategory={setCategory}/>
      <div className="space-y-4">{filteredArticles.map(article => (
          <div key={article.id} className="p-4 border rounded shadow bg-white">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="text-sm text-gray-500">{article.category}</p>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
