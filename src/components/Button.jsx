function Button({
  children,
  handleAdd,
  handleClose,
  handleEdit,
  handleDelete,
}) {
  if (handleAdd) {
    return (
      <button
        className="text-base font-semibold font-secondaryFont text-gray-700 py-3 px-5 rounded-md border border-gray-300 bg-white hover:text-white hover:bg-button-blue w-[49%] transition-all duration-300"
        onClick={handleAdd}
      >
        {children}
      </button>
    );
  }

  if (handleClose) {
    return (
      <button
        className="text-base font-semibold font-secondaryFont text-gray-700 py-3 px-5 rounded-md border border-gray-300 bg-white hover:text-white hover:bg-button-blue w-[49%] transition-all duration-300"
        onClick={handleClose}
      >
        {children}
      </button>
    );
  }

  if (handleEdit) {
    return (
      <button
        className="text-base font-semibold font-secondaryFont text-gray-700 py-3 px-5 rounded-md border border-gray-300 bg-white hover:text-white hover:bg-button-blue w-[49%] transition-all duration-300"
        onClick={handleEdit}
      >
        {children}
      </button>
    );
  }

  if (handleDelete) {
    return (
      <button
        className="text-base font-semibold font-secondaryFont text-gray-700 py-3 px-5 rounded-md border border-gray-300 bg-white hover:text-white hover:bg-button-blue w-[49%] transition-all duration-300"
        onClick={handleDelete}
      >
        {children}
      </button>
    );
  }
}
export default Button;
