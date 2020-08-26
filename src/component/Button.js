import React from "react";
import ClassNames from "classnames";
import "./Button.scss";
//https://yeun.github.io/open-color/ 컬러사이트
// size : large, medium, small
// color : blue, pick, gray
function Button({ children, size, color, outline, fullWidth }) {
  return (
    <button
      className={ClassNames("Button", size, color, {
        outline,
        fullWidth,
      })}
    >
      {children}
    </button>
  );
}
Button.defaultProps = {
  size: "Medium",
  color: "blue",
};

//Button medium
export default Button;

//ClassName libary를 사용하면 버튼에 여러가지 기능을 추가 할 수 있다.  yarn name className
