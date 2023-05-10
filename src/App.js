import React, { useEffect, useState } from 'react'
import './styles/App.css'
import {
    BrowserRouter,
} from "react-router-dom";
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './AppRouter';
import { AuthContext } from './context/index'
import localforage from 'localforage';

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localforage.getItem('auth')) {
            setIsAuth(true);
        }
    }, [])

    return (
        <div id="App">
            <AuthContext.Provider
                value={{
                    isAuth,
                    setIsAuth
                }}
            >
                <BrowserRouter>
                    <Navbar/>
                    <AppRouter/>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
