import { useState } from "react";
import Chevron from "@/images/Chevron";
import { parseClassName } from "@/utils/parseClassName";
import Button from "@/components/Button";

interface Props {
  label: string;
  filterOptions: {
    label: string;
    id: string;
  }[];
  selectedOption: string;
  setOptionCallback: (op?: string) => void;
}

const FilterOptions = ({
  label,
  filterOptions,
  selectedOption,
  setOptionCallback,
}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const includeClear = typeof selectedOption !== "undefined";

  const filterOptionsContentClass = parseClassName([
    "absolute",
    "min-w-[200px]",
    "bg-gray-10",
    "rounded",
    "overflow-hidden",
    "shadow",
    menuOpen
      ? "opacity-1 scale-x-1 scale-y-1"
      : "opacity-0 scale-x-1 scale-y-0",
    "z-10",
    "py-1",
    "flex",
    "flex-col",
    "origin-top top-10",
    "right-0",
  ]);

  return (
    <div className="c_filter-options relative">
      <div className="mb-1 flex items-center">
        <p className="text-xs font-bold uppercase text-zinc-200 mr-2">
          {label}
        </p>
        <Button
          text={selectedOption || "Select option"}
          onClick={() => (menuOpen ? setMenuOpen(false) : setMenuOpen(true))}
        >
          <Chevron
            className={menuOpen ? "ml-2 h-2 w-2 rotate-180" : "ml-2 h-2 w-2 "}
          />
        </Button>

        {includeClear ? (
          <Button
            onClick={(e) => {
              e.preventDefault();
              setOptionCallback(undefined);
            }}
            text="clear"
            buttonType="text"
          />
        ) : null}
      </div>

      <div className={filterOptionsContentClass}>
        {menuOpen ? (
          <div className="relative overflow-y-auto max-h-40">
            {filterOptions?.map(({ id, label }) => (
              <button
                onClick={() => {
                  setOptionCallback(id);
                  setMenuOpen(false);
                }}
                className={parseClassName([
                  "cursor-pointer w-full",
                  "flex p-1 px-2 text-sm hover:bg-gray-12",
                  selectedOption === id ? "hover:bg-gray-12" : "bg-gray-10",
                ])}
              >
                {label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FilterOptions;
