import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, websocketInit} from "../../store/actions/chat";
import {Button, Col, Form, Row} from "reactstrap";
import SideBar from "./SideBar/SideBar";
import FormField from "../UI/FormField/FormField";

const ChatPage = () => {

  const [message, setMessage] = useState({
    text: '',
    recipient: null
  });

  const inputChangeHandler = e => setMessage({...message, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();

    console.log(message);

    dispatch(sendMessage({
      text: message.text.trim(),
      recipient: message.recipient ? message.recipient._id : null
    }));
    setMessage({ text: '' })
  };

  const dispatch = useDispatch();
  const messages = useSelector(state => state.chat.messages);

  useEffect(() => {
    dispatch(websocketInit());
  }, [dispatch]);

  return (
    <div>
      <Row>
        <Col sm='3'>
          <SideBar/>
        </Col>
        <Col sm='9'>
          <div className='bg-light w-100 h-100 border rounded p-1 d-flex flex-column' style={{boxShadow: '1px 1px 2px 0px rgba(0,0,0,0.5)'}}>
            <div className='w-100 h-100 bg-white border rounded mb-1 p-3 d-flex flex-column justify-content-end'>
              <div style={{maxHeight: '690px'}} className='overflow-auto'>
                {messages.map(item => {
                  return (
                    <h6 className='font-weight-normal my-2 chat-item'>
                    <span
                      className='font-weight-bold border rounded bg-light p-1 mr-2'
                    >{item.user.username}</span>
                      {item.text}
                      <Button color='primary' className='ml-2 chat-btn' onClick={() => setMessage({...message, recipient: item.user})}>send private</Button>
                    </h6>
                  )
                })}
              </div>
            </div>
            <div className='w-100 mt-auto'>
              <Form onSubmit={onSubmit}>
                <div className='d-flex w-100'>
                  {message.recipient && <Button
                    className='mr-2'
                    color='danger'
                    onClick={() => setMessage({...message, recipient: null})}
                  >
                    For_{message.recipient.username}
                  </Button>}
                  <FormField
                    type='text' required
                    className='w-100 p-0'
                    formClassName='w-100 m-0'
                    name='text'
                    value={message.text}
                    onChange={inputChangeHandler}
                  />
                  <Button color='primary' className='ml-2'>SEND</Button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ChatPage;