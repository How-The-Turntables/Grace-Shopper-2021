const express = require('express');
const router = require('./api/router');
const path = require('path');
const morgan = require('morgan');
const syncAndSeed = require('./db/seed');

const app = express();

module.exports = app;

app.use(express.json());
app.use(morgan('tiny'));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/api', router); // path to router for the back-end links

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.use(function (req, res, next) {
  res.status(404).send("Are you lost? That page doesn't seem to exist.");
});

app.use(function (err, req, res, next) {
  res.status(500).send({ error: err });
});

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
