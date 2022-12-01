/** Button.js */

const Button = ({button, handleSort}) => (
    <button onClick={() => handleSort(button)}>
    {button.toUpperCase()}
  </button>
  );

export default Button;