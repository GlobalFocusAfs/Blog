import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { createPost } from './services/api';
import './App.css';

function App() {
  const [refreshPosts, setRefreshPosts] = useState(false);

  const handleNewPost = async (post) => {
    try {
      await createPost(post);
      setRefreshPosts(prev => !prev); // toggle to trigger refresh in PostList
    } catch (error) {
      console.error("Erro ao criar post:", error);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Consciência Verde</h1>
        <p>Compartilhe ideias para um mundo sustentável</p>
      </header>
      
      <main>
        <PostForm onSubmit={handleNewPost} />
        <PostList refreshTrigger={refreshPosts} />
      </main>
      
      <footer>
        <p>© {new Date().getFullYear()} - Blog de Responsabilidade Socioambiental</p>
      </footer>
    </div>
  );
}

export default App;
