import { io, Socket } from 'socket.io-client';
import { useCallback } from 'react';

const sockets: { [key: string]: Socket } = {};

const useSocket = (ride: string): [Socket | undefined, () => void] => {
  const disconnect = useCallback(() => {
    if (ride) {
      sockets[ride].disconnect();

      delete sockets[ride];
    }
  }, [ride]);

  if (!ride) {
    return [undefined, disconnect];
  }

  if (!sockets[ride]) {
    sockets[ride] = io(`${process.env.REACT_APP_SERVER_URL!}/${ride}`, {
      transports: [`websocket`],
    });
  }

  return [sockets[ride], disconnect];
};

export default useSocket;
