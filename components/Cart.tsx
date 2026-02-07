
import React from 'react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  onClear: () => void;
  total: number;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQty, onRemove, onClear, total }) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className={`fixed top-0 right-0 h-full w-full max-w-md bg-gray-900 shadow-2xl z-[70] transform transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-2xl font-bebas text-white tracking-wider flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Your Cart
              </h2>
              {items.length > 0 && (
                <button 
                  onClick={onClear}
                  className="ml-4 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-red-500 transition-colors border border-gray-800 hover:border-red-500/30 px-2 py-1 rounded"
                >
                  Clear All
                </button>
              )}
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items List */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-lg">Your cart is currently empty.</p>
                <button 
                  onClick={onClose}
                  className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
                >
                  Start Ordering
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-20 h-20 bg-gray-800 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h4 className="text-white font-bold">{item.name}</h4>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-amber-400 text-sm font-bold mt-1">₹{item.price}/-</p>
                    <div className="flex items-center mt-3 bg-gray-800 w-fit rounded-lg px-2 py-1">
                      <button 
                        onClick={() => onUpdateQty(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                      >
                        -
                      </button>
                      <span className="mx-4 text-white font-bold text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQty(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-gray-800 bg-gray-900/80 backdrop-blur-md">
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400 font-medium">Grand Total</span>
                <span className="text-2xl font-bold text-white">₹{total}/-</span>
              </div>
              <button 
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-xl shadow-red-600/20 transition-all transform active:scale-95 flex items-center justify-center"
                onClick={() => alert('Order Placed Successfully! In a real app, this would redirect to checkout.')}
              >
                Checkout Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </button>
              <p className="text-center text-gray-500 text-[10px] mt-4 uppercase tracking-[0.2em]">
                Taxes and delivery fees calculated at next step
              </p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Cart;
