import { ADD_PRODUCT, DELETE_PRODUCT, SELECT_PRODUCT, UPDATE_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY } from "../actions/cartActions";

const initState = {
  products: [],
  selectedProduct: null
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
        selectedProduct: null
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity + 1
            };
          }
          return product;
        })
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload && product.quantity > 1) {
            return {
              ...product,
              quantity: product.quantity - 1
            };
          }
          return product;
        })
      };
    default:
      return state;
  }
};

export default cartReducer;
