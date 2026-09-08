import { useState, useEffect } from "react";

function useFetch(url){
    const [datas, setDatas] = useState(null);
    const [loading, setLoading] = useState(false);

    async function FetchDdata(){
        try{
            setLoading(true);
            const response = await fetch(url);
            if(!response.ok){
                throw new Error(`Fetch Error ${response.status}`)
            }
            const result = await response.json();

            if(result){
                setDatas(result);
            }
        }catch(error){
            console.log("Error", error);
        }finally{
            setLoading(false);
        }
        
    }

    useEffect(()=>{
        FetchDdata();
    },[]);

    return [datas, loading];
}

export default useFetch;