import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from '../context/AuthContext'
import {LinksList} from '../components/LinksList'
import {Box, CircularProgress} from "@mui/material";
import {useHttp} from "../hooks/http.hooks";

export const LinksPage = () => {
    const [links, setLinks] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLinks(fetched)
        } catch (e) {
        }
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    if (loading) {
        return (
            <Box style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40}}>
                <CircularProgress/>
            </Box>
        )
    }

    return (
        <>
            {!loading && <LinksList links={links}/>}
        </>
    )
}