import React from "react";

import { Content } from "./ButtonStyle";

const Button = ({
  type,
  onClick,
  disabled,
  btnType = "primary",
  children,
  width
}) => {
  return (
    <Content
      type={type}
      btnType={btnType}
      onClick={onClick}
      disabled={disabled}
      width={width}
    >
      {children}
    </Content>
  );
};

export default Button;
