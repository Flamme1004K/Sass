import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from "./CheckBox.module.css";
import classNames from "classnames/bind";
//https://react-icons.github.io/react-icons/ 리액트 아이콘스
/*

yarn add react-icons
yarn add classnames
css module은 sass에서도 가능하다 module.css
node sass는 설치해야한다

:global .my-global-name
:local

global과 local을 알아보자

레거시 프로젝트에 리액트를 도입할 때 편하다.
*/

const cx = classNames.bind(styles);

function checkBox({ checked, children, ...rest }) {
  return (
    <div
      className={cx(
        "checkBox"
        //,asdf,asdf 이렇게 추가 가능
      )}
    >
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={cx("icon")}>
          {checked ? (
            <MdCheckBox className={cx("checked")} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default checkBox;
