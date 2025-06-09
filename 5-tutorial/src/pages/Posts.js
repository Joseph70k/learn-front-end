import '../App.css';

const dummyPosts = [
  {
    id: 1,
    title: "Used MacBook Pro",
    description: "2019 model, great condition. 16GB RAM, 512GB SSD.",
    price: "$750"
  },
  {
    id: 2,
    title: "Bike for Sale",
    description: "Mountain bike, barely used. Ideal for trails.",
    price: "$120"
  },
  {
    id: 3,
    title: "Textbooks Bundle",
    description: "Includes CS, Math, and Psychology books.",
    price: "$50"
  }
];

function Posts() {
  return (
    <div className="posts-page">
      <h2>All Posts</h2>
      <div className="post-list">
        {dummyPosts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p><strong>{post.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
