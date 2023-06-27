import './button.scss';

const Button1 = props => {
    return <button onClick={props.onClick}>
        {props.children}
    </button>;
};

export default Button1;