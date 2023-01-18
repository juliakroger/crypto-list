import React from "react";

const BUTTON_BASE_SIZE = "text-sm px-3 py-1.5";
const BUTTON_TYPE_STYLES = {
  base: "bg-black text-white",
  active: "bg-active-blue text-white",
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  buttonType?: "base" | "active";
  customClasses?: string;
}

const Button = ({
  text,
  buttonType = "base",
  customClasses,
  ...htmlAttributes
}: Props) => {
  const buttonClassName = [
    BUTTON_BASE_SIZE,
    customClasses,
    BUTTON_TYPE_STYLES[buttonType],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClassName} {...htmlAttributes}>
      {text}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
