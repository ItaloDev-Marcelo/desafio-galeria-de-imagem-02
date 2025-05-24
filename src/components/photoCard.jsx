import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Card({ id, author, url }) {
 
  const {handleId, selectPhoto} = useContext(AppContext);



  return (
    <button onClick={() => handleId(id)} id={id} className="cursor-pointer">
      <img src={url} alt={author} 
      className="w-full rounded image-fix  hover:opacity-75 hover:grayscale"/>
    </button>
  );
}
