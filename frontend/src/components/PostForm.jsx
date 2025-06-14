import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
  const [post, setPost] = useState({
    titulo: '',
    autor: 'Anônimo',
    conteudo: '',
    imagemUrl: ''
  });

  const handleChange = (e) => {
    setPost({...post, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(post);
    setPost({
      titulo: '',
      autor: 'Anônimo',
      conteudo: '',
      imagemUrl: ''
    });
  };

  return (
    <div className="post-form">
      <h2>Nova Postagem</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={post.titulo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="autor"
          placeholder="Autor (opcional)"
          value={post.autor}
          onChange={handleChange}
        />
        <textarea
          name="conteudo"
          placeholder="Conteúdo"
          value={post.conteudo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imagemUrl"
          placeholder="URL da Imagem (opcional)"
          value={post.imagemUrl}
          onChange={handleChange}
        />
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
};

export default PostForm;