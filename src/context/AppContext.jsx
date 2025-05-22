import { createContext,  useState } from "react";
import useFetch from "../hook/useFetch";

export const AppContext  = createContext(null);


function GlobalState({children}) {
     const {apiData} = useFetch();

           const [selectPhoto, setSelectPhoto] = useState(apiData[0]);
     
           const handleId = (id) => {
              setSelectPhoto(apiData[id])
           }


     return (
          <AppContext.Provider value={{selectPhoto, handleId}}>
               {children}
          </AppContext.Provider>
     )
}

export default GlobalState;

