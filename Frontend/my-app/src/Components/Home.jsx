import { TableBody, TableCell, TableContainer, TableHead, TableRow ,Table, Button} from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

 import Addmovie from './Addmovie';


const Home = () => {

  var [movies,setMovies]=useState([]);
  var [update,setUpdate]=useState(false);
  var[singleValue,setSingleValue]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3008/viewmovies")
    .then((response)=>{
      console.log(response.data)
      setMovies(response.data);
    })
  },[])
  var deleteValues=(id)=>{
    console.log(id);
    axios.delete("http://localhost:3008/deletemovies/"+id)
    .then((response)=>{
      alert("data deleted");
       window.location.reload(false);
    })
    .catch((err)=>console.log(err))

  }
  const updateValues=(value)=>{
     console.log("update clicked");
     setUpdate(true);
     setSingleValue(value);
   }
  
  var finalJSX= (<TableContainer>
  <Table>
    <TableHead>
      <TableRow>
      <TableCell>Movie Name</TableCell>
      <TableCell>Language</TableCell>
      <TableCell>Actor</TableCell>
      <TableCell>Actress</TableCell>
      <TableCell>Director</TableCell>
      <TableCell>Producer</TableCell>
      <TableCell>Cameraman</TableCell>
      <TableCell>Release Year</TableCell>
      <TableCell>Action</TableCell>
      </TableRow>
     
    </TableHead>
    <TableBody>
      {movies.map((val,i)=>{
        return(
          <TableRow key={i}>
          <TableCell>{val.MovieName}</TableCell>
          <TableCell>{val.language}</TableCell>
          <TableCell>{val.actor}</TableCell>
          <TableCell>{val.actress}</TableCell>
          <TableCell>{val.director}</TableCell>
          <TableCell>{val.producer}</TableCell>
          <TableCell>{val.camera}</TableCell>
          <TableCell>{val.year}</TableCell>
          <TableCell>
            <Button variant='contained' color='warning' onClick={()=>updateValues(val)}>EDIT</Button>
          </TableCell>
          <TableCell>
            <Button variant='contained' color='error' onClick={()=>deleteValues(val._id)}>Delete</Button>
          </TableCell>
      </TableRow>
        );
      })}
     
    </TableBody>
  </Table>
</TableContainer>);
if (update)finalJSX=<Addmovie data={singleValue} method='put'/>
return finalJSX;
};
 
export default Home