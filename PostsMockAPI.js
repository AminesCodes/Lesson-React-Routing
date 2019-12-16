const posts = [
  { id: "a234", title: "Oreo", content: "cat" },
  { id: "a345", title: "Luna", content: "dog" },
  { id: "b234", title: "Bell", content: "tiger" },
  { id: "cda2", title: "Snowball", content: "rabbit" },
  { id: "def4", title: "Nibbles", content: "turtle" },
  { id: "eft2", title: "Bella", content: "chinchilla" }
];

const getAll = () => posts;

const getOne = id => posts.find(post => post.id === id);

export default {
  getOne,
  getAll
};
