const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectDB = require('./backend/config/db');

const contactRoutes = require('./backend/routes/contact.routes');
const projectRoutes = require('./backend/routes/project.routes');
const qualificationRoutes = require('./backend/routes/qualification.routes');
const userRoutes = require('./backend/routes/user.routes');
const authRoutes = require('./backend/routes/auth.routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to My Portfolio application.' });
});

app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Server error' });
});

app.listen(PORT, () => {
  console.log(`App running in port ${PORT}`);
});
