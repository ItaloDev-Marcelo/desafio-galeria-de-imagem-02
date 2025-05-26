import Card from "../components/photoCard";
import useFetch from "../hook/useFetch";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import PhotoDisplay from "../components/photosDisplay";

export default function Layout() {
  const { apiData } = useFetch();
  const [showTime, setShowTime] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  const { display, myFavouities } = useContext(AppContext);

  const selectOption = (value) => {
    setShowTime(value);
  };

  const Search = () => {
    setShowTime(searchValue === "todos" ? "all" : "favoritos");
  };

  const newOptions = () => {
    Search();
  };

  return (
    <main className="flex flex-col md:flex-row p-7">
      <div className="flex flex-col md:flex-row flex-wrap ">
        <div className="self-start lg:mb-2 lg:mt-2 w-full">
          <legend className="text-2xl lg:text-5xl font-bold my-4 lg:my-7">
            Tiny Galery
          </legend>
          <label className="relative">
            <input
              type="text"
              placeholder="⌕ Busca categoria todos/favoritos"
              value={searchValue}
              onKeyDown={newOptions}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full px-2 lg:px-4 py-2 border-1 border-current rounded"
            />
          </label>
          <select
            onChange={(e) => selectOption(e.target.value)}
            id="opcao"
            name="opcao"
            className="mt-4"
          >
            <option value="" disabled>
              Filtro
            </option>
            <option value="all">Todos</option>
            <option value="favoritos">Favoritos</option>
          </select>
        </div>

        <section className="grid grid-cols-1  md:grid-cols-3 xl:grid-cols-4 gap-7 mt-7  md:gap-3">
          {showTime === "all" ? (
            <>
              {apiData.map((item) => {
                return (
                  <Card
                    key={item.id}
                    id={item.id}
                    author={item.author}
                    url={item.download_url}
                  />
                );
              })}
            </>
          ) : (
            <>
              {myFavouities.map((item) => {
                return (
                  <Card
                    key={item.id}
                    id={item.id}
                    author={item.author}
                    url={item.download_url}
                  />
                );
              })}
            </>
          )}

          <div className="flex lg:hidden">
            {display.map((item) => {
              return (
                <PhotoDisplay
                  key={item.id}
                  id={item.id}
                  author={item.author}
                  url={item.download_url}
                  width={item.width}
                />
              );
            })}
          </div>
        </section>
      </div>
      <section className="hidden lg:flex ml-2.5">
        {display.map((item) => {
          return (
            <PhotoDisplay
              key={item.id}
              id={item.id}
              author={item.author}
              url={item.download_url}
              width={item.width}
            />
          );
        })}
      </section>
    </main>
  );
}
