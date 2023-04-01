import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default Home;
