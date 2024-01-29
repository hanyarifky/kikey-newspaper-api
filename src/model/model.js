import conn from '../database/database.js';

export const showDataArticle = () => {
  const query = 'SELECT * FROM article';

  return conn.execute(query);
};

export const showDataArticleById = (id) => {
  const query = `SELECT * FROM article WHERE id_article = "${id}"`;

  return conn.execute(query);
};

export const addDataArticle = (data) => {
  const query = `INSERT INTO article VALUES (
    "${data['id_article']}", "${data['title_article']}", 
    "${data['writer_article']}", "${data['content_article']}", "${data['date_article']}"
    )`;

  return conn.execute(query);
};

export const updateDataArticle = (newData, id) => {
  const query = `UPDATE article 
  SET title_article = '${newData['title_article']}', writer_article = '${newData['writer_article']}', 
  content_article = '${newData['content_article']}', update_article = '${newData['update_article']}'
  WHERE id_article = "${id}"`;

  return conn.execute(query);
};

export const deleteDataArticle = (id) => {
  const query = `DELETE FROM article WHERE id_article = "${id}"`;

  return conn.execute(query);
};
