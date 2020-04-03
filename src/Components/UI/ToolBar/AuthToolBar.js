import React from 'react';
import {Button, NavbarText} from "reactstrap";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../../store/actions/users";

const AuthToolBar = (
  {username}
) => {
  const dispatch = useDispatch();

  const logout = () => dispatch(logoutUser());
  return (
    <>
      <NavbarText>Hello <b>{username}</b>!</NavbarText>
      <Button className='ml-3' color='danger' onClick={logout}>LOGOUT</Button>
    </>
  );
};

export default AuthToolBar;