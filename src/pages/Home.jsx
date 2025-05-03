import { Link } from "react-router";

export default function Home() {
  return (
    <div className="home">
      <h1>Unleash Your Style with Our Latest Clothing Collection!</h1>
      <p>
        Step into a world of fashion where every piece tells a story. Our
        curated collection is designed for trendsetters and classic enthusiasts
        alike.
      </p>
      <button><Link to="items" >Choose from our collection</Link></button>
    </div>
  );
}
