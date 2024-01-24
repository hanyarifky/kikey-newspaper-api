import conn from '../database/database.js';

export const showDataArticle = () => {
  const query = 'SELECT * FROM article';

  return conn.execute(query);
};

export const showDataArticleById = (id) => {
  const query = `SELECT * FROM article WHERE id_article = "${id}"`;

  return conn.execute(query);
};
