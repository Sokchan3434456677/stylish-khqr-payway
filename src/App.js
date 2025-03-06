// import React from 'react';
// import { CartProvider } from './components/CartContext'; // Import CartProvider
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Fproduct from './components/Fproduct';
// import Discount from './components/Discount';
// import Container from './components/Container';

// import Containermd from './components/Containermd';
// // import Modelshow from './components/Modelshow';
// import Searchbox from './components/Searchbox';
// import ModelFade from './components/ModelFade';
// import Login from './components/Login';
// import Cart from './components/Cart';  // Import Cart component

// import './App.css';

// function App() {
//   return (
//     <CartProvider> {/* Wrap the entire app in CartProvider */}
//       <div className="App">
//         {/* Your other components */}
//         <Header />
//         <Searchbox />
//         <Login />
//         <Container />
//         <Discount />
        
//         {/* Featured Products */}
//         <Fproduct />
        
//         {/* Display Cart */}
//         <Cart /> {/* This will show the cart items */}

       
//         <ModelFade />
//         <Containermd />
//         {/* <Modelshow /> */}
//         <Footer />
//       </div>
//     </CartProvider> 
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { CartProvider } from './components/CartContext'; // Import CartProvider
import Header from './components/Header';
import Footer from './components/Footer';
import Fproduct from './components/Fproduct';
import Discount from './components/Discount';
import Container from './components/Container';
import Containermd from './components/Containermd';
import Searchbox from './components/Searchbox';
import ModelFade from './components/ModelFade';
import Login from './components/Login';
import Cart from './components/Cart';  // Import Cart component

import './App.css';

function App() {
  return (
    <CartProvider> {/* Wrap the entire app in CartProvider */}
      <div className="App">
        {/* Your other components */}
        <Header />
        <Searchbox />
        <Login />
        <Container />
        <Discount />
        
        {/* Featured Products */}
        <Fproduct />
        
        {/* Display Cart */}
        <Cart /> {/* This will show the cart items */}
       
        <ModelFade />
        <Containermd />
        <Footer />
      </div>
    </CartProvider> 
  );
}

export default App;
