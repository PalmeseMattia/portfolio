import React from 'react'
import { Button, Container, Navbar, Stack, Card } from 'react-bootstrap'
import './App.css'
import Logo from './assets/logo.png'
import Emoji from './assets/emoji.png'
import Ethereum from './assets/ethereum.png'
import ReactPic from './assets/react.png'

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

      <h1 className='text-secondary display-6 ms-2 mt-5'>Tech i'm currently learning or using:</h1>
      
      {/* SKILLS CONTAINER */}
      <Container className='d-flex justify-content-center'>
        <div className='cards--div'>
          <Card style={{width: '20rem'}}>
            <Card.Img variant='top' src={ReactPic}/>
            <Card.Title>React</Card.Title>
          </Card>

          <Card style={{width: '20rem'}}>
            <Card.Img variant='top' src={Ethereum}/>
            <Card.Title>Ethereum</Card.Title>
          </Card>
        </div>
      </Container>

      {/* PROJECTS COMPONENT */}
      <div className='projects--div'>
      <h1 className='text-white display-6 ms-2 mt-5'>My projects</h1>
      </div>
    </div>
    
  )
}
