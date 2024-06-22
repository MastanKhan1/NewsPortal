import {Link} from 'react-router-dom';

const NewsCard = ({author, title, urlToImage, content, source})=>{

    return(
        <Link to={`/news/${source.name}`}>
            <div className="grid grid-rows-2 w-full h-full justify-items-center rounded-xl shadow-lg">
                <div className=" pb-2">
                    <img src={urlToImage} className='rounded-xl'/>
                </div>
                <div className="px-3">
                    <h2 className="font-bold">{title}</h2>
                    <p>{content.slice(0,75)}...</p>
                    <p className='font-semibold pt-2'><i>{author}</i></p>
               </div>
            </div>
        </Link>
    )
}

export default NewsCard;