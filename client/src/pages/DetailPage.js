import React, {useCallback, useContext, useEffect, useState} from "react"
import {useParams} from "react-router-dom";
import {useHttp} from "../hooks/http.hooks";
import {AuthContext} from "../context/AuthContext";
import {Box, CircularProgress} from "@mui/material";
import {LinkCard} from "../components/LinkCard";

export const DetailPage = () => {
    const [link, setLink] = useState(null )
    const linkId = useParams().id
    const {token} = useContext(AuthContext)
    const { request, loading} = useHttp()
    const getLink = useCallback(async ()=>{
        try {
            const fetched = await request(`/api/link/${linkId}`,
                'GET',
                null,
                {Authorization: `Bearer ${token}`}
        )
            setLink(fetched)
        }catch (e){

        }
    }, [token, linkId, request])

    useEffect(()=>{
        getLink()
    }, [])

    if(loading){
        return (
            <Box style={{ display: 'flex', flexDirection:'column', alignItems:'center', marginTop:40}}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <div style={{ display: 'flex', flexDirection:'column', alignItems:'center'}}>
            {!loading && link && <LinkCard link={link}/>}
        </div>
    )
}
