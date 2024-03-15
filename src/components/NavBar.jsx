import React from 'react'
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
       <ul>
      <li><NavLink to="/add" style={({isActive})=>{return{backgroundColor: isActive ? 'red': ''}}}>Add A Task</NavLink></li>
      <li><NavLink to="/edit" style={({isActive})=>{return{backgroundColor: isActive ? 'red': ''}}}>Edit A Task</NavLink></li>
      <li><NavLink to="/list" style={({isActive})=>{return{backgroundColor: isActive ? 'red': ''}}}>List Of Task</NavLink></li>
      <li><NavLink to="/delete" style={({isActive})=>{return{backgroundColor: isActive ? 'red': ''}}}>Delete A Task</NavLink></li>
     
    </ul>
    </>
    
  )
}

export default NavBar
