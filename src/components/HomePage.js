import React, { useEffect, useState } from "react";
import { genres } from "../resources/index";
import Movies from "./Movies";

const HomePage = () => {
  console.log(genres);

  return (
    <div>
      <Movies />
    </div>
  );
};

export default HomePage;
