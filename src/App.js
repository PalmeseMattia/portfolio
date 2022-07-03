import React from 'react'
import { Button, Container, Navbar, Stack, Card } from 'react-bootstrap'
import './App.css'
import Logo from './assets/logo.png'
import Emoji from './assets/emoji.png'

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
      <div className='main--content'>
        <h3 className=' display-4 ms-2 me-2 mt-3 text-justify'>Hi, I’m <span className='main--fullname'>Palmese Davide Mattia</span>, a web developer from Italy.</h3>
        <img src={Emoji}/>
      </div>

      <h1 className='text-secondary display-6 ms-2'>Tech i'm currently learning or using:</h1>
      <Container>
        <Stack>
          <Card>
            ok
          </Card>
        </Stack>
      </Container>
    </div>
    
  )
}
