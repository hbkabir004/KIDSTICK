import cors from 'cors';
import express from 'express';
import { readFileSync } from 'fs';
import path from 'path';
import { filterData } from './commonFunctions/commonFunctions.js';

const app = express();
const port = process.env.PORT || 4000;

// Load JSON data
const services = JSON.parse(readFileSync(path.resolve('data/services.json')));
const products = JSON.parse(readFileSync(path.resolve('data/products.json')));
const events = JSON.parse(readFileSync(path.resolve('data/events.json')));
const blogs = JSON.parse(readFileSync(path.resolve('data/blogs.json')));

// Global Middleware
app.use(cors());

// Endpoint to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Get All Services
app.get('/services', (req, res) => {
  const filters = req.query;
  const searchedServices = filterData(services, filters);
  res.send(searchedServices);
});

// Get All Products
app.get('/products', (req, res) => {
  const filters = req.query;
  const searchedProducts = filterData(products, filters);
  res.send(searchedProducts);
});

// Get All Events
app.get('/events', (req, res) => {
  const filters = req.query;
  const searchedEvents = filterData(events, filters);
  res.send(searchedEvents);
});

// Get All Blogs
app.get('/blogs', (req, res) => {
  const filters = req.query;
  const searchedBlogs = filterData(blogs, filters);
  res.send(searchedBlogs);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}).on('error', (err) => {
  if (err.code === 'EACCES') {
    console.error(`Port ${port} requires elevated privileges`);
    process.exit(1);
  } else if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use`);
    process.exit(1);
  } else {
    console.error(`Error: ${err}`);
    process.exit(1);
  }
});
