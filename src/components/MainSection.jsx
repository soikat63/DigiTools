import { useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import products from "../data/products.json";

const MainSection = ({
  cartItems,
  onAddToCart,
  onRemoveFromCart,
  onCheckout,
}) => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <section id="products" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Premium Digital Tools
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        {/* Toggle Buttons — matching Figma exactly */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-1 border border-gray-300 p-1 rounded-full">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === "products"
                  ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md"
                  : "text-gray-500 "
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === "cart"
                  ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md"
                  : "text-gray-500 "
              }`}
            >
              Cart {cartItems.length > 0 ? `(${cartItems.length})` : ""}
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                isInCart={cartItems.some((item) => item.id === product.id)}
              />
            ))}
          </div>
        ) : (
          <Cart
            cartItems={cartItems}
            onRemove={onRemoveFromCart}
            onCheckout={onCheckout}
          />
        )}
      </div>
    </section>
  );
};

export default MainSection;
