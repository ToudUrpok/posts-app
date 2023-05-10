import React, { useContext } from 'react';
import About from './pages/About'
import Posts from './pages/Posts'
import PostView from './pages/PostView';
import Login from './pages/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context';

const privateRoutes = [
    { path: '/about', element: <About />, exact: true},
    { path: '/posts', element: <Posts />, exact: true},
    { path: '/post/:id', element: <PostView />, exact: true},
    { path: '/*', element: <Navigate to="/posts" replace />, exact: true}
]

const publicRoutes = [
    { path: '/login', element: <Login />, exact: true},
    { path: '/*', element: <Navigate to="/login" replace />, exact:true}
]

const AppRouter = () => {
    const { isAuth } = useContext(AuthContext);

    return (
        isAuth ?
        <Routes>
            {
                privateRoutes.map(route =>
                    <Route 
                        path={route.path} 
                        element={route.element} 
                        exact={route.exact}
                        key={route.path} 
                    />    
                )   
            }
        </Routes>
        :
        <Routes>
            {
                publicRoutes.map(route =>
                    <Route 
                        path={route.path} 
                        element={route.element} 
                        exact={route.exact}
                        key={route.path} 
                    />    
                )
            }
        </Routes>
    )
}

export default AppRouter;