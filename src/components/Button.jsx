function Button({
  children,
  handleAdd,
  handleClose,
  handleEdit,
  handleDelete,
  handleCancel,
  handleSave,
}) {
  if (handleAdd) {
    return (
      <button className="btn" onClick={handleAdd}>
        {children}
      </button>
    );
  }

  if (handleClose) {
    return (
      <button className="btn" onClick={handleClose}>
        {children}
      </button>
    );
  }

  if (handleEdit) {
    return (
      <button className="btn" onClick={handleEdit}>
        {children}
      </button>
    );
  }

  if (handleDelete) {
    return (
      <button className="btn" onClick={handleDelete}>
        {children}
      </button>
    );
  }

  if (handleCancel) {
    return (
      <button className="btn" onClick={handleCancel}>
        {children}
      </button>
    );
  }

  if (handleSave) {
    return (
      <button className="btn" onClick={handleSave}>
        {children}
      </button>
    );
  }
}
export default Button;
