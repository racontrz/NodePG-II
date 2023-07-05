const { pool } = require("./conexiones");

const getPosts = async () => {
  const result = await pool.query("SELECT * FROM posts");
  return result.rows;
};

const addPost = async (titulo, img, descripcion, like) => {
  const result = await pool.query(
    "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)",
    [titulo, img, descripcion, like]
  );
  return result.rows;
};

const likePost = async (id) => {
  const result = await pool.query(
    "UPDATE posts SET likes = likes + 1 WHERE id = $1",
    [id]
  );
  return result.rows;
};

const deletePost = async (id) => {
  const result = await pool.query("DELETE FROM posts WHERE id = $1", [id]
  );
  return result.rows;
}

module.exports = {
  getPosts,
  addPost,
  likePost,
  deletePost
};
