import {
  Grid, Typography, Box, Table, TableBody,TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material'
import NavBar from './NavBar'
import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const Home = () => {
  const [task, setTask] = useState([])
  useEffect(() => {
    getAllTask()
  }, [])

  async function getAllTask() {
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
      <Box display="flex" justifyContent="center" sx={{ backgroundColor: 'error.light', padding: 2 }}>
        <Typography variant='h2' component='div' sx={{ fontWeight: 'bold', color: 'white' }}>Task Management Application</Typography>
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={5}>
          <NavBar />
        </Grid>
        <Grid item xs={7}>
          <Box display="flex" justifyContent='center' sx={{
            backgroundColor: 'info.light', padding: 1
          }}>
            <Typography variant='h5' component='div' sx={{
              fontWeight: "bold", color: 'white'
            }} >
              List Of Tasks
            </Typography>
          </Box>
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
                  task.map((task, i) => {
                    return (
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
      </Grid >
    </>
  )
}

export default Home
