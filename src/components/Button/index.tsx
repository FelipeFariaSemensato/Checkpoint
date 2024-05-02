import Props from './interfaces';
import './style.css';

const Button = (props: Props) => {
    return (
        <button onClick={props.onClick}> {props.text} </button>
    )
}

export default Button;