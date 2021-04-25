const express = require('express');
const router = require('./api/router');

const app = express();

app.use('/api', router); // path to router for the back-end links

const init = () => {
  try {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

init();

module.exports = app;
