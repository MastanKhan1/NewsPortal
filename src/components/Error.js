import {useRouteError} from 'react-router-dom';

const Error = ()=>{

    const error = useRouteError();
    console.log(error);
    return(
        <>
        <div className='py-20 text-center'>
            <h1 className='font-extrabold text-3xl'>Hello Dev,</h1>
            <p>you might have encountered an error.</p>
            <p>Sorry for our inconvenience.</p>
            <p>Please do check out what the error is!</p>
            <h3>{error.data}</h3>
            <h2>Status Code : {error.status}</h2>
            <p>Thank you.</p>
        </div>
        </>
    )
}


export default Error;