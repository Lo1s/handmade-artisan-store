import { X, ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';

const CartSidebar = ({ isOpen, onClose, cart, cartTotal, updateQuantity, removeFromCart }) => {
  
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      ></div>
      
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col">
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900">Your Cart</h3>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-600 hover:text-gray-900" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <CartItem 
                  key={item.id}
                  item={item}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t p-6 bg-gray-50">
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Total:</span>
              <span className="text-2xl text-rose-600">${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-rose-600 text-white py-3 rounded-full font-semibold hover:bg-rose-700 transition">
              Proceed to Checkout
            </button>
            <p className="text-xs text-gray-500 text-center mt-3">
              Secure payment with Apple Pay or Google Pay
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;