import { v4 as uuid } from "uuid";

import discountCodes from "@database/discountCodes";
import { errors, maxDiscount, done } from "@config/index";
import { DONE, ERROR } from "@constants/statuses";

import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  CLOSE_ADDED_TO_BASKET_DIALOG,
  REMOVE_ALL_FROM_BASKET,
  SET_BOTTOM_BAR_HIDDEN,
  ADD_DISCOUNT_CODE,
  REMOVE_DISCOUNT_CODE,
  ADD_STATUS,
  REMOVE_STATUS,
} from "@actions/index";

const initialState = {
  basket: {
    price: 0,
    products: [],
    isDialogActive: false,
    addedProduct: {},
    count: 0,
    discountCodes: [],
  },
  navigation: {
    isBottomBarHidden: false,
  },
  statuses: [],
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
  const returnStatus = ({ kind, message, id, onlyStatuses = false } = {}) => {
    const newStatus = {
      kind,
      id: id || uuid(),
      message,
    };

    let toReturn;

    if (state.statuses.length >= 3) {
      toReturn = [...state.statuses.slice(1, state.statuses.length), newStatus];
    } else {
      toReturn = [...state.statuses, newStatus];
    }

    if (onlyStatuses) {
      return toReturn;
    }

    return {
      ...state,
      statuses: toReturn,
    };
  };

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
    case SET_BOTTOM_BAR_HIDDEN:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          isBottomBarHidden: payload,
        },
      };
    case ADD_DISCOUNT_CODE: {
      const isNotDiscountCodesInitialied =
        state.basket.discountCodes === undefined;

      if (
        !isNotDiscountCodesInitialied &&
        state.basket.discountCodes.length !== 0
      ) {
        const codeIndexInState = state.basket.discountCodes.findIndex(
          (discountCode) => discountCode.code === payload
        );

        if (codeIndexInState !== -1) {
          return returnStatus({
            kind: ERROR,
            message: errors.DISCOUNT_CODE_ALREADY_ADDED,
          });
        }
      }

      const foundCode = discountCodes.find(
        (discountCode) => discountCode.code === payload
      );

      if (!foundCode) {
        return returnStatus({
          kind: ERROR,
          message: errors.DISCOUNT_CODE_NOT_EXIST,
        });
      }

      if (foundCode.used) {
        return returnStatus({
          kind: ERROR,
          message: errors.DISCOUNT_CODE_ALREADY_USED,
        });
      }

      if (!isNotDiscountCodesInitialied) {
        let sumDiscount = 0;
        state.basket.discountCodes.forEach(({ discount }) => {
          sumDiscount += discount;
        });
        sumDiscount += foundCode.discount;

        if (sumDiscount > maxDiscount) {
          return returnStatus({
            kind: ERROR,
            message: errors.DISCOUNT_CODE_TOO_MUCH,
          });
        }
      }

      if (isNotDiscountCodesInitialied) {
        return {
          ...state,
          basket: {
            ...state.basket,
            discountCodes: [foundCode],
          },
          statuses: returnStatus({
            kind: DONE,
            message: done.DISCOUNT_CODE_ADDED,
            onlyStatuses: true,
          }),
        };
      }

      return {
        ...state,
        basket: {
          ...state.basket,
          discountCodes: [...state.basket.discountCodes, foundCode],
        },
        statuses: returnStatus({
          kind: DONE,
          message: done.DISCOUNT_CODE_ADDED,
          onlyStatuses: true,
        }),
      };
    }
    case REMOVE_DISCOUNT_CODE:
      return {
        ...state,
        basket: {
          ...state.basket,
          discountCodes: state.basket.discountCodes.filter(
            ({ code }) => code !== payload
          ),
        },
        statuses: returnStatus({
          kind: DONE,
          message: done.DISCOUNT_CODE_REMOVED,
          onlyStatuses: true,
        }),
      };
    case ADD_STATUS:
      return returnStatus(payload.kind, payload.message, payload.id);
    case REMOVE_STATUS:
      return {
        ...state,
        statuses: state.statuses.filter((status) => status.id !== payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
