import React from "react";

const BUTTON_BASE_SIZE = "flex items-center text-sm px-3 py-1.5 rounded";
const BUTTON_TYPE_STYLES = {
  base: "bg-gray-13 text-white",
  active: "bg-active-blue text-white",
  text: "text-xs text-zinc-400 hover:text-zinc-300 uppercase underline",
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  buttonType?: "base" | "active" | "text";
  customClasses?: string;
}

const Button = ({
  text,
  buttonType = "base",
  customClasses,
  children,
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
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
