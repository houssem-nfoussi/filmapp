import React from 'react'

const Modal = ({el,setshow_modal}) => {
  return (
    <div className="modal">
        <div className="box">
            <button onClick={()=>setshow_modal(false)}>X</button>
            <h1>{el.name}</h1>
            <p>{el.description}</p>
            <h1>{el.rate}</h1>

        </div>
      
    </div>
  )
}

export default Modal 

