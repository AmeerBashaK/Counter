import { Box, Button, Container, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';


function App() {
  const [counter, setCounter] = useState(0)
  const  handleIncrement = () => setCounter(counter+1);
  const  handleIDecrement = () => setCounter(counter-1);
  return (
<>
<Container
sx={{
  height:"100vh",
}}>
  <Box
  sx={{
    border:"2px solid",
    bordercolor:"black",
    borderRadius:"20px",
    backgroundColor:"brown",
    color:"white",
    margin:"33vh 33vh",
    width:"33vw",
    height:"33vh",
    textAlign:"center",
    padding:"20px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around"

  }}
  >
  <Typography variant="h1" gutterBottom>
        {counter}
  </Typography>


    <Stack direction={'row'} spacing={25} justifyContent={'center'}  >
      {counter === 0 ? <></>:<Button sx={{ color:"white",background:"red",height:"45px",borderRadius:"10px",backgroundColor:'gray'}} onClick={ handleIDecrement} > <RemoveIcon /></Button>}
      <Button variant="contained" color="success" onClick={ handleIncrement} sx={{
        height:"45px",
        borderRadius:"10px",
        backgroundColor:"blue"
      }}> <AddIcon /> </Button>
    </Stack>



  </Box>
</Container>
</>
  );
}






export default App;
