import React, {useContext, useEffect, useState} from "react"
import {Alert, Box, Button, Card, CardContent, TextField, Typography} from "@mui/material";
import {useHttp} from "../hooks/http.hooks";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email:'', password:''
    })
    const [resMessage, setResMessage] = useState(null)
     const changeHandler = event => {
         setForm({...form, [event.target.name]: event.target.value})
     }


     const registerHandler  = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            setResMessage(data.message)
        }catch(e){}
     }

    const loginHandler  = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId )
        }catch(e){}
    }

    useEffect(() => {
        setTimeout(clearError, 5000)
        setTimeout(()=> {setResMessage(null)},5000)
    }, [error,resMessage])

    return (
        <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
            <h1 style={{marginBottom:70}}>Сократите ссылку</h1>
            <Box sx={{ width: 375 }}>
                <Card variant="elevation" sx={{backgroundColor: '#c5daea'}}>
                    <React.Fragment>
                        <CardContent style={{display:"flex", flexDirection:"column"}}>
                            <Typography marginBottom={8} fontWeight={"bold"} fontSize={"large"} color="primary" >
                                Авторизация
                            </Typography>
                            <TextField onChange={changeHandler} name={'email'} type={'email'}  style={{marginBottom:10}} id="email" label="Введите email" variant="standard" />
                            <TextField onChange={changeHandler} name={'password'} type={'password'} style={{marginBottom:40}} id="password" label="Введите пароль" variant="standard" />
                            <div >
                            <Button onClick={loginHandler} disabled={loading} style={{marginRight:4}} variant={"contained"} color={"primary"} size={"medium"}>Войти</Button>
                            <Button onClick={registerHandler} disabled={loading} variant={"contained"} color={"warning"} size={"medium"}>Регистрация</Button>
                            </div>
                        </CardContent>
                    </React.Fragment>
                </Card>
            </Box>
            {resMessage && <Alert style={{position:"absolute", right:10}} severity="success">{resMessage}</Alert>}
            {error && <Alert style={{position:"absolute", right:10}} severity="error">{error}</Alert>}
        </div>
    )
}