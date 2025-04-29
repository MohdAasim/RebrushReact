import React from 'react'
import {useRouteError} from "react-router"

const Error = () => {
    const err=useRouteError();
  return (
    <div><h1>OOPs!!!</h1>
    <h2>Something went wrong</h2>
    <h3>{err.status}</h3>
    </div>
  
  )
}

export default Error