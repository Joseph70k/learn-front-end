import '../App.css';
import PostBox from '../components/PostBox';
import { useEffect, useState } from 'react';

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
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    setTimeout(() => {
      setPosts(dummyPosts);
    }, 500);
  }, []);

  return (
    <div className="posts-page">
      <h2>All Posts</h2>
      <div className="post-list">
        {posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post) => (
            <PostBox
              key={post.id}
              title={post.title}
              description={post.description}
              price={post.price}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Posts;
