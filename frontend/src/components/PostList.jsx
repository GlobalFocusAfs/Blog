import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import PostItem from './PostItem';

const PostList = ({ refreshTrigger }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        // Ordenar por data mais recente primeiro
        const sortedPosts = response.data.sort((a, b) => 
          new Date(b.dataCriacao) - new Date(a.dataCriacao)
        );
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    };
    fetchPosts();
  }, [refreshTrigger]);

  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map(post => <PostItem key={post.id} post={post} />)
      ) : (
        <p>Nenhuma postagem ainda. Seja o primeiro a contribuir!</p>
      )}
    </div>
  );
};

export default PostList;
