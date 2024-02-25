import React from "react";
import Nav from "../components/Nav";
import ListSections from "../components/ListSections";
import { BiSolidLeaf as IconLeaf } from "react-icons/bi";
import ScrollCard from "../components/ScrollCard";
import oferta from "../assets/inaguracion.png";
import Carousel from "../components/Carousel";


const Home = () => {
  return (
    <div className=" bg-lime-50 w-screen h-screen ">
      <header className="mb-24 sticky z-[1000]">
        <Nav />
      </header>

      <main className="flex flex-row">
        <aside className="mr-44 sticky">
          <ListSections />
        </aside>
        <article className="flex flex-col items-center justify-center w-screen h-screen">
          <img
            src={oferta}
            className=" flex gap-2 ml-38 mt-48 h-72 w-9/12 hover:scale-105 "
          />
          <div>
            <Carousel>
              <div>
                <ScrollCard></ScrollCard>
              </div>
              <div>
                <ScrollCard></ScrollCard>
              </div>
              <div>
                <ScrollCard></ScrollCard>
              </div>
            </Carousel>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Home;
