import Card from "../components/photoCard";
import useFetch from "../hook/useFetch"

export default function Layout() {

    const {apiData} = useFetch();


    return (
        <section>
            <h1>Tiny Galery</h1>
           <form>
              <input type="text" placeholder="Busca por autor"/>
              <select id="opcao" name="opcao">
                
                 <option value='' disabled>Filtro</option>
                 <option value='Alejandro'>Alejandro Escamilla</option>
                 <option value='Aleks'>Aleks Dorohovich</option>
                 <option value='Vadim'>Vadim Sherbakov</option>
                 <option value='Yoni'>Yoni Kaplan-Nadel</option>
                 <option value='Jerry'>Jerry Adney</option>
                 <option value='Go'>Go Wild</option>
                 <option value='Paul'>Paul Jarvis</option>
              </select>
              <button></button>
           </form>
             <section className="grid grid-cols-1  md:grid-cols-3 gap-7 mt-7  md:gap-3">
               {
                apiData.map((item) => {
                  return  <Card key={item.id} id={item.id} author={item.author} url={item.download_url}   />
                })
               }
               
        </section>
        </section>
    )
}