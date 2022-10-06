import { LoadingOverlay } from "@mantine/core";
import React from "react";

const Home = () => {
  return (
    <div>
      this is home
      <LoadingOverlay visible overlayBlur={2} />
    </div>
  );
};

export default Home;
