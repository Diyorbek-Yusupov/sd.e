import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({ label }) => {
  return <div>{label}</div>;
};

export default Button;
