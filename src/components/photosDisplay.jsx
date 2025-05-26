import { useContext } from "react"
import { AppContext } from "../context/AppContext"


export default function PhotoDisplay({id,author,url, width}) {

    const {choseFavouities } = useContext(AppContext)

    return (
        <div key={id} className="bg-gray-200 display-card rounded-md">
             <img src={url} alt={author} className="rounded-t-md" loading="lazy" />
             <article className="p-5">
                    <h2> <span className="font-medium">Autor:</span>   {author} </h2>
                    <p><span className="font-medium my-3">Dimensions: </span>   {width} </p>
                    <p> <span className="font-medium">ID:</span>   {id} </p>
                    <button onClick={() => choseFavouities(id)}  className='w-full mt-10 rounded h-10 p-2 bg-amber-300 font-bold text-blue-50 hover:opacity-75 hover:bg-amber-500 cursor-pointer' >Favorito</button>
             </article>
        </div>
    )
}