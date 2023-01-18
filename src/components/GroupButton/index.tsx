import React from "react";
import Button from "@/components/Button";

interface Props {
  selectOptions: { id: string; text: string }[];
  selectOption: (id: string) => void;
  selectedOption: string;
}

const GroupButton = ({
  selectOptions,
  selectOption,
  selectedOption,
}: Props) => {
  return (
    <div className="w-fit flex shadow">
      {selectOptions.map((option, i) => (
        <Button
          key={i}
          onClick={() => selectOption(option.id)}
          text={option.text}
          buttonType={selectedOption === option.id ? "active" : "base"}
          customClasses="first:rounded-l-xl last:rounded-r-xl"
        />
      ))}
    </div>
  );
};

export default GroupButton;
