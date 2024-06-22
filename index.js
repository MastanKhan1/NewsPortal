import React, { Children } from "react";
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from './src/components/Body';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Category from "./src/components/Category";
import Shimmer from "./src/components/Shimmer";
import Error from "./src/components/Error";
import ViewNews from "./src/components/ViewNews";


const App = ()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}


const appRoute = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/category/:category",
                element : <Category/>
            },
            {
                path : "/news/:name",
                element : <ViewNews/>
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router ={appRoute}/>)