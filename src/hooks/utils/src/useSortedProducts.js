import { useEffect, useReducer, useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import qs from "qs";
import { useSearchParameters, usePriceRanges } from "@hooks/utils";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "pushAttribute":
      return { ...state, attributes: { [payload.id]: payload.values } };
    case "changePage":
      return { ...state, page: payload.page };
    case "changePriceRange":
      return { ...state, price: { min: payload.min, max: payload.max } };
    case "sort":
      return { ...state, sort: payload.type };
    case "clearAll":
      return {
        page: state.page,
        price: { min: payload.min, max: payload.max },
      };
    default:
      throw new Error(`Invalid action: ${type}`);
  }
};

export default (productsProp) => {
  if (productsProp.length === 0) return nothing();

  const [products, setProducts] = useState(productsProp);
  const [minPrice, maxPrice] = usePriceRanges(productsProp);

  const history = useHistory();
  const parameters = useSearchParameters();
  const [query, dispatchQuery] = useReducer(reducer, parameters);

  useEffect(() => {
    const searchString = qs.stringify(query);
    history.push({ search: searchString });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, history]);

  useLayoutEffect(() => {
    if (query.price) {
      setProducts(
        productsProp.filter((p) => {
          const price = p.discount || p.price;
          if (price < query.price.min || price > query.price.max) return false;
          return true;
        })
      );

      dispatchQuery({
        type: "changePage",
        payload: {
          page: 1,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.price]);

  useLayoutEffect(() => {
    if (!query.sort) return undefined;

    switch (query.sort) {
      case "default":
        setProducts(productsProp);
        break;
      case "lowestPrice":
        setProducts(
          products.sort((product, second) => {
            const firstPrice = products.discount || product.price;
            const secondPrice = second.discount || second.price;

            if (firstPrice > secondPrice) {
              return 1;
            }

            if (secondPrice > firstPrice) {
              return -1;
            }

            return 0;
          })
        );
        break;
      case "highestPrice":
        setProducts(
          products.sort((product, second) => {
            const firstPrice = products.discount || product.price;
            const secondPrice = second.discount || second.price;

            if (firstPrice > secondPrice) {
              return -1;
            }

            if (secondPrice > firstPrice) {
              return 1;
            }

            return 0;
          })
        );
        break;
      case "bestGrade":
        setProducts(
          products.sort((product, second) => {
            const firstScore = product.score;
            const secondScore = second.score;

            if (firstScore > secondScore) {
              return -1;
            }

            if (secondScore > firstScore) {
              return 1;
            }

            return 0;
          })
        );
        break;
      case "nameAZ":
        setProducts(
          products.sort((product, second) => {
            const firstName = product.name;
            const secondName = second.name;

            if (firstName < secondName) {
              return -1;
            }

            if (firstName > secondName) {
              return 1;
            }

            return 0;
          })
        );
        break;
      case "nameZA":
        setProducts(
          products.sort((product, second) => {
            const firstName = product.name;
            const secondName = second.name;

            if (firstName < secondName) {
              return 1;
            }

            if (firstName > secondName) {
              return -1;
            }

            return 0;
          })
        );
        break;
      default:
        break;
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.sort]);

  const methods = {
    changePage: (page, e) => {
      if (e) {
        e.preventDefault();
      }

      dispatchQuery({
        type: "changePage",
        payload: {
          page,
        },
      });
    },
    changePriceRange: (min, max) => {
      dispatchQuery({
        type: "changePriceRange",
        payload: {
          min,
          max,
        },
      });
    },
    sort: (type) => {
      dispatchQuery({
        type: "sort",
        payload: {
          type,
        },
      });
      dispatchQuery({
        type: "changePage",
        payload: {
          page: 1,
        },
      });
    },
    clearAll: (e) => {
      if (e) {
        e.preventDefault();
      }
      dispatchQuery({
        type: "clearAll",
        payload: {
          min: minPrice,
          max: maxPrice,
        },
      });
      setProducts(productsProp);
    },
  };

  return {
    products,
    methods,
    currentMinPrice: query.price ? parseInt(query.price.min, 10) : undefined,
    currentMaxPrice: query.price ? parseInt(query.price.max, 10) : undefined,
    minPrice,
    maxPrice,
  };
};

function nothing() {
  return {
    products: [],
    methods: {
      changePage: () => {},
      changePriceRange: () => {},
      sort: () => {},
      clearAll: () => {},
    },
    currentMinPrice: 0,
    currentMaxPrice: 0,
    minPrice: 1,
    maxPrice: 2,
  };
}
