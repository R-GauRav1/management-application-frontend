import { TextField,Button, Box} from '@mui/material'
import { useState } from 'react'
import axios from 'axios'

const DeleteTask = () => {

  const [id, setId] = useState('')


  const handleChange=(e)=>{
      setId(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
   
      const task = await axios.delete(`http://localhost:3000/tasks/${id}`)
     
      
    } catch (err) {
      console.log("Somthing Is Wrong")
    }

  }

  return (
    <>
       <Box component="form" sx={{ p: 3 }} noValidate id="resume-form" onSubmit={handleSubmit}>
        <TextField id="id" name="id" value={id} required fullWidth margin='normal' label='id' onChange={handleChange} />
        
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} color="error">Delete</Button>
       
      </Box>
    </>
  )
}

export default DeleteTask
