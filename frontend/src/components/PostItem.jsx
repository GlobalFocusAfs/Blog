import React from 'react';

const PostItem = ({ post }) => {
  return (
    <div className="post-card">
      {post.imagemUrl && (
        <div className="post-image">
          <img src={post.imagemUrl} alt={post.titulo} />
        </div>
      )}
      <div className="post-content">
        <h3>{post.titulo}</h3>
        <p className="post-meta">Por: {post.autor} • {new Date(post.dataCriacao).toLocaleDateString('pt-BR')}</p>
        <p>{post.conteudo}</p>
      </div>
    </div>
  );
};

export default PostItem;