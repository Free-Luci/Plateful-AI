import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import { createRoot } from "react-dom/client";
import Header from './src/utils/Header';
import Footer from './src/utils/Footer';
import { useSelector } from 'react-redux';
function Main(){
    const isDark = useSelector((state)=>state.isDark.isDark);
    useEffect(() => {
        document.body.className = isDark ? 'bg-gray-900' : 'bg-white';
    }, [isDark]);
    return(
        <>
        <div className={`${isDark?'bg-gray-900':'bg-white'} min-h-screen`}>
         <Header/>
         <Outlet/>
         <Footer/>
        </div>
        </>
    );
}
export default Main;