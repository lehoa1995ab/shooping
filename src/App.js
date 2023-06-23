import './App.css';
import Product1 from './components/Products';
import ShoppingCard from './components/ShoppingCards';


function App() {
  return (
    <div style={
      {
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-evenly',  
      }}>
     <Product1/>
     <ShoppingCard/>
    </div>
  );
}
export default App;
