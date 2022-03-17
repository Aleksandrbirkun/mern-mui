import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { CreatePage } from './pages/CreatePage'
import { LinksPage } from './pages/LinksPage'

export const routes = isAuthenticated => {
    if(isAuthenticated){
        return(
            <Switch>
                <Route>
                </Route>
            </Switch>
        )
    }
    return (
        <Switch>

        </Switch>
    )
}