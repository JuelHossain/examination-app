import { Box, Header } from "@mantine/core";
import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/header/Navigation";

const Home = () => {
  return (
    <Box className="h-screen w-full flex flex-col overflow-hidden ">
      <Header className="py-2 static">
        <Navigation />
      </Header>
      <Box className="xl:container mx-auto px-5 h-full my-4 sm:my-8 overflow-hidden w-full">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Home;
