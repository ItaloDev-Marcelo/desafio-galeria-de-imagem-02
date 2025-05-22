import { useState, useEffect } from "react";


export default function useFetch() {

      const [apiData, setApiData] = useState([]);
    
    
      useEffect(() => {
        async function FetchData() {
          try {
            const response = await fetch("/api/v2/list");
            const data = await response.json();
            if (!data) throw new Error("Data lost")
            if(data) { 
            setApiData(data);
            }
          } catch (e) {
            console.log(e);
             setApiData([]);
          }
        }
        FetchData();
      }, []);
    

      return {
        apiData
      }


}