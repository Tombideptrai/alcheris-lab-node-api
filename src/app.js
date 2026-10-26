const express = require('express');

// Builds the API. Tests create a fresh app each time, so every test starts
// with an empty to-do list.
function createApp() {
  const app = express();
  app.use(express.json());

  // The to-dos live in memory: restart the server and they are gone.
  const todos = [];

  app.get('/', (req, res) => {
    res.json({ name: 'todo-api', message: 'Hello from your API' });
  });

  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  app.get('/todos', (req, res) => {
    res.json(todos);
  });

  return app;
}

module.exports = { createApp };
