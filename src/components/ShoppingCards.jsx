import React from 'react';
import Button from 'react-bootstrap/Button';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, deleteProduct, increaseQuantity, updateProduct } from '../actions/cartActions';

export default function ShoppingCart() {
   
  const localListProduct = JSON.parse(localStorage.getItem("ListProduct")) || [];
  console.log("🚀 ~ file: ShoppingCards.jsx:8 ~ ShoppingCart ~ localListProduct:", localListProduct)

  const dispatch = useDispatch();

  const handleEdit = (product) => {
    dispatch(updateProduct(product));
  };

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const handleQuantityChange = (productId, e) => {
    const quantity = parseInt(e.target.value);
    dispatch(updateProduct({ id: productId, quantity: quantity }));
  };

  const calculateTotal = () => {
    let total = 0;
    localListProduct.forEach((item) => {
      if (item.price && item.quantity) {
        total += item.price * item.quantity;
      }
    });
    return total;
  };

  const total = calculateTotal();

  return (
    <div
      style={{
        width: '46%',
      }}
    >
      <div>
        <h2
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: '30px',
            backgroundColor: 'hsl(3, 96%, 63%)',
          }}
        >
          Your Cart
        </h2>
        <h4>Product</h4>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>#</th>
              <th style={{
                width: "85%",
              }}>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {localListProduct.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td style={{ display: 'flex' }}>
                  <input
                    style={{
                      width: '3rem',
                      height: "36px",
                      borderStyle: "solid",
                      borderWidth: 1,
                      borderColor: "#ccc",
                      borderRadius: ".4em",
                      textAlign: "center",
                    }}
                    type='number'
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e)}
                  />
                </td>
                <td>${item.price * item.quantity}</td>
                <td style={{
                  display: 'flex',
                }}>
                  <Button variant="primary" onClick={() => handleEdit(item)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
        <p className="text-right">Total: ${total}</p>

      </div>
    </div>
  );
}
