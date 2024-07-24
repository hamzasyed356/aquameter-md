// mqtt/mqtt.ts
import mqtt, { MqttClient, IClientOptions, MqttProtocol } from 'mqtt';

const options: IClientOptions = {
  protocol: 'ws' as MqttProtocol,
  clientId: `mqtt_${Math.random().toString(16).slice(3)}`,
};

const client: MqttClient = mqtt.connect('ws://192.168.18.19:8083', options);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
});

client.on('error', (err) => {
  console.error('Connection error: ', err);
  client.end();
});

export default client;
