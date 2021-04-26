const express = require('express');
const router = require('./api/router');
const syncAndSeed = require('./db/seed');

const app = express();
module.exports = app;

app.use('/api', router); // path to router for the back-end links

const init = async () => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    if (!module.parent) {
      app.listen(port, () => console.log(`listening on port: ${port}`));
    }
  } catch (error) {
    console.log(error);
  }
};

init();
