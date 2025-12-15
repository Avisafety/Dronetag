import { io } from 'socket.io-client';  // Bruk import i stedet for require

// Koble til WebSocket-serveren
const socket = io('https://dronetag.onrender.com', {
  path: '/v2/airspace/socket.io',
  auth: 'eyJhbGciOiJSUzI1NiIsInR5c...'  // Erstatt med din faktiske Dronetag API-nøkkel
});

socket.on('connect', () => {
  console.log('Connected to Dronetag WebSocket');
  
  const viewport = "59.913,-10.746,59.916,-10.743";  // Erstatt med dine ønskede koordinater
  socket.emit('viewport', viewport);
});

socket.on('telemetry_ua', (data) => {
  console.log('Telemetry data received:', data);
});

socket.on('error', (err) => {
  console.log('Error:', err);
});

socket.on('disconnect', () => {
  console.log('Disconnected from WebSocket');
});
