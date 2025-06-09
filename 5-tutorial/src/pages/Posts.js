import '../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PostBox from '../components/PostBox';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
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
              key={post._id}
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
