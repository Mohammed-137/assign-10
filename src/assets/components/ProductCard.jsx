function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col hover:shadow-lg transition">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-contain rounded-md" 
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600 font-medium">₹ {product.price}</p>
      <p className="text-sm text-gray-500">Category: {product.category}</p>
      <p className="text-yellow-600">⭐ {product.rating}</p>
      <button 
        onClick={() => onAddToCart(product)} 
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;