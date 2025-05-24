import { createContext, useEffect, useState } from "react";
import useFetch from "../hook/useFetch";

export const AppContext = createContext(null);

function GlobalState({ children }) {
   const { apiData } = useFetch();

  const [selectPhoto, setSelectPhoto] = useState([]);
  const [display, setDisplay] = useState([]);




  const handleId = (id) => {
     setSelectPhoto(id)
  };


  useEffect(() => {
      setDisplay(apiData.filter(Item => Item.id === selectPhoto))
  }, [selectPhoto])





  return (
    <AppContext.Provider value={{ selectPhoto, handleId, display}}>
      {children}
    </AppContext.Provider>
  );
}

export default GlobalState;
