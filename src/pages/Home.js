import { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercices from "../components/SearchExercices";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercices />
      <Exercises />
    </Box>
  );
};

export default Home;
