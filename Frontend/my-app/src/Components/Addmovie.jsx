import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Addmovie = (props) => {

  var navigate=useNavigate();
  
  console.log("props data",props.data);
  console.log("props method",props.method);
  
  var[inp,setInp]=useState(props.data);
  const inputHandler=(e)=>{
     const {name,value}=e.target;
     setInp((inp)=>({...inp,[name]:value}));
     console.log(inp)
  }
   const readHandler=()=>{
    console.log("clicked");
    if(props.method==='post'){
    axios.post("http://localhost:3008/addmovies",inp)
    .then((response)=>{
      alert("data added");
      navigate('/');
    })
    .catch((err)=>console.log(err));
   };
   if(props.method==='put'){
    axios.put("http://localhost:3008/edit/"+inp._id,inp)
    .then((response)=>{
      alert('updated');
      window.location.reload(false)
    })
   }
  }
  return (
    <div style={{paddingTop:'80px'}}>
      <TextField name='MovieName' value={inp.MovieName} label="Moviename" onChange={inputHandler}/>&nbsp;
      <TextField name='language' value={inp.language}  label="language" onChange={inputHandler}/><br></br><br></br>
      <TextField name='actor' value={inp.actor}  label="actor" onChange={inputHandler}/>&nbsp;
      <TextField name='actress' value={inp.actress} label="actress" onChange={inputHandler}/><br></br><br></br>
      <TextField name='director' value={inp.director} label="director" onChange={inputHandler}/>&nbsp;
      <TextField name='producer' value={inp.producer}  label="producer" onChange={inputHandler}/><br></br><br></br>
      <TextField name='camera' value={inp.camera} label="cameraman" onChange={inputHandler}/>&nbsp;
      <TextField name='year' value={inp.year} label="release year" onChange={inputHandler}/><br></br><br></br><br></br>
      <Button variant='contained' color="success" onClick={readHandler}>SUBMIT</Button>
    </div>
  )
}

export default Addmovie