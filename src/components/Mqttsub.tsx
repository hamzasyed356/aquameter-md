// components/Mqttsub.tsx
'use client';

import { useState, useEffect } from 'react';
import client from '../mqtt/mqtt';

const Mqttsub = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const topic = 'test';

    client.subscribe(topic, (err) => {
      if (err) {
        console.error('Subscription error: ', err);
      }else {
        console.log('no error')
      }
    });

    client.on('message', (topicReceived, payload) => {
      if (topicReceived === topic) {
        setMessage(payload.toString());
      }
    });

    return () => {
      client.unsubscribe(topic);
    };
  }, []);

  return (
    <div>
      <h1>MQTT Data</h1>
      <p>{message}</p>
    </div>
  );
};

export default Mqttsub;
