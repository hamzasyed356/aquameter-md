// components/Mqttpub.tsx
'use client';

import { useState } from 'react';
import mqttClient from '../mqtt/mqtt';

const Mqttpub = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const publishMessage = (message: string) => {
    mqttClient.publish('test', message, (err) => {
      if (err) {
        console.error('Publish error: ', err);
      }
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    publishMessage(inputValue);
  };

  return (
    <div>
      <h1>Publish MQTT Data</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default Mqttpub;
