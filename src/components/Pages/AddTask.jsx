import {
   TextField, Button, Box} from '@mui/material'
import { useState } from 'react'
import axios from 'axios'

const AddTask = () => {
  const [formData, setFormData] = useState({
    name: "",
    duration: "",
    language: "",
  })


  const handleChange=(e)=>{
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]:value
    })
  }
   const handleSubmit = async(e) => {
     e.preventDefault()
     try {
     
      const task = await axios.post("http://localhost:3000/tasks",formData)
      // console.log(task.data)
      
    } catch (err) {
      console.log("Somthing Is Wrong")
    }
  }

  return (
    <>
      <h1>Add task</h1>
      <Box component="form" sx={{ p: 3 }} noValidate id="resume-form" onSubmit={handleSubmit}>
        <TextField id="name" name="name" value={formData.name} required fullWidth margin='normal' label='Name' onChange={handleChange} />
        <TextField id="duration" name="duration" value={formData.duration} required fullWidth margin='normal' label='duration' onChange={handleChange} />
        <TextField id="language" name="language" value={formData.language} required fullWidth margin='normal' label='language' onChange={handleChange} />
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} color="error">Add</Button>
       
      </Box>
    </>
  )
}

export default AddTask
