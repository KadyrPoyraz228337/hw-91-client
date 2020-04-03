import React from 'react';
import {Button} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';

const NotAuthToolBar = () => {
  return (
    <>
      <div className='ml-auto'>
        <Button color='primary' tag={RouterNavLink} to='/login'>Login</Button>{' '}
        <Button color='primary' tag={RouterNavLink} to='/register'>Register</Button>
      </div>
    </>
  );
};

export default NotAuthToolBar;