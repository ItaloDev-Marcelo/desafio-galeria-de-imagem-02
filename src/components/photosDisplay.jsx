

export default function photoDisplay({key,author,url, width}) {
    return (
        <div key={key}>
             <img src={url} alt={author} />
             <article>
                    <h2> Autor: {author} </h2>
                    <p> Dimensions: {width} </p>
                    <p>ID: {key} </p>
             </article>
        </div>
    )
}