import React from "react";
import PropTypes from "prop-types";

/**
 * 
 * @typedef ButtonProps
 * 
 * @property {"primary" | "danger"} variant Bien the cua nut
 * @property {function} onClick sự kiện khi click
 *  
 
 */
/**
 * @param {React.PropsWithChildren<ButtonProps>} props
 */

const Button = ({ variant, children, onClick }) => {
  const handelClear = (e) => {
    if (onClick) onClick();
  };

  return (
    <button onClick={handelClear} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};
Button.PropTypes = {
  variant: PropTypes.oneOf(["primary", "danger"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
