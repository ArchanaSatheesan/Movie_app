import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Addmovie = (props) => {

  var navigate=useNavigate();
  var[inp,setInp]=useState(props.data);
    console.log("props data",props.data);
   console.log("props method",props.method);
//   const [inp,setInp]=useState({MovieName:"",
  
//  language:"",
//  actor:"",
//  actress:"",
//  director:"",
//  producer:"",
//  camera:"",
   
//   year:""})

  const inputHandler=(e)=>{
    const {name,value}=e.target;
    setInp((inp)=>({...inp,[name]:value}));
    console.log(inp)
 }
  const readHandler=()=>{
   console.log("clicked");
   axios.post("https://localhost:3008/addmovies",inp)
   .then((response)=>{
     alert("data added");
     navigate('/viewmovies');
   })
   .catch(err=>console.log(err))
  }




  return (
    <div>
        <form>
            <TextField variant='standard' label="Movie Name"  name="MovieName"  value={inp.MovieName} onChange={inputHandler}/><br></br>
            <TextField variant='standard' label="Language" value={inp.language} name="language" onChange={inputHandler}/><br></br>
            <TextField variant='standard' label="Actor" value={inp.actor} name="actor" onChange={inputHandler}/><br></br>
            <TextField variant='standard' label="Actress" value={inp.actress} name="actress" onChange={inputHandler}/><br></br>
            <TextField variant='standard' label="Director" value={inp.director} name="director" onChange={inputHandler}/><br></br>
            <TextField variant='standard' label="ReleaseYear" value={inp.producer} name="producer" onChange={inputHandler}/><br></br>
            <TextField variant='standard' label="Producer" value={inp.camera} name="camera" onChange={inputHandler}/><br></br>
            <TextField variant='standard' label="Cameraman" value={inp.year} name="year" onChange={inputHandler}/><br></br><br></br><br></br>
            
            
        </form>
        <Button variant='contained' color='secondary' onClick={readHandler}>ADD MOVIE</Button>
    
    </div>
  )
}

export default Addmovie