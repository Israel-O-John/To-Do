function Button({ children }) {
  return (
    <button className="text-base font-semibold font-secondaryFont text-gray-700 py-3 px-5 rounded-md border border-gray-300 bg-white hover:text-white hover:bg-button-blue w-[49%] transition-all duration-300">
      {children}
    </button>
  );
}
export default Button;
