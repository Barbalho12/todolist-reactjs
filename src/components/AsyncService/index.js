import React from 'react';
import SockJsClient from 'react-stomp';
import API from '../../API';

const AsyncService = ({onReceive}) => {
    return (
      <SockJsClient url={API.webSocketURL} topics={['/topic/tasks']}
      onMessage={(msg) => { onReceive(); }} />
    );
}

export default AsyncService;