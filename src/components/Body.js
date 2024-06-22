import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import NewsCard from './NewsCard';
import useGetData from "../utils/useGetData";




const Body = ()=>{


    const newsData = useGetData();
    
    return (newsData === null) ? <Shimmer/> :  (
        <>
        <div className='py-5 px-20 grid grid-cols-4 gap-x-4 gap-y-8 justify-items-center'>
        {
             newsData?.map(card=>{
                return(
                    <NewsCard {...card} key={card.publishedAt}/>
                )
            })
        }
        </div>
        
        </>
    )
}

export default Body;