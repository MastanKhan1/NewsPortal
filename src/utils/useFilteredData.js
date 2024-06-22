import useGetData from "./useGetData"

const useFilteredData = (searchData)=>{
    const newsData =  useGetData();
    var filteredData = newsData?.find(data=>{
        return data.source.name === searchData;
    })
    return filteredData;
}

export default useFilteredData;