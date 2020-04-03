import React from 'react';
import NotAuthToolBar from "./NotAuthToolBar";
import {Nav} from "reactstrap";
import {useSelector} from "react-redux";
import AuthToolBar from "./AuthToolBar";

const ToolBar = () => {
  const user = useSelector(state => state.users.user);
  return (
    <Nav className="ml-auto" navbar>
      {user ?
        <AuthToolBar username={user.username}/> :
        <NotAuthToolBar/>}
    </Nav>
  );
};

export default ToolBar;