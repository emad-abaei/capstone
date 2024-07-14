function Button({ children, type, onClick }) {
  return (
    <button
      className={`${type === "delivery" ? "delivery" : ""}`}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
