import Card from "../components/photoCard";
import useFetch from "../hook/useFetch"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PhotoDisplay from "../components/photosDisplay";

 



export default function Layout() {

    const {apiData} = useFetch();

      const {selectPhoto, display} = useContext(AppContext);

      console.log(selectPhoto, display)

      

    return (
        <section className="flex flex-col md:flex-row p-7">
          <section className="flex flex-col md:flex-row flex-wrap ">
      
             <form className=" m-2 lg:mx-10 lg:mb-2 lg:mt-2 w-full">
               <legend className="text-2xl lg:text-5xl font-bold my-4 lg:my-7">Tiny Galery</legend>
              <input type="text" placeholder="⌕ Busca por autor" className="w-full px-2 lg:px-4 py-2 border-2"/>
              <select id="opcao" name="opcao" className="mt-4">
                
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
             <section className="grid grid-cols-1  md:grid-cols-3 xl:grid-cols-4 gap-7 mt-7  md:gap-3">
               {
                apiData.map((item) => {
                  return  <Card key={item.id} id={item.id} author={item.author} url={item.download_url}   />
                })
               }

             <div className='flex lg:hidden'>
                 {
                display.map((item) => {
                    return <PhotoDisplay  key={item.id} id={item.id} author={item.author} url={item.download_url}  width={item.width} />
                })
              }
             </div>
               


             </section>
          </section>
          <div className='hidden lg:flex ml-2.5'>
                 {
                display.map((item) => {
                    return <PhotoDisplay  key={item.id} id={item.id} author={item.author} url={item.download_url}  width={item.width} />
                })
              }
          </div>
        </section>
    )
}