import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Card({ id, author, url }) {
  return (
    <button id={id} 
        className="w-full rounded image-fix">
      <LazyLoadImage
        src={url}
        alt={author}
        effect="blur"
        className="w-full rounded image-fix"
      />

      {/* <img src={url} alt={author} 
      className="w-full rounded image-fix"/> */}
    </button>
  );
}
