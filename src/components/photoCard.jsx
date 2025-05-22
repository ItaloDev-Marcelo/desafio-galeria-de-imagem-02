export default function Card({ k, author, url }) {

 
 
  return (
    <button key={k} >
      <img src={url} alt={author} className="w-full rounded image-fix" loading="lazy" />
    </button>
  );
}
