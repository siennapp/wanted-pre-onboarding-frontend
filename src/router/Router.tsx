import React from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import NotFound from "../pages/notFound";
import SignIn from "../pages/sign/SignIn";
import SignUp from "../pages/sign/SignUp";
import Todo from "../pages/todo";


function Router() {
    const ProtectedRoute = ({redirectPath}:{redirectPath: string}) => {
        const isAuth = localStorage.getItem("accessToken") !== null;
        return isAuth ? <Outlet />: <Navigate to={redirectPath} replace />;
    };
    const AuthRoute = ({redirectPath}:{redirectPath: string}) => {
        const isAuth = localStorage.getItem("accessToken") !== null;
        return isAuth ? <Navigate to={redirectPath} replace /> : <Outlet />;
    };
    const HomeRoute = () => {
        const isAuth = localStorage.getItem("accessToken") !== null;
        return isAuth ? <Navigate to={'/todo'} replace /> : <Navigate to={'/signin'} replace />;
    }
   return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeRoute />}/>
            <Route element={<ProtectedRoute redirectPath="/signin" />}>
                <Route path="/todo" element={ <Todo />} /> 
            </Route>
            <Route element={<AuthRoute redirectPath="/todo" />}>
                 <Route path="/signin" element={ <SignIn/>} /> 
                 <Route path="/signup" element={ <SignUp/>} />
             </Route>
             <Route path='*' element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
   )
};

export default Router; 