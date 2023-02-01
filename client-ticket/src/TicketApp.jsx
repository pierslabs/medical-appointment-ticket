import React from 'react';
import { SocketProvider } from './context/socketContext';
import UiProvider from './context/uiContext';
import RouterPage from './pages/RouterPage';

const TicketApp = () => {
  return (
    <SocketProvider>
      <UiProvider>
        <RouterPage />
      </UiProvider>
    </SocketProvider>
  );
};

export default TicketApp;
