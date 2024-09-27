import { Link } from "react-router-dom";

export default function HomeButton() {
  return (
    <Link to="/get-started" className="home-button">
      Get Started 
    </Link>
  );
}
