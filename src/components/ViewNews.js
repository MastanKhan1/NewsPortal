import {useParams} from 'react-router-dom'
import useFilteredData from '../utils/useFilteredData';

const ViewNews = ()=>{
    const {name} = useParams();
    const news =  useFilteredData(name);
    console.log(news);
    return news===null ?<Shimmer/> : (
        <>
        
        <div className='px-25'>
            <div className='flex'>
                <div>
                <img className='w-2/5' src={news?.urlToImage}/>
                </div>
                <div>
                <h1>{news?.title}</h1>
                </div>
            </div>
            <p>{news?.content}</p>
            <i>{news?.author}</i>
        </div>
        </>
    )
}

export default ViewNews;