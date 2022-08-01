import React from 'react'
import { Button, Container, Navbar, Card } from 'react-bootstrap'
import './App.css'
import Logo from './assets/logo.png'
import Emoji from './assets/emoji.png'
import Next from './assets/next.png'
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

      {/* ABOUT ME SECTION */}
      <div className='main--aboutme'>
        <h1 className='text-secondary display-6 ms-2 mt-5'>About me:</h1>
        <h5 className='m-1'>
          Hi, my name is Palmese Davide Mattia and i'm a web developer from Italy 🇮🇹.<br/>
          My passion started in 2015 thanks to my Programming teacher in high school and the famous tv series Mr. Robot 🤖.<br/>
          I worked as a freelancer and now i'm looking for a full time job. Please go ahead and look at my portfolio
        </h5>
      </div>


      
      {/* SKILLS CONTAINER */}
      <h1 className='text-secondary display-6 ms-2 mt-5'>Tech i'm currently learning or using:</h1>
      <Container className='d-flex justify-content-center'>
        <div className='cards--div'>
          <img src={ReactPic} width={300}/>
          <img src={Next} width={300}/>
        </div>
      </Container>

      {/* PROJECTS COMPONENT */}
      <div className='second--page'>
        <h1 className='display-6 ms-2 mt-5'>My projects</h1>
        <div className='projects--div'>
          
          <Card>
            <Card.Title>
              Narcissus
            </Card.Title>
          </Card>
        </div>
      </div>
    
    </div>
    
  )
}
