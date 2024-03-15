import {TextField, Button, Box} from '@mui/material'
import { useState } from 'react'
import axios from 'axios'

const EditTask = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    duration: "",
    language: "",
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
   
     const task = await axios.put(`http://localhost:3000/tasks/${formData.id}`,formData)
    
     
   } catch (err) {
     console.log("Somthing Is Wrong")
   }
  }

  return (
    <>
      <Box component="form" sx={{ p: 3 }} noValidate id="resume-form" onSubmit={handleSubmit}>
        <TextField id="id" name="id" value={formData.id} required fullWidth margin='normal' label='id' onChange={handleChange} />
        <TextField id="name" name="name" value={formData.name} required fullWidth margin='normal' label='Name' onChange={handleChange} />
        <TextField id="duration" name="duration" value={formData.duration} required fullWidth margin='normal' label='duration' onChange={handleChange} />
        <TextField id="language" name="language" value={formData.language} required fullWidth margin='normal' label='language' onChange={handleChange} />
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} color="error">Edit </Button>

      </Box>
    </>
  )
}

export default EditTask
