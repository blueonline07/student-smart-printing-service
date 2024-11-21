// server.js
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/UserRoutes.js';
import printerRoutes from './routes/PrinterRoutes.js';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Adjust this to match your frontend's domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Adjust allowed HTTP methods if necessary
  allowedHeaders: ['*'], // Adjust allowed headers
  credentials: true,
}));

app.use('/users', userRoutes)
// app.use('/printers', printerRoutes)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
