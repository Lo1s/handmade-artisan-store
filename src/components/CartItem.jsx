import { Plus, Minus, Trash2 } from 'lucide-react';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  
  return (
    <div className="flex gap-4 bg-gray-50 p-4 rounded-lg">
      <img 
        src={item.image} 
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900">{item.name}</h4>
        <p className="text-rose-600 font-medium">${item.price}</p>
        
        <div className="flex items-center gap-3 mt-2">
          <button 
            onClick={() => updateQuantity(item.id, -1)}
            className="p-1 hover:bg-gray-200 rounded"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="font-medium">{item.quantity}</span>
          <button 
            onClick={() => updateQuantity(item.id, 1)}
            className="p-1 hover:bg-gray-200 rounded"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button 
            onClick={() => removeFromCart(item.id)}
            className="ml-auto p-1 hover:bg-red-100 rounded text-red-600"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;