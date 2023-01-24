import { useEffect, useRef, useState } from "react";
import Chevron from "@/images/Chevron";
import { parseClassName } from "@/utils/parseClassName";
import Button from "@/components/Button";

interface Props {
  label: string;
  filterOptions: {
    name: string;
    id: string;
  }[];
  selectedOption?: string;
  setOptionCallback: (op?: string) => void;
  includeClear?: boolean;
}

const FilterOptions = ({
  label,
  filterOptions,
  selectedOption,
  setOptionCallback,
  includeClear = false,
}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const dropdownMenuContainer = useRef<HTMLElement>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        dropdownMenuContainer.current &&
        !dropdownMenuContainer.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownMenuContainer, menuOpen]);

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
    <div className="relative">
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

        {includeClear && selectedOption ? (
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

      <div className={filterOptionsContentClass} ref={dropdownMenuContainer}>
        {menuOpen ? (
          <div className="relative overflow-y-auto max-h-40">
            {filterOptions?.map(({ id, name }) => (
              <button
                key={id}
                onClick={() => {
                  setOptionCallback(id);
                  setMenuOpen(false);
                }}
                className={parseClassName([
                  "cursor-pointer w-full",
                  "flex p-1 px-2 text-sm hover:bg-gray-12",
                  selectedOption === name ? "bg-gray-12" : "bg-gray-10",
                ])}
              >
                {name}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FilterOptions;
