import {MantineProvider} from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {isEnvBrowser} from './utils/misc';
import {ModalsProvider} from '@mantine/modals';
import {HashRouter} from 'react-router-dom';

if (isEnvBrowser()) {
  const root = document.getElementById('root')

  // https://i.imgur.com/iPTAdYV.png - Night time img
  root!.style.backgroundSize = 'cover'
  root!.style.backgroundRepeat = 'no-repeat'
  root!.style.backgroundPosition = 'center'
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={{colorScheme: 'dark'}}>
      <ModalsProvider modalProps={{transition: 'slide-up'}}>
        <HashRouter>
          <App/>
        </HashRouter>
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>
)