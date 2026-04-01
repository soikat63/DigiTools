
import { toast, ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './components/Banner'
import BannerBottom from './components/BannerBottom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Started from './components/Started'
import Workflow from './components/Workflow'
import MainSection from './components/MainSection'
import { useState } from 'react'

function App() {
  const [cartItems, setCartItems] = useState([]);

  // const addToCart = (product) => {
  //   const exists = cartItems.find((item) => item.id === product.id);
  //   if (exists) {
  //     toast.warning(`"${product.name}" is already in your cart!`, {
  //       position: "top-right",
  //       autoClose: 2500,
  //     });
  //     return;
  //   }
  //   setCartItems([...cartItems, product]);
  //   toast.success(`"${product.name}" added to cart! 🛒`, {
  //     position: "top-right",
  //     autoClose: 2500,
  //   });
  // };

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) {
      toast.warning(`"${product.name}" is already in your cart!`, {
        position: "top-right",
        autoClose: 2500,
        toastId: `exist-${product.id}`, // duplicate stop
      });
      return;
    }

    setCartItems((prev) => [...prev, product]); // ✅ correct update

    toast.success(`"${product.name}" added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2500,
      toastId: `add-${product.id}`, // duplicate stop
    });
  };

  

  const removeFromCart = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    setCartItems(cartItems.filter((item) => item.id !== productId));
    toast.error(`"${product?.name}" removed from cart.`, {
      position: "top-right",
      autoClose: 2500,
    });
  };

  const checkout = () => {
    setCartItems([]);
    toast.success("Checkout successful! 🎉", {
      position: "top-right",
      autoClose: 3000,
    });
  };


  return (
    <>
      <ToastContainer />
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <BannerBottom />
      <MainSection
        cartItems={cartItems}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        onCheckout={checkout}
      />
      <Started />
      <Pricing />
      <Workflow />
      <Footer />
    </>
  );
}

export default App
