import '../App.css';

function PostBox({ title, description, price }) {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>{price}</strong></p>
    </div>
  );
}

export default PostBox;