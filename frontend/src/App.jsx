import React from 'react';
import Image from './assets/Image.jpeg';
import Connect from './pages/Connect'
import Header from './components/Header';
import ArticleForm from './components/ArticleForm';


export default function App() {
  return (
    <div>
      <Header></Header>
      <ArticleForm />
    </div>
  );
}
