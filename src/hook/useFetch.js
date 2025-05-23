import { useState, useEffect } from "react";


export default function useFetch() {

      const [apiData, setApiData] = useState([]);
    
    
    useEffect(() => {
  async function FetchData() {
    try {
      const response = await fetch("https://picsum.photos/v2/list?page=2&limit=32");

      if (!response.ok) {
        throw new Error(`Erro na resposta: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        setApiData(data);
      } else {
        const texto = await response.text();
        console.warn("Resposta não é JSON:", texto);
        setApiData([]);
      }

    } catch (e) {
      console.error("Erro ao buscar dados:", e.message);
      setApiData([]);
    }
  }

  FetchData();
}, []);

    

      return {
        apiData
      }


}