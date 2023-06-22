import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./ActionType";

export function addFav(char) {
  return {
    type: ADD_FAV,
    payload: char,
  };
}

export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}

export function reset() {
  return {
    type: RESET
  }
}
