import { NavLink } from "react-router-dom";
import { parseClassName } from "@/utils/parseClassName";

const ROUTES = [
  { title: "Overview", path: "/" },
  { title: "Trading", path: "/trading" },
  { title: "Market", path: "/market" },
  { title: "Scanner", path: "/scanner" },
];

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <img
          alt="logo"
          width={50}
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/krinnxb23kgp75s0jyhp"
        />
      </div>

      <div className="flex items-center text-sm gap-2">
        {ROUTES.map(({ title, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              parseClassName([
                "p-1 px-3 font-medium",
                isActive
                  ? "bg-active-blue rounded-xl text-black"
                  : "text-white",
              ])
            }
          >
            {title}
          </NavLink>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Header;
