import React, { useState } from 'react'
import AddMod from './AddMod'

const Navbar = ({setnewmovie,newmovie,addmovie,setpage,setsearch}) => {
    
    const [showadd, setshowadd] = useState(false)
  return (

<div className='nav'>
    {showadd?<AddMod setnewmovie={setnewmovie} addmovie={addmovie} setshowadd={setshowadd} newmovie={newmovie} />:null}
      <h1>Logo</h1>
      <ul>
        <li>Search:<input type="text" onChange={(e)=>setsearch(e.target.value)}  /></li>
        <li onClick={()=>setpage(0)} >Logout</li>
        <li onClick={()=>setshowadd(true)}>Add Movie</li>
      </ul>
    </div>
  )
}

export default Navbar
