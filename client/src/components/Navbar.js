import React, {useContext} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {NavLink, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {Button} from "@mui/material";



const NavBar = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    const logoutHandler = (event) => {
        event.preventDefault()
        auth.logout()
        navigate('/')
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, flex:'auto' }}
                    >
                        Сокращение ссылок
                    </Typography>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button style={{margin:4}} variant={"contained"} color={"warning"}><NavLink style={{ textDecoration: 'none', color:'#002779' }} to={'/create'}>Создать</NavLink></Button>
                        <Button style={{margin:4}} variant={"contained"} color={"warning"}><NavLink style={{ textDecoration: 'none', color:'#002779' }} to={'/links'}>Список</NavLink></Button>
                        <Button style={{margin:4}} variant={"contained"} color={"warning"}><a style={{ textDecoration: 'none', color:'#002779' }}  href={'/ '} onClick={logoutHandler}>Выйти</a></Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
