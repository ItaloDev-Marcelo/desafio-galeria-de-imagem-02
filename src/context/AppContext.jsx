import { createContext, useEffect, useState } from "react";
import useFetch from "../hook/useFetch";

export const AppContext = createContext(null);

function GlobalState({ children }) {
  const { apiData } = useFetch();

  const [selectPhoto, setSelectPhoto] = useState([]);
  const [display, setDisplay] = useState([]);
  const [list, setList] = useState([]);
  const [myFavouities, setMyFavouities] = useState([]);
  useEffect(() => {
    setDisplay(apiData.filter((Item) => Item.id === selectPhoto));
  }, [selectPhoto]);

  const handleId = (id) => {
    setSelectPhoto(id);
  };

  const choseFavouities = (id) => {
    if (selectPhoto === id) {
      setList((prev) => [...prev, ...display]);

      if (list.some((it) => it.id ===  id)) {
        // Remove se já existe
        setMyFavouities((prev) => prev.filter((todo) => todo.id !== id));
      } else {
        // Adiciona se não existe
        setMyFavouities((prev) => [...prev, ...display]);
      }
    } else {
      console.log("nothing to add");
    }
  };

  return (
    <AppContext.Provider
      value={{ selectPhoto, handleId, display, choseFavouities, myFavouities }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default GlobalState;
