export const ADD_PRODUCT = "ADD_PRODUCT"
export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const SELECT_PRODUCT = "SELECT_PRODUCT"
export const UPDATE_PRODUCT = "UPDATE_PRODUC"
export const [INCREASE_QUANTITY] = 'INCREASE_QUANTITY'
export const [DECREASE_QUANTITY] = 'DECREASE_QUANTITY'

export const addProduct = (product) => {
  return {
      type: ADD_PRODUCT,
      payload: product
  }
}
export const deleteProduct=(id)=>({
  type : DELETE_PRODUCT,
  payload:id,
})
export const selectedProduct=(product)=>({
  type:SELECT_PRODUCT,
  payload:product
})
export const updateProduct=(product)=>({
  type:UPDATE_PRODUCT,
  payload:product
})
export const increaseQuantity = productId => {
  return {
    type: 'INCREASE_QUANTITY',
    payload: productId,
  };
};

export const decreaseQuantity = productId => {
  return {
    type: 'DECREASE_QUANTITY',
    payload: productId,
  };
};
export const updateQuantity = (productId, quantity) => {
  return {
    type: 'UPDATE_QUANTITY',
    payload: {
      productId,
      quantity,
    },
  };
};


