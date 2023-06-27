import './button.scss';

const Button2 = props => {
    return <button onClick={props.onClick}>
        {props.children}
    </button>;
};

export default Button2;