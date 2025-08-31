const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo /}
      <div className="text-2xl font-bold">MyStore</div>

      {/ Links */}
      <div className="flex space-x-6">
        <a href="/" className="hover:text-yellow-300 transition">Home</a>
        <a href="/products" className="hover:text-yellow-300 transition">Products</a>
        <a href="/about" className="hover:text-yellow-300 transition">About</a>
        <a href="/contact" className="hover:text-yellow-300 transition">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;