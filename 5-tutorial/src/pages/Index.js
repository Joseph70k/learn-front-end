import '../App.css';
import { useNavigate } from 'react-router-dom';

function Index() {
  const navigate = useNavigate();

  const goToPosts = () => {
    navigate("/posts");
  };

  return (
    <div className="index-wrapper">
      <h2 className="welcome-heading">Welcome to Buy & Sale!</h2>

      <div className="index-container">
        <div className="index-card">
          <h3>This is my main page!</h3>
          <p>List your item or contact the seller!</p>
          <button className="index-button" onClick={goToPosts}>View Posts</button>
        </div>
      </div>
    </div>
  );
}

export default Index;
