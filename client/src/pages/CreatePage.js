import React, { useContext, useState} from "react"
import {TextField} from "@mui/material";
import {useHttp} from "../hooks/http.hooks";
import {AuthContext} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const CreatePage = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = useState()
    const pressHandler = async (event) => {
        if(event.key === "Enter"){
            try {
                const data = await request(
                    '/api/link/generate',
                    'POST',
                    {from:link},
                    {Authorization: `Bearer ${auth.token}`}
                )

                navigate(`/detail/${data.link._id}`)
            }catch (e){

            }
        }
    }
    return (
        <>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                <h1 style={{marginBottom:50}}>Сократите ссылку</h1>
                <TextField onChange={e=>setLink(e.target.value)}
                           onKeyPress={pressHandler}
                           style={{width:'50%'}}
                           name={'link'}
                           type={'text'}
                           id="link"
                           label="Введите ссылку"
                           variant="standard" />
            </div>
        </>
    )
}
