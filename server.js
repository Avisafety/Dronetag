import express from 'express';
import bodyParser from 'body-parser';
import { io } from 'socket.io-client';  // Importer socket.io-klienten
import { createClient } from '@supabase/supabase-js';  // Supabase-klient for lagring
import dotenv from 'dotenv';

dotenv.config();  // Laster inn miljøvariabler fra .env-filen

const app = express();
app.use(bodyParser.json());

// Initialiser Supabase-klienten
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Koble til Dronetag WebSocket-server
const socket = io('https://api.dronetag.app', {
  path: '/v2/airspace/socket.io',
  auth: process.env.DRONETAG_API_KEY,  // API-nøkkel hentet fra miljøvariabler
});

socket.on('connect', () => {
  console.log("Successfully connected to Dronetag via Socket.io!");

  // Send uas_id for å motta telemetri for denne enheten
  const uas_id = '1596F351901936310360';  // Dronetag ID som du har oppgitt
  socket.emit('uas_id', uas_id);  // Bruk uas_id for å få telemetri for spesifikk enhet
});

// Mottak av telemetri-data (eksempel: UAV-telemetri)
socket.on('telemetry_ua', (data) => {
  console.log("UA telemetry received:", data);

  // Hent device_id fra data (antar at det er en del av dataene)
  const device_id = data.device_id;  // Eksempel på hvordan enheten kan være i dataene
  const { lat, lng } = data.position;  // Eksempel på posisjonsdata
  const timestamp = new Date().toISOString();  // Bruker nåværende tid som tidsstempel
  
  // Lagre enhet i 'dronetag_devices' tabellen (hvis nødvendig)
  saveDeviceIfNeeded(device_id);

  // Lagre posisjon i 'dronetag_positions' tabellen
  savePosition(device_id, lat, lng, timestamp);
});

// Funksjon for å lagre enhet i 'dronetag_devices' tabellen (hvis den ikke allerede finnes)
async function saveDeviceIfNeeded(device_id) {
  const { data, error } = await supabase
    .from('dronetag_devices')
    .select('device_id')
    .eq('device_id', device_id);

  if (data.length === 0) {
    const { data: newDevice, error: deviceError } = await supabase
      .from('dronetag_devices')
      .insert([{ device_id }]);

    if (deviceError) {
      console.error("Error saving device:", deviceError);
    } else {
      console.log("Device saved to Supabase:", newDevice);
    }
  }
}

// Funksjon for å lagre posisjon i 'dronetag_positions' tabellen
async function savePosition(device_id, lat, lng, timestamp) {
  const { data, error } = await supabase
    .from('dronetag_positions')
    .insert([{ device_id, lat, lng, timestamp }]);

  if (error) {
    console.error("Error saving position to Supabase:", error);
  } else {
    console.log("Position saved to Supabase:", data);
  }
}

// Enkel helse-sjekk rute for å verifisere at serveren er oppe
app.get("/", (req, res) => {
  res.send("AviSafe Dronetag backend is running");
});

// Start Express-serveren
const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
  