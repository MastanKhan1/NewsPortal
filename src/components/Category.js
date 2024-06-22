import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom';
import useCategoryData from '../utils/useCategoryData';
import NewsCard from './NewsCard';
import CategoryCard from './CategoryCard';


const Category = ()=>{
    const {category} = useParams();
    const categoryData = useCategoryData(category);
    
   console.log(categoryData);
    return (categoryData === null) ? <Shimmer/> :  (
        <>
        <div className='py-5 px-20 grid grid-cols-3 gap-x-4 gap-y-8 justify-items-center'>
        {
             categoryData?.map(card=>{
                return(
                    <CategoryCard {...card} key={card.publishedAt}/>
                )
            })
        }
        </div>
        
        </>
    )
}


export default Category;