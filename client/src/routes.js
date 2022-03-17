import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { CreatePage } from './pages/CreatePage'
import { LinksPage } from './pages/LinksPage'
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";

export function useRoutes (isAuthenticated) {
    if(isAuthenticated){
        return(
            <Routes>
                <Route path='/links' element={<LinksPage/>}  exact/>
                <Route path='/create' element={<CreatePage/>}  exact/>
                <Route path='/detail/:id' element={<DetailPage/>}  exact/>
                <Route
                    path="*"
                    element={<Navigate to="/create" />}
                />
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path='/auth' element={<AuthPage/>}  exact/>
                <Route
                    path="*"
                    element={<Navigate to="/auth" />}
                />
            </Routes>
        )
    }
}

