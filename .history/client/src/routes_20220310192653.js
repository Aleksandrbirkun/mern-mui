import React from 'react'
import {Switch, Route} from 'react-router-dom'

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