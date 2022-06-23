import React, { useEffect, useState } from 'react'
import {Navigate, useParams} from 'react-router-dom'
import axios from 'axios'

const ConfirmEmail = () => {
    const {token} = useParams()
    const [message,setMessage] = useState(null)
    useEffect(()=>{
      
    (async()=>{
      setMessage(null)
      try {
        const result = await axios.get(`https://zilgya-api.herokuapp.com/auth/confirm/${token}`)
        const {message} = result.data
        setMessage(message)
      } catch (error) {
        setMessage(error.response ? error.response.data.err : error.message)
      }
    })()
    },[token])
    return <Navigate to={'/auth'} state={{message}}/>
 
}

export default ConfirmEmail