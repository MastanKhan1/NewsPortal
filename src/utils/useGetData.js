import { useState, useEffect } from "react"

const useGetData = ()=>{

    const [newsData, setNewsData] = useState(null);

    const getNewsData = async ()=>{
        var url = 'https://newsapi.org/v2/everything?\q=keyword&apiKey=6db5934b73f349dc93098efb9f304388';
        const fetchedData = await fetch(url);
        const jsonData = await fetchedData.json();
        const requiredData = jsonData?.articles;
        setNewsData(requiredData);
    }

    useEffect(()=>{
        getNewsData();
    }, [])

    return newsData;
}


export default useGetData;