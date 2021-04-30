// Albums
const LOAD_ALBUMS = 'LOAD_ALBUMS';
const SINGLE_ALBUM = 'SINGLE_ALBUM';
const EDIT_ALBUM = 'EDIT_ALBUM';
// Artists
const LOAD_ARTISTS = 'LOAD_ARTISTS';
const SINGLE_ARTIST = 'SINGLE_ARTIST';
// Reviews
const LOAD_REVIEWS = 'LOAD_REVIEWS';
const ADD_REVIEW = 'ADD_REVIEW';
const EDIT_REVIEW = 'EDIT_REVIEW'; // we might not want this (low priority)
const DELETE_REVIEW = 'DELETE_REVIEW';
// Cart
const ADD_TO_CART = 'ADD_TO_CART';
const LOAD_CART = 'LOAD_CART';
const CHECKOUT = 'CHECKOUT';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const COMPLETE_PAYMENT = 'COMPLETE_PAYMENT';
// Users
const LOAD_USERS = 'LOAD_USERS';
const EDIT_USER = 'EDIT_USER'; // when a user edits their own info
const PROMOTE_USER = 'PROMOTE_USER'; // when admin promotes another user to admin
const LOGIN = 'LOGIN';
const CREATE_USER = 'CREATE_USER';

const types = {
  LOAD_ALBUMS,
  SINGLE_ALBUM,
  EDIT_ALBUM,
  LOAD_ARTISTS,
  SINGLE_ARTIST,
  LOAD_REVIEWS,
  ADD_REVIEW,
  EDIT_REVIEW,
  DELETE_REVIEW,
  ADD_TO_CART,
  LOAD_CART,
  CHECKOUT,
  REMOVE_FROM_CART,
  COMPLETE_PAYMENT,
  LOAD_USERS,
  EDIT_USER,
  PROMOTE_USER,
  LOGIN,
  CREATE_USER,
};

export default types;
