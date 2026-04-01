const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-12">
        <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
          <span className="text-6xl">🛒</span>
          <p className="text-xl font-semibold text-gray-500">
            Your cart is empty
          </p>
          <p className="text-sm text-gray-400">
            Add some products to get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
      {/* Cart Title */}
      <h3 className="text-xl font-extrabold text-gray-900 mb-6">Your Cart</h3>

      {/* Items */}
      <div className="flex flex-col gap-3 mb-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-gray-50 rounded-xl px-4 py-4"
          >
            {/* Icon */}
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl shadow-sm border border-gray-100 shrink-0">
              {item.icon}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
              <p className="text-sm text-gray-400">${item.price}</p>
            </div>

            {/* Remove */}
            <button
              onClick={() => onRemove(item.id)}
              className="text-red-500 hover:text-red-700 text-sm font-semibold transition-colors shrink-0"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex items-center justify-between py-4 border-t border-gray-100 mb-5">
        <span className="text-gray-500 font-medium">Total:</span>
        <span className="text-2xl font-extrabold text-gray-900">${total}</span>
      </div>

      {/* Checkout Button */}
      <button
        onClick={onCheckout}
        className="w-full  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#9514FA] hover:to-[#4F39F6]  text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-lg "
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
