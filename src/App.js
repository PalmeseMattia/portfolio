import React from 'react'
import { Button, Container, Navbar, Stack } from 'react-bootstrap'
import Logo from './assets/logo.png'

export default function App() {
  return (
    <div className='main--page'>
      {/* NAVBAR COMPONENT */}
      <Navbar bg='light'>
            <img 
              src={Logo}
              width="80"
              height="50"
              className="d-inline-block align-top ms-3"></img>
            <Button className='ms-auto me-3'>LET'S TALK</Button>
      </Navbar>

      {/* MAIN PAGE COMPONENT */}
      <Stack direction="horizontal">
        <h3>ciao</h3>
      </Stack>
    </div>
  )
}
