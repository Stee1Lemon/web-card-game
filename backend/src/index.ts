import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

// Setup Express
const app = express();
app.use(cors());

// Add a test route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Create HTTP server from Express app
const httpServer = createServer(app);

// Setup Socket.IO server
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// Handle socket connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server
const PORT = 3000;
httpServer.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
