import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets1/logo.svg'
import navIcon1 from '../assets1/nav-icon1.svg'
import navicon2 from '../assets1/nav-icon2.svg'
import navIcon3 from '../assets1/nav-icon3.svg'

export const NavBar =() =>{
  const [activeLink,setActiveLink]=useState('home');
  const [scrolled,setScrolled] =useState(false);

  useState(()=>{ 
    const onScroll=() =>{
      if(window.scrollY>50){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
    window.addEventListener("scroll",onScroll);
    return ()=>window.removeEventListener("scroll",onScroll)
  },[])

  const onUpdateActiveLink =(value) =>{
    setActiveLink(value);
  }
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#link" className={activeLink==='link'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('link')}>Link</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
             <div className='social-icon'>
              <a href="#"><img src={navIcon1} alt=""></img></a>
              <a href="#"><img src={navicon2} alt=""></img></a>
              <a href="#"><img src={navIcon3} alt=""></img></a>
             </div>
             <button className="vvd" onClick={()=>console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}