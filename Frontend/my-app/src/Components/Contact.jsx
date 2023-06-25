import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <Typography variant='h5' color='GrayText'>Contact Form</Typography><br></br><br></br>
      <form>
        <TextField varient="outlined" label="Name"/><br></br><br></br>
        <TextField varient="outlined" label="Email Id"/><br></br><br></br>
        <TextField varient="outlined" label="Mobile Number"/>
        <br></br><br></br>
      </form>
      <Button variant='contained' color='secondary'>Submit</Button>
    </div>
  )
}

export default Contact