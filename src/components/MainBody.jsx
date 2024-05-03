import Button from 'react-bootstrap/Button';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';



function MainBody() {
  return (
    <div>
    
        <Navbar className="transparent-bg">
      <Container>
        <Navbar.Brand href="#home"><b>CheckYourQuotes.com</b></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           A <a href="#login">Jikku Vijay</a> initiative
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className='container d-flex justify-content-center '>

        <div className='col-6 mt-5'>
        <img className='rounded' src='https://img.freepik.com/free-photo/group-happy-people-jumping-mountain-sunset_1150-7353.jpg?t=st=1714746001~exp=1714749601~hmac=07358202b471de8afba797a30ba35df1ff23542a1469a5ce006bf732de286cb6&w=996' width='100%'></img>

        </div>

        <div className='col-6 mt-5 ms-5 '>
            <h1>Hey Buddy!</h1>
            <p className='mt-3'>Everything will be alright! Check some quotes, it will make you calm. Remember you are not alone!</p>
            <Link to={'/quoteGenerator'} className='btn btn-success' variant="success">Check some Quotes</Link>

            <h2 className='mt-5'>Help is available!</h2>
            <p>Speak to someone today!</p>

            <h3 className='mt-2'>iCALL</h3>
            <p> Hours: Mon—Sat, 10 AM—8 PM. Languages: English, Hindi, Marathi, Gujarati, Bengali, Assamese, Punjabi, and Malayalam</p>

                <h2>9152987821</h2>

        </div>

        

    </div>

    <MDBFooter className='bg-light text-center text-white fixed-bottom'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default MainBody