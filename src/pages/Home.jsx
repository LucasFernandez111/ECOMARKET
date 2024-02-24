import React from "react";
import Nav from "../components/Nav";
import ListSections from "../components/ListSections";
import { BiSolidLeaf as IconLeaf } from "react-icons/bi";
import ScrollCard from "../components/ScrollCard";
import oferta from "../assets/inaguracion.png"

const Home = () => {
  return (
    <div className=" bg-lime-50 w-screen h-screen ">
      <header className="mb-24 sticky">
        <Nav />
      </header>

      <main className="flex flex-row">
        <aside className="mr-44 sticky">
          <ListSections />
        </aside>
        <article className="flex flex-col items-center justify-center w-screen h-screen">
        
          <img src={oferta} className=" flex gap-2 ml-38 mt-48 h-72 w-9/12 " />
          <div>
            <ScrollCard />
          </div>
        </article>
      </main>
    </div>
  );
};

export default Home;
