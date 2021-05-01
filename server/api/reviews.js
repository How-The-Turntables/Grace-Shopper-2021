const reviewRouter = require('express').Router();
const { Review, Album } = require('../db/index');

reviewRouter.post('/', async (req, res, next) => {
  try {
    const [review, wasCreated] = await Review.findOrCreate({
      where: {
        comment: req.body.comment,
        stars: req.body.stars,
        albumId: req.body.albumId,
      },
      include: [Album],
    });
    if (wasCreated) {
      res.status(201).send(review);
      review.save();
    } else {
      res.status(409).send(await Student.findAll());
    }
  } catch (error) {
    console.log('error occured in /api/reviews/ post route: ', error);
    next(error);
  }
});
