import React, { useState } from 'react'
import AddMod from './AddMod'
import { useNavigate } from 'react-router-dom'

const Navbar = ({setnewmovie,newmovie,addmovie,setpage,setsearch}) => {
     const navigate=useNavigate()
    const [showadd, setshowadd] = useState(false)
  return (

<div className='nav'>
    {showadd?<AddMod setnewmovie={setnewmovie} addmovie={addmovie} setshowadd={setshowadd} newmovie={newmovie} />:null}
      <h1>Logo</h1>
      <ul>
        <li>Search:<input type="text" onChange={(e)=>setsearch(e.target.value)}  /></li>
        <li onClick={()=>navigate('/')} >Logout</li>
        <li onClick={()=>setshowadd(true)}>Add Movie</li>
      </ul>
    </div>
  )
}

export default Navbar
