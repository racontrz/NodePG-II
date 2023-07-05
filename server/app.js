const express = require("express");
const { getPosts, addPost, likePost, deletePost } = require("./consultas");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/posts", async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const { titulo, img, descripcion, likes } = req.body;
  const result = await addPost(titulo, img, descripcion, likes);
  res.send(result);
});

app.put("/posts/likes/:id", async (req, res) => {
  const { id } = req.params;
  const result = await likePost(id);
  res.send(result);
});

app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const result = await deletePost(id);
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
