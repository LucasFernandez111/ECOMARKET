import React from "react";
import Section from "./Section";
import { MdCookie as IconCookie } from "react-icons/md";
import { GiCheeseWedge as IconCheese } from "react-icons/gi";
import { GiPineapple as IconPineApple } from "react-icons/gi";
import { BiSolidDrink as IconDrink } from "react-icons/bi";
import { MdSetMeal as IconMeal } from "react-icons/md";

const ListSections = () => {
  return (
    <div className="bg-lime-600 w-52 fixed h-screen flex items-center ">
      <div className="p-4 flex flex-col gap-3">
        <Section icon={<IconMeal size={30} />} name={"Carnes"} />
        <Section icon={<IconCheese size={30} />} name={"Lácteos"} />
        <Section icon={<IconCookie size={30} />} name={"Almacén"} />
        <Section
          icon={<IconPineApple size={30} />}
          name={"Frutas y Verduras"}
        />
        <Section icon={<IconDrink size={30} />} name={"Bebidas"} />
      </div>
      <div></div>
    </div>
  );
};

export default ListSections;
