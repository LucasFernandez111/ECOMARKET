import React from "react";
import Nav from "../components/Nav";
import ListSections from "../components/ListSections";
import { BiSolidLeaf as IconLeaf } from "react-icons/bi";
import ScrollCard from "../components/ScrollCard";

const Home = () => {
  return (
    <div className=" bg-lime-200 w-screen h-screen ">
      <header>
        <Nav />
      </header>

      <main className="flex flex-row">
        <aside>
          <ListSections />
        </aside>
        <article className="flex flex-col items-center justify-center w-screen h-screen">
          <h1 className=" font-medium text-lime-800 text-2xl flex gap-2  ">
            "Cambia al verde con EcoMarket! Tu destino eco-friendly para un
            mundo más saludable y sostenible."
            {<IconLeaf size={40} />}
          </h1>

          <div>
            <ScrollCard />
          </div>
        </article>
      </main>
    </div>
  );
};

export default Home;
