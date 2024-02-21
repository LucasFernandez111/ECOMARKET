import React from "react";
import Nav from "../components/Nav";
import ListSections from "../components/ListSections";

const Home = () => {
  return (
    <div className=" bg-lime-200 w-screen h-screen ">
      <Nav />
      <ListSections></ListSections>
    </div>
  );
};

export default Home;
