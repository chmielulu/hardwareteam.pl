import { v4 as uuid } from "uuid";

export const ADD_TO_BASKET = 0;
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const CLOSE_ADDED_TO_BASKET_DIALOG = "CLOSE_ADDED_TO_BASKET_DIALOG";
export const REMOVE_ALL_FROM_BASKET = "REMOVE_ALL_FROM_BASKET";
export const SET_BOTTOM_BAR_HIDDEN = "SET_BOTTOM_BAR_HIDDEN";
export const ADD_DISCOUNT_CODE = "ADD_DISCOUNT_CODE";
export const REMOVE_DISCOUNT_CODE = "REMOVE_DISCOUNT_CODE";
export const ADD_STATUS = "ADD_STATUS";
export const REMOVE_STATUS = "REMOVE_STATUS";

export const addToBasket = (product) => (dispatch) => {
  dispatch({ type: ADD_TO_BASKET, payload: product });
};

export const removeFromBasket = (product) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_BASKET, payload: product });
};

export const removeAllFromBasket = () => (dispatch) => {
  dispatch({ type: REMOVE_ALL_FROM_BASKET });
};

export const closeAddedToBasketDialog = () => (dispatch) => {
  dispatch({ type: CLOSE_ADDED_TO_BASKET_DIALOG });
};

export const setBottomBarHidden = (isHidden) => (dispatch) => {
  dispatch({ type: SET_BOTTOM_BAR_HIDDEN, payload: isHidden });
};

export const addDiscountCode = (code) => (dispatch) => {
  dispatch({ type: ADD_DISCOUNT_CODE, payload: code });
};

export const removeDiscountCode = (code) => (dispatch) => {
  dispatch({ type: REMOVE_DISCOUNT_CODE, payload: code });
};

export const addStatus = (kind, message) => (dispatch) => {
  const id = uuid();
  dispatch({ type: ADD_STATUS, payload: { kind, message, id } });

  return id;
};

export const removeStatus = (id) => (dispatch) => {
  dispatch({ type: REMOVE_STATUS, payload: id });
};
