import { Button, TextField } from '@mui/material'
import React from 'react'
import { Form } from 'react-router-dom'

const Addmovie = () => {
  return (
    <div>
        <form>
            <TextField variant='standard' label="Movie"/>&nbsp;
            <TextField variant='standard' label="Language"/>&nbsp;
            <TextField variant='standard' label="Actor"/>&nbsp;
            <TextField variant='standard' label="Actress"/>&nbsp;
            <TextField variant='standard' label="Director"/>&nbsp;
            <TextField variant='standard' label="ReleaseYear"/>&nbsp;
            <TextField variant='standard' label="Producer"/>&nbsp;
            <TextField variant='standard' label="Cameraman"/>&nbsp;<br></br><br></br>
            
            
        </form>
        <Button variant='contained' color='secondary'>ADD</Button>
    
    </div>
  )
}

export default Addmovie