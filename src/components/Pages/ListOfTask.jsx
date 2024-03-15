import {
  Grid, Table, TableBody,TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const ListOfTask = () => {
const [ task, setTask] = useState([])

useEffect(()=>{
  getAllTask()
},[])

async function getAllTask(){
  try {
    const task = await axios.get("http://localhost:3000/tasks")
    console.log(task.data)
    setTask(task.data)
  } catch (err) {
    console.log("Somthing Is Wrong")
  }
}
  return (
    <>
      
      <Grid>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">id</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Duration</TableCell>
                  <TableCell align="center">Language</TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  task.map((task,i)=>{
                    return(
                      <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center">{task.id}</TableCell>
                  <TableCell align="center">{task.name}</TableCell>
                  <TableCell align="center">{task.duration}</TableCell>
                  <TableCell align="center">{task.language}</TableCell>
                  </TableRow>
                    )
                  })
                }
                
              </TableBody>
            </Table>
          </TableContainer>
      </Grid>
    </>
  )
}

export default ListOfTask
