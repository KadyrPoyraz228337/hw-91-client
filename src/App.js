import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import LoginPage from "./Components/LogonPage/LoginPage";
import ChatPage from "./Components/ChatPage/ChatPage";

function App() {
  return (
    <div>
      <Navigation/>
      <Container>
        <Switch>
          <Route path='/' exact component={ChatPage}/>
          <Route path='/login' exact component={LoginPage}/>
          <Route path='/register' exact component={RegisterPage}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
