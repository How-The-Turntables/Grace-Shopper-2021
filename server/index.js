const syncAndSeed = require('./db/seed');
const app = require('./server');

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
