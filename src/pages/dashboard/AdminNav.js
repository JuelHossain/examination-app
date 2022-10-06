import { ActionIcon, Affix, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconFileSpreadsheet,
  IconIndentDecrease,
  IconIndentIncrease,
  IconManualGearbox,
  IconUserPlus,
  IconUsers,
} from "@tabler/icons";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const AdminNav = ({ opened, handlers }) => {
  const { toggle, open, close } = handlers;
  const adminNav = [
    { name: "Create Exam", link: "create-exam", icon: IconFileSpreadsheet },
    { name: "manage Exam", link: "manage-exam", icon: IconManualGearbox },
    { name: "create User", link: "create-user", icon: IconUserPlus },
    { name: "manage User", link: "manage-user", icon: IconUsers },
  ];
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
        <Stack
          spacing={10}
          className="h-full  basis-48 bg-main-50 sm:bg-main-50/20 py-4 px-2 border shadow-sm fixed sm:static z-20 "
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
          {adminNav.map((nav) => {
            const match = pathname.includes(nav.link);
            return (
              <Link
                key={nav.link}
                onClick={() => {
                  if (small) {
                    close();
                  }
                }}
                className={`font-semibold capitalize py-1 px-2   rounded flex gap-2 hover:bg-main-500 hover:text-main-50 duration-300 ${
                  (pathname === "/dashboard" && nav.link === "create-exam") ||
                  match
                    ? "bg-main-500 text-main-50 "
                    : "bg-main-200 text-main-600 "
                }`}
                to={nav.link}
              >
                <nav.icon />
                <p>{nav.name}</p>
              </Link>
            );
          })}
        </Stack>
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
