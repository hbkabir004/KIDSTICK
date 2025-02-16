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
const testimonials = JSON.parse(readFileSync(path.resolve('data/testimonials.json')));

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

// Get All Testimonials
app.get('/testimonials', (req, res) => {
  const filters = req.query;
  const searchedTestimonials = filterData(testimonials, filters);
  res.send(searchedTestimonials);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
