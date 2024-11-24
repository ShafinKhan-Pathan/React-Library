import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import { books } from "./data";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  const [cart, setCart] = useState([]);
  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }
  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => {
        if (+book.id === +item.id) {
          return {
            ...item,
            quantity: +quantity,
          };
        } else {
          return item;
        }
      })
    );
  }
  function removeItem(item){
    setCart(cart.filter(book => item.id !== book.id))
  }
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function countCartItems(){
    let counter = 0
    cart.forEach((item) => {
      counter += item.quantity
    })
    return counter
  }
  return (
    <Router>
       
      <div className="App">
      <ScrollToTop />
        <Nav countCartItems={countCartItems}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookDetails books={books} addToCart={addToCart} cart={cart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
