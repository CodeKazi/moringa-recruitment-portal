import './button.scss';

const Button3 = props => {
    return <button onClick={props.onClick}>
        {props.children}
    </button>;
};

export default Button3;