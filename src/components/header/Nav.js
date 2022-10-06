import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ mobile }) => {
  const nav = ["examination", "dashboard"];
  const { pathname } = useLocation();
  console.log(pathname);
  const links = nav.map((n) => {
    const match = n === pathname.slice(1);
    return (
      <Link
        key={Math.random()}
        to={n}
        className={`capitalize py-1 px-3 rounded font-semibold   ${
          (n === "examination" && pathname === "/") || match
            ? "bg-main-500 text-main-50"
            : "bg-main-200 text-main-500"
        }`}
      >
        {n}
      </Link>
    );
  });

  return mobile ? (
    <div className={`flex gap-2 rounded flex-col  `}>{links}</div>
  ) : (
    <div className={` gap-2 rounded sm:flex hidden`}>{links}</div>
  );
};

export default Nav;
