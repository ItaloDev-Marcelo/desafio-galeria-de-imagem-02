
export default function Card({ id, author, url }) {
  return (
    <button id={id}>
      <img src={url} alt={author} 
      className="w-full rounded image-fix"/>
    </button>
  );
}
