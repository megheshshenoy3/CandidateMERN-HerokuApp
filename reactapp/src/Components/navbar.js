import React,{useEffect} from 'react'
import './navbar.css'
import {Link,NavLink, BrowserRouter as Router} from 'react-router-dom'
import{Navbar,Nav,NavDropdown,Form,FormControl,Button,NavItem} from 'react-bootstrap'
import terralogicsvg from '../images/terralogic.svg';

const myComponent=React.memo(function Navbarsfunc(props) {
  useEffect(() => {
    
  }, [])
    return (
      
      
        <div id="navbar" >
           <Navbar   bg="light" expand="lg" sticky="top">
       <Navbar.Brand href="#home">
       <Navbar.Brand href="#home"></Navbar.Brand><img src={terralogicsvg} class="navbar_properties" alt="Kiwi standingzzzzz"/>
       </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="mr-auto">
        <Nav.Link as={Link} to="/candidatetable" className="navbar_text navbartext_links">Candidates </Nav.Link>
     <Nav.Link  as={Link} to="/addingnew" className="navbar_text gapbetween_links" >Add&nbsp;New</Nav.Link>
     <Nav.Link  as={Link}  to="/about"className="navbar_text gapbetween_links">About</Nav.Link>
  
      </Nav>
  </Navbar.Collapse>
</Navbar> 
        </div>
        
    )
});
export default myComponent;
