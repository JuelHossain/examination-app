import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ mobile }) => {
  const nav = ["examination", "dashboard"];
  const { pathname } = useLocation();
  const links = nav.map((n) => {
    const match = pathname.includes(n);
    return (
      <Link
        key={Math.random()}
        to={n}
        className={`capitalize py-1 px-3 rounded font-semibold   ${
          (n === "examination" && pathname === "/") || match
            ? "bg-main-500 text-main-50 dark:bg-main-900 dark:text-main-200"
            : "bg-main-200 text-main-500 dark:text-main-400 dark:bg-main-900/50 "
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
