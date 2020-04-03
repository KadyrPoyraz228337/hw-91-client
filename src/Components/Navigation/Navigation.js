import React from 'react';
import ToolBar from "../UI/ToolBar/ToolBar";
import {Container, Navbar, NavbarBrand} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';


const Navigation = () => {
  return (
    <Navbar color="light" light expand="md" className='mb-4'>
      <Container>
        <NavbarBrand href="/" tag={RouterNavLink} to='/'>Chat</NavbarBrand>
        <ToolBar/>
      </Container>
    </Navbar>

  );
};

export default Navigation;