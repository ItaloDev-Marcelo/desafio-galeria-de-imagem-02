

export default function PhotoDisplay({id,author,url, width}) {
    return (
        <div key={id} className="bg-gray-200 display-card rounded-md">
             <img src={url} alt={author} className="rounded-t-md" />
             <article className="p-5">
                    <h2> <span className="font-medium">Autor:</span>   {author} </h2>
                    <p><span className="font-medium">Dimensions: </span>   {width} </p>
                    <p> <span className="font-medium">ID:</span>   {id} </p>
                    <button>Favorito</button>
             </article>
        </div>
    )
}