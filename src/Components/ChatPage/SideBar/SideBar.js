import React from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import {useSelector} from "react-redux";

const SideBar = () => {

  const online = useSelector(state => state.chat.online);

  return online && (
    <div className='border rounded p-1 bg-light text-center' style={{height: '700px', boxShadow: '1px 1px 2px 0px rgba(0,0,0,0.5)'}}>
      <h3 className='my-2 font-weight-bold'>Online</h3>
      <ListGroup>
        {online.map(item => {
          return (
            <ListGroupItem className='text-left' key={item._id}>
              <h3 className='m-0 text-dark'>{item.username}</h3>
            </ListGroupItem>
          )
        })}
      </ListGroup>
    </div>
  );
};

export default SideBar;