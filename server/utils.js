// compares whether the req.params.id and authorized user Id match
// also tests whether the token is from an admin user
// if either are true, the ID for the requested route is returned, otherwise null is returned
const authId = (req) => {
  console.log(req.params.id,'req params ID')
  console.log(req.user.id,'req user ID')

  return (req.params.id * 1) === (req.user.id * 1) || req.user.admin === true
    ? req.params.id
    : false;
};

const newGuestCart = () => {
  const cart = {
    id: 'guest',
    albums: [],
  };
  localStorage.setItem('GuestCart', JSON.stringify(cart));
};

module.exports = {
  authId,
  newGuestCart,
};
