import React, { useEffect, useState, useRef } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Button from 'react-bootstrap/Button';
import { useDispatch,useSelector } from 'react-redux';
import { addProduct, updateQuantity } from '../actions/cartActions';

const Product1 = () => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState([]);
  const quantityRef = useRef(null);

  const products = [
    {
      id:Date.now(),
      name: "Card title",
      price: 12,
      image: "https://images.unsplash.com/photo-1622126128210-9eed44cfde29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
     
    },
    {
      id:Date.now(),
      name: "Card title",
      price: 12,
      image: "https://images.unsplash.com/photo-1622126128210-9eed44cfde29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
    
    },
    {
      id:Date.now(),
      name: "Card title",
      price: 12,
      image: "https://images.unsplash.com/photo-1622126128210-9eed44cfde29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
      
    },
    {
      id:Date.now(),
      name: "Card title",
      price: 12,
      image: "https://images.unsplash.com/photo-1622126128210-9eed44cfde29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
    
    },
  ];
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('ListProduct')) || [];
    setNewProduct(storedProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem('ListProduct', JSON.stringify(newProduct));
  }, []);

  const handleAddToCart = (product) => {
    const quantity = parseInt(quantityRef.current.value);
    if (!isNaN(quantity)) {
      const updatedProduct = {
        quantity: quantity
      };
      dispatch(addProduct(updatedProduct));
      dispatch(updateQuantity(product.id, quantity));
      setNewProduct((prevProducts) => [...prevProducts, updatedProduct]);
      quantityRef.current.value = 1; 
    } else {
      alert("Please enter a valid quantity");
    }
  };
  

  return (          
<div style={{ width: '46%' }}>
      <h2
        style={{
          backgroundColor: 'hsl(202, 40%, 63%)',
          color: 'white',
          textAlign: 'center',
          border: '1px solid hsl(202, 40%, 63%)',
        }}
      >
        List Product
      </h2>
      <div className="card mb-3">
        {products.map((item) => (
          <div className="row g-0" key={item.id}>
            <div className="col-md-4">
              <img
                src={item.image}
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="danger"
                  onClick={() => handleAddToCart(item)}
                  style={{
                    backgroundColor: '#F97C7B',
                    marginLeft: '100px',
                    margin: '0px 30px',
                  }}
                >
                  {item.price}USD
                </Button>
                <input
                  type="number"
                  defaultValue={1}
                  ref={quantityRef}
                  onChange={(event) => {
                    const quantity = parseInt(event.target.value);
                    handleAddToCart(item, quantity);
                  }}
                  style={{
                    width: '80px',
                    borderRadius: '5px',
                    textAlign: 'center',
                    margin: '0 20px',
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product1;