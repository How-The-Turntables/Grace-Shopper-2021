const express = require('express');

const app = express();

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
