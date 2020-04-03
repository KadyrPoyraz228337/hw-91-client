import React, {useState} from 'react';
import {Button, Form} from "reactstrap";
import FormField from "../UI/FormField/FormField";
import {useDispatch} from "react-redux";
import {registerUser} from "../../store/actions/users";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const inputChangeHandler = e => setUser({...user, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  return (
    <div>
      <div className='w-50 mx-auto text-center'>
        <h2 className='mb-3'>Register</h2>
        <Form onSubmit={onSubmit}>
          <FormField
            type='text'
            name='username'
            value={user.username}
            onChange={inputChangeHandler}
            placeholder='username'
            className='p-4'
          />
          <FormField
            type='password'
            name='password'
            value={user.password}
            onChange={inputChangeHandler}
            placeholder='password'
            className='p-4'
          />
          <Button color='primary' className='text-uppercase font-weight-bold w-100'>Register</Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;