import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const useFetch = (url) => {
    const [state, setState]=useState([])
    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setState(res.data)
        })
    },[url])
  return [state]
}
