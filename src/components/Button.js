import PropTypes from "prop-types";

const Button = ({text, color, onClick}) => {
   
    return (
    <button onClick={onClick} style={{backgroundColor:color}}>{text}</button>
    )
}
Button.defaultProps = {
    color:"green"
}
Button.propTypes={
text:PropTypes.string,
color:PropTypes.string,
onClick:PropTypes.func,
}
export default Button
