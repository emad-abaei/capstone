function Button({ children, type, onClick, disabled }) {
  return (
    <button
      className={`${type === "delivery" ? "delivery" : ""}`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
