import React, {useState} from 'react'

const PasswordButton = () => {

    const [show,setShow]=useState(true)

    let handleShow = ()=>{
        setShow(prev=>!prev)
    }

  return (
    <div>
        <label>Password:</label>
        
        <input type={show?"password":"text"}/>
        <button onClick={handleShow}><i className={show?"fa-solid fa-eye":"fa-solid fa-eye-slash"}></i></button>


    </div>
  )
}

export default PasswordButton

