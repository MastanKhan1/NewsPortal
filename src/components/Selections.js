import {Link} from 'react-router-dom';

const Selections = ()=>{
    return(
        <>
        <div className='px-72 pt-2 pb-2 mb-4 shadow-sm'>
            <div className='flex justify-evenly'>
                <div>
                    <Link to="/" className='font-bold'>Home</Link>
                </div>
                <div>
                    <Link to="category/sports" className='font-bold'>Sports</Link>
                </div>
                <div>
                    <Link to="category/business" className='font-bold'>Business</Link>
                </div>
                <div>
                    <Link to="category/travel" className='font-bold'>Travel</Link>
                </div>
                <div>
                    <Link to="category/technology" className='font-bold'>Technology</Link>
                </div>
                <div>
                    <Link to="category/health" className='font-bold'>Health</Link>
                </div>
                <div>
                    <Link to="/category/entertainment" className='font-bold'>Entertainment</Link>
                </div>
            </div>
        </div>
        </>
    )
}


export default Selections;