// https://bobbyhadz.com/blog/react-eslint-error-missing-in-props-validation

/* eslint-disable react/prop-types */

const Button = ({ children }) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary ">{children}</button>
    );
};

export default Button;


