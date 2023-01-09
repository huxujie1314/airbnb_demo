import Demo from "@/views/demo";
import React from "react";
import { Navigate } from "react-router-dom";

const Home = React.lazy(()=>import('@/views/home'));
const Entire = React.lazy(()=>import('@/views/entire'));
const Detail = React.lazy(()=>import('@/views/detail'));

const routes = [
    {
        path: "/",
        element: <Navigate to="/home"></Navigate>   // 重定向
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/entire",
        element: <Entire/>
    },
    {
        path: "/detail",
        element: <Detail/>
    },
    {
        path: "/demo",
        element: <Demo/>
    },
    {
        path: "*",
        element: <Navigate to="/home"></Navigate>
    },

];

export default routes;