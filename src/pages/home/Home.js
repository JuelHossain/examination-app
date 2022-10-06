import { AppShell, Footer, Header } from "@mantine/core";
import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/header/Navigation";

const Home = () => {
  return (
    <AppShell
      classNames={{
        root: "h-screen flex flex-col",
        body: "overflow-auto",
        main: "container mx-auto px-5 pt-16 sm:pt-20",
      }}
      header={
        <Header className="py-2 px-5  ">
          <Navigation />
        </Header>
      }
      footer={<Footer>hello</Footer>}
    >
      <Outlet />
    </AppShell>
  );
};

export default Home;
