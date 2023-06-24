import { TableBody, TableCell, TableContainer, TableHead, TableRow ,Table, Button} from '@mui/material'
import React from 'react'


const Home = () => {
  return (
    
       <Table>
         <TableContainer>
           <TableHead>
             <TableCell>Movie</TableCell>
             <TableCell>Language</TableCell>
             <TableCell>Actor</TableCell>
             <TableCell>Actress</TableCell>
             <TableCell>Director</TableCell>
             <TableCell>Producer</TableCell>
            <TableCell>Cameraman</TableCell>
             <TableCell>RelaeseYear</TableCell>
             <TableCell>Action</TableCell>
          </TableHead>

          
            <TableBody>
              <TableRow>

              <TableCell></TableCell>
             <Button variant='contained' color='warning'>EDIT</Button>&nbsp;
             <Button variant='contained' color='error'>DELETE</Button>
             
             </TableRow>
            </TableBody>

          
        </TableContainer>
        
       </Table>

      
  )
}
 
export default Home