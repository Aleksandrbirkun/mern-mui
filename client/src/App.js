import React from "react"
import {useRoutes} from "./routes";
import {BrowserRouter} from 'react-router-dom'
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import NavBar from "./components/Navbar";
import {Box, CircularProgress} from "@mui/material";

function App() {
    const {token, logout, login, userId, ready } = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated )
    if(!ready){
         return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        );
    }
  return (
      <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated }}>
          <BrowserRouter>
              {isAuthenticated && <NavBar/>}
        <div>
            {routes}
        </div>
      </BrowserRouter>
      </AuthContext.Provider>
  )
}

export default App;
