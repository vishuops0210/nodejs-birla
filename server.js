const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family: sans-serif; text-align: center; margin-top: 50px;">
        <h1>Welcome to Node.js App!</h1>
        <p>This is a fully functional Node.js backend API ready for the demo.</p>
      </body>
    </html>
  `);
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'success', message: 'API is running flawlessly.' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Node.js server listening on port ${port}`);
  });
}

module.exports = app;
