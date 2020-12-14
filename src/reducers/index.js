import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  CLOSE_ADDED_TO_BASKET_DIALOG,
  REMOVE_ALL_FROM_BASKET,
} from "@actions";

const initialState = {
  basket: {
    price: 0,
    products: [],
    isDialogActive: false,
    addedProduct: {},
    count: 0,
  },
};

const updateProducts = (products, payload) => {
  const resIndex = products.findIndex(
    (product) => product.name === payload.name
  );

  if (resIndex === -1) {
    return [...products, { ...payload, count: 1 }];
  }

  const updatedProducts = products;
  updatedProducts[resIndex].count += 1;

  return updatedProducts;
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: {
          products: updateProducts(state.basket.products, payload),
          isDialogActive: true,
          addedProduct: payload,
          count: state.basket.count + 1,
        },
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: {
          ...state.basket,
          products: state.basket.products.filter(
            (product) => product.name !== payload.name
          ),
          count: state.basket.count - payload.count,
        },
      };
    case REMOVE_ALL_FROM_BASKET:
      return {
        ...state,
        basket: {
          ...state.basket,
          products: [],
          count: 0,
        },
      };
    case CLOSE_ADDED_TO_BASKET_DIALOG:
      return {
        ...state,
        basket: {
          ...state.basket,
          isDialogActive: false,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
