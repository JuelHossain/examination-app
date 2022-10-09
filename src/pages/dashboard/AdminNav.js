import { ActionIcon, Affix, Card } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconIndentDecrease, IconIndentIncrease } from "@tabler/icons";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const AdminNav = ({ opened, handlers, navs }) => {
  const { toggle, open, close } = handlers;

  const { pathname } = useLocation();
  const small = useMediaQuery("(max-width:640px)");
  useEffect(() => {
    if (small) {
      close();
    } else {
      open();
    }
  }, [small]);
  return (
    <>
      {opened && (
        <Card
          withBorder
          spacing={10}
          className="h-full  basis-48 py-4 px-2  shadow-sm fixed sm:static z-20 gap-2 flex flex-col"
        >
          <ActionIcon
            onClick={toggle}
            size={"lg"}
            className={
              "bg-main-100 w-full justify-start items-center text-main-500 sm:hidden"
            }
          >
            <IconIndentDecrease />
          </ActionIcon>
          {navs.map((nav) => {
            const match = pathname.includes(nav.link);
            return (
              <Link
                key={nav.link}
                onClick={() => {
                  if (small) {
                    close();
                  }
                }}
                className={`font-semibold capitalize py-1 px-2   rounded flex gap-2 hover:bg-main-500 hover:text-main-50 dark:hover:bg-main-900 dark:hover:text-main-200 duration-300 ${
                  (pathname === "/dashboard" && nav?.index) || match
                    ? "bg-main-500 text-main-50 dark:bg-main-900 dark:text-main-200 "
                    : "bg-main-200 text-main-600 dark:bg-main-900/50 dark:text-main-400 "
                }`}
                to={nav.link}
              >
                <nav.icon />
                <p>{nav.name}</p>
              </Link>
            );
          })}
        </Card>
      )}
      {opened || (
        <Affix position={{ left: 0, top: 69 }} className="sm:hidden">
          <ActionIcon
            onClick={toggle}
            size={"lg"}
            className={"bg-main-100 text-main-500"}
          >
            <IconIndentIncrease />
          </ActionIcon>
        </Affix>
      )}
    </>
  );
};

export default AdminNav;
