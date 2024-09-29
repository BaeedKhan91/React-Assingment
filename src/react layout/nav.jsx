import React from 'react'
import { Link } from 'react-router-dom'

function nav() {
  return (
    <div className='nav-main' style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '50px',
        backgroundColor: '#333',
        display: 'flex',
        justifyContent: 'flex-end',
        // gap:"5%",
        alignItems: 'center',
        color:"white"
    }}>
        <div style={{
            marginRight:"20%",
            fontSize:"18px",
            
        }}>
        <Link to="/" style={{
            color: 'white',
            marginRight:"50%",
            textDecoration:"none"
        }}>Home</Link>
        <Link to="/login" style={{
            color: 'white',
            textDecoration:"none"

        }}>Login</Link>
        </div>
    </div>
  )
}

export default nav