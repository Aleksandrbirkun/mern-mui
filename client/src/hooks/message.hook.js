import React, {useCallback } from 'react'
import {Alert} from "@mui/material";

export const useMessage =  () => {
    return useCallback((text) =>{
        if (text){
           return true
        }
    }, [])
}