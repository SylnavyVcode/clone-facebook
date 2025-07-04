export default function Button(props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={props.className}
    >
      {props.children}
    </button>
  );
}