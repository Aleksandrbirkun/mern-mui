import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { CreatePage } from './pages/CreatePage'
import { LinksPage } from './pages/LinksPage'

export const routes = isAuthenticated => {
    if(isAuthenticated){
        return(
            <Switch>
                <Route path='/links'>
                    <LinksPage></LinksPage>
                </Route>
                <Route path='/create'>
                    <CreatePage></CreatePage>
                </Route>
                <Route path='/details'>
                    <DetailPage
                </Route>
            </Switch>
        )
    }
    return (
        <Switch>

        </Switch>
    )
}