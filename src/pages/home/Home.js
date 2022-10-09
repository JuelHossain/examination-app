import { Footer, Header, Paper } from "@mantine/core";
import React from "react";
import { Outlet } from "react-router-dom";
import AppFooter from "../../components/footer/AppFooter";
import Navigation from "../../components/header/Navigation";

const Home = () => {
  return (
    <Paper className={`h-screen w-full flex flex-col overflow-hidden gap-4 `}>
      <Header className="py-2 static">
        <Navigation />
      </Header>
      <Paper className="xl:container mx-auto px-5 h-full  overflow-hidden w-full">
        <Outlet />
      </Paper>
      <Footer>
        <AppFooter />
      </Footer>
    </Paper>
  );
};

export default Home;
