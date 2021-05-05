// Albums
const LOAD_ALBUMS = 'LOAD_ALBUMS';
const SINGLE_ALBUM = 'SINGLE_ALBUM';
const EDIT_ALBUM = 'EDIT_ALBUM';
const SET_COUNT = 'SET_COUNT';
// Sort and filter
const SORT_BY = 'SORT_BY'; // or do I need specific sorts for each option?
const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
// Pagination
const LOAD_NEXT_PAGE = 'LOAD_NEXT_PAGE';
const LOAD_EXACT_PAGE = 'LOAD_EXACT_PAGE';
// Artists
const LOAD_ARTISTS = 'LOAD_ARTISTS';
const SINGLE_ARTIST = 'SINGLE_ARTIST';
const CREATE_ARTIST = 'CREATE_ARTIST';
const EDIT_ARTIST = 'EDIT_ARTIST';
const DELETE_ARTIST = 'DELETE_ARTIST';
// Reviews
const LOAD_REVIEWS = 'LOAD_REVIEWS';
const ADD_REVIEW = 'ADD_REVIEW';
const EDIT_REVIEW = 'EDIT_REVIEW'; // we might not want this (low priority)
const DELETE_REVIEW = 'DELETE_REVIEW';
// Shopping
const NEW_CART = 'NEW_CART';
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
//Admins
const LOAD_ORDERS = 'LOAD_ORDERS';

//Universal
const UNLOAD = 'UNLOAD';

const types = {
  LOAD_ALBUMS,
  SINGLE_ALBUM,
  EDIT_ALBUM,
  SET_COUNT,
  SORT_BY,
  FILTER_BY_GENRE,
  LOAD_NEXT_PAGE,
  LOAD_EXACT_PAGE,
  LOAD_ARTISTS,
  SINGLE_ARTIST,
  CREATE_ARTIST,
  EDIT_ARTIST,
  DELETE_ARTIST,
  LOAD_REVIEWS,
  ADD_REVIEW,
  EDIT_REVIEW,
  DELETE_REVIEW,
  NEW_CART,
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
  LOAD_ORDERS,
  UNLOAD,
};

export default types;
