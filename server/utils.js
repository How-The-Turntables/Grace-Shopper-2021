// compares whether the req.params.id and authorized user Id match
// also tests whether the token is from an admin user
// if either are true, the ID for the requested route is returned, otherwise null is returned
const authId = (req) => {
    return req.params.id === req.user.id || req.user.admin === true
      ? req.params.id
      : false;
};

module.exports = {
  authId,
}
