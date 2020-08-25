import React from "react";
import ClassNames from "classnames";
import "./Button.scss";

// large, medium, small
function Button({ children, size }) {
  return <button className={classNames("Button", size)}>{children}</button>;
}
Button.defaultProps = {
  size: "Medium",
};

//Button medium
export default Button;

//ClassName libary를 사용하면 버튼에 여러가지 기능을 추가 할 수 있다.  yarn name className
