import './Button.css'

function Button(props) {
  return (
    <button
      id={props.id}
      className="my-button"
      style={{ backgroundColor: props.bgColor, marginTop: props.margin }}
    >
      {props.children}
    </button>
  )
}

export default Button
