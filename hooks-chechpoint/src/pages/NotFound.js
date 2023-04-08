import  Alert  from 'react-bootstrap/Alert'
import React from 'react'
import  {Button}  from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const back=useNavigate()
  return (
    <>
    <Alert variant='danger'>
    <h1>Error 404.. !</h1>
    </Alert>

    <Button onClick={()=> back('/')} variant='success'  >Back Home</Button>
    </>
    )
}

export default NotFound