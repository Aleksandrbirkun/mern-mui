import React from 'react'
import {Switch, routes} from 'react-router-dom'

export const routes = isAuthenticated => {
    if(isAuthenticated){
        return(
            <Switch>

            </Switch>
        )
    }
    return (
        <Switch>

        </Switch>
    )
}