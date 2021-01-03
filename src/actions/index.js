export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const CLOSE_ADDED_TO_BASKET_DIALOG = "CLOSE_ADDED_TO_BASKET_DIALOG";
export const REMOVE_ALL_FROM_BASKET = "REMOVE_ALL_FROM_BASKET";
export const SET_BOTTOM_BAR_HIDDEN = "SET_BOTTOM_BAR_HIDDEN";

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
